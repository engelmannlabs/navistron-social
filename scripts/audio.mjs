// Trilha chiptune original (sem dependências) para os Reels — gera um WAV mono 44,1 kHz / 16 bit.
// Uso: node scripts/audio.mjs <saida.wav> [duracao_s] [json-de-opcoes]
// Opções (JSON): { bpm, transpose (semitons), hit (segundo do "impacto"), riserStart, fadeOut, lead, bass }
// Tudo é sintetizado (onda quadrada, triângulo, ruído): trilha 100% própria, livre de direitos.
import { writeFileSync } from 'node:fs';

const out = process.argv[2] || 'audio.wav';
const DUR = parseFloat(process.argv[3] || '13.5');
const opt = Object.assign({ bpm: 132, transpose: 0, hit: 9.0, riserStart: 6.5, fadeOut: 0.6, lead: 0.16, bass: 0.22 }, JSON.parse(process.argv[4] || '{}'));
const SR = 44100;
const N = Math.floor(DUR * SR);
const buf = new Float32Array(N);

const midi = m => 440 * Math.pow(2, (m - 69) / 12);
// progressão: Am | G | F | E — arpejos de 16 notas (A4 C5 E5 A5 …), baixo em colcheias
const chords = [[69, 72, 76, 81], [67, 71, 74, 79], [65, 69, 72, 77], [64, 68, 71, 76]];
const bassNotes = [45, 43, 41, 40];
const sixteenth = 60 / opt.bpm / 4;

let seed = 7; const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

const square = (ph) => (ph % 1) < 0.5 ? 1 : -1;
const tri = (ph) => 1 - 4 * Math.abs(Math.round(ph - 0.25) - (ph - 0.25));

for (let i = 0; i < N; i++) {
  const t = i / SR;
  const step = Math.floor(t / sixteenth);
  const bar = Math.floor(step / 16) % 4;
  const inStep = t - step * sixteenth;
  let v = 0;

  // lead: arpejo sobe-desce (0 1 2 3 2 1 …), envelope curto
  const chord = chords[bar];
  const seqIdx = [0, 1, 2, 3, 2, 1, 0, 2][step % 8];
  const f = midi(chord[seqIdx] + opt.transpose);
  const envL = Math.exp(-inStep * 18);
  v += opt.lead * envL * square(t * f) * 0.6 + opt.lead * envL * 0.25 * square(t * f * 2.0);

  // baixo em colcheias (a cada 2 semicolcheias), triângulo com leve saturação
  const eighth = Math.floor(t / (sixteenth * 2));
  const inEighth = t - eighth * sixteenth * 2;
  const fb = midi(bassNotes[bar] + opt.transpose);
  const envB = Math.exp(-inEighth * 6);
  v += opt.bass * envB * Math.tanh(1.8 * tri(t * fb));

  // bumbo nos tempos 1 e 3, caixa (ruído) nos 2 e 4
  const beat = Math.floor(t / (sixteenth * 4));
  const inBeat = t - beat * sixteenth * 4;
  if (beat % 2 === 0) { const fk = 40 + 110 * Math.exp(-inBeat * 30); v += 0.5 * Math.exp(-inBeat * 14) * Math.sin(2 * Math.PI * fk * inBeat); }
  else { v += 0.16 * Math.exp(-inBeat * 28) * (rnd() * 2 - 1); }

  // riser (ruído crescendo) até o impacto, depois um "hit" grave
  if (t >= opt.riserStart && t < opt.hit) { const p = (t - opt.riserStart) / (opt.hit - opt.riserStart); v += 0.22 * p * p * (rnd() * 2 - 1); }
  if (t >= opt.hit && t < opt.hit + 0.6) { const th = t - opt.hit; v += 0.7 * Math.exp(-th * 6) * Math.sin(2 * Math.PI * (55 + 80 * Math.exp(-th * 20)) * th); }

  // ducking suave no impacto + fade in/out
  let g = 1;
  if (t >= opt.hit && t < opt.hit + 0.35) g *= 0.35 + 0.65 * ((t - opt.hit) / 0.35);
  if (t < 0.25) g *= t / 0.25;
  if (t > DUR - opt.fadeOut) g *= Math.max(0, (DUR - t) / opt.fadeOut);
  buf[i] = v * g;
}

// normaliza para -1 dBFS e escreve WAV 16-bit
let peak = 0; for (let i = 0; i < N; i++) peak = Math.max(peak, Math.abs(buf[i]));
const gain = peak > 0 ? 0.89 / peak : 1;
const data = Buffer.alloc(N * 2);
for (let i = 0; i < N; i++) data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(buf[i] * gain * 32767))), i * 2);
const header = Buffer.alloc(44);
header.write('RIFF', 0); header.writeUInt32LE(36 + data.length, 4); header.write('WAVE', 8);
header.write('fmt ', 12); header.writeUInt32LE(16, 16); header.writeUInt16LE(1, 20); header.writeUInt16LE(1, 22);
header.writeUInt32LE(SR, 24); header.writeUInt32LE(SR * 2, 28); header.writeUInt16LE(2, 32); header.writeUInt16LE(16, 34);
header.write('data', 36); header.writeUInt32LE(data.length, 40);
writeFileSync(out, Buffer.concat([header, data]));
console.log(`audio ok: ${out} ${DUR}s bpm=${opt.bpm} hit=${opt.hit}`);
