import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/sounds/page-flip.wav");

const sampleRate = 44100;
const duration = 0.52;
const sampleCount = Math.floor(sampleRate * duration);

const smoothStep = (x) => x * x * (3 - 2 * x);

const smoothEnvelope = (t) => {
  const attack = 0.08;
  const releaseStart = 0.62;
  if (t < attack) return smoothStep(t / attack);
  if (t > releaseStart) {
    const p = (t - releaseStart) / (1 - releaseStart);
    return Math.pow(1 - p, 2.4);
  }
  return 1;
};

const whooshFrequency = (t) => {
  const peak = 0.36;
  if (t < peak) {
    const p = t / peak;
    return 280 + 1850 * Math.pow(p, 0.55);
  }
  const p = (t - peak) / (1 - peak);
  return 2130 - 1500 * Math.pow(p, 1.05);
};

const createPinkNoise = () => {
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let b4 = 0;
  let b5 = 0;
  let b6 = 0;

  return () => {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    return pink * 0.09;
  };
};

const pink = createPinkNoise();
const left = new Float32Array(sampleCount);
const right = new Float32Array(sampleCount);

let lpLeft = 0;
let lpRight = 0;
let bpLeft = 0;
let bpRight = 0;
let thudPhase = 0;
let prevNoiseL = 0;
let prevNoiseR = 0;

for (let i = 0; i < sampleCount; i++) {
  const t = i / sampleCount;
  const env = smoothEnvelope(t);
  const freq = whooshFrequency(t);
  const omega = (2 * Math.PI * freq) / sampleRate;
  const alpha = Math.exp(-omega * 0.85);

  const nL = pink();
  const nR = pink() * 0.9 + nL * 0.1;

  lpLeft = alpha * lpLeft + (1 - alpha) * nL;
  lpRight = alpha * lpRight + (1 - alpha) * nR;

  const textureL = nL - prevNoiseL;
  const textureR = nR - prevNoiseR;
  prevNoiseL = nL;
  prevNoiseR = nR;
  bpLeft = 0.82 * bpLeft + textureL * 0.35;
  bpRight = 0.82 * bpRight + textureR * 0.35;

  const whoosh = (lpLeft + lpRight) * 0.48;
  const texture = (bpLeft + bpRight) * 0.14 * Math.sin(t * Math.PI);

  let thud = 0;
  if (t > 0.74) {
    const thudT = (t - 0.74) / 0.26;
    const thudEnv = Math.pow(1 - thudT, 2.8) * smoothStep(Math.min(thudT * 2.5, 1));
    thudPhase += (2 * Math.PI * 84) / sampleRate;
    thud = Math.sin(thudPhase) * thudEnv * 0.055;
  }

  const pan = Math.sin(t * Math.PI) * 0.14;
  const mixed = (whoosh + texture + thud) * env;

  left[i] = mixed * (0.94 - pan);
  right[i] = mixed * (0.94 + pan);
}

const writeWav = (leftChannel, rightChannel, path) => {
  const numSamples = leftChannel.length;
  const bytesPerSample = 2;
  const numChannels = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const l = Math.max(-1, Math.min(1, leftChannel[i]));
    const r = Math.max(-1, Math.min(1, rightChannel[i]));
    buffer.writeInt16LE(Math.round(l * 32767), offset);
    buffer.writeInt16LE(Math.round(r * 32767), offset + 2);
    offset += 4;
  }

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, buffer);
};

writeWav(left, right, outputPath);
console.log(`Wrote ${outputPath} (${sampleCount} samples, ${duration}s)`);
