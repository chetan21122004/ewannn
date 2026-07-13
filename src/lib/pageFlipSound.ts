const PAGE_FLIP_SOUND_URL = "/sounds/page-flip.wav";

let audioContext: AudioContext | null = null;
let decodedBuffer: AudioBuffer | null = null;
let decodePromise: Promise<AudioBuffer | null> | null = null;

const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};

const loadPageFlipBuffer = async () => {
  if (decodedBuffer) return decodedBuffer;
  if (decodePromise) return decodePromise;

  decodePromise = (async () => {
    const ctx = getAudioContext();
    if (!ctx) return null;

    try {
      const response = await fetch(PAGE_FLIP_SOUND_URL);
      if (!response.ok) return null;
      const arrayBuffer = await response.arrayBuffer();
      decodedBuffer = await ctx.decodeAudioData(arrayBuffer.slice(0));
      return decodedBuffer;
    } catch {
      return null;
    }
  })();

  return decodePromise;
};

/** Warm up audio so the first page turn feels instant. */
export const preloadPageFlipSound = () => {
  void loadPageFlipBuffer();
};

/** Smooth, studio-style page turn with subtle pitch variation. */
export const playPageFlipSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  void loadPageFlipBuffer().then((buffer) => {
    if (!buffer || !ctx) return;

    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    const lowPass = ctx.createBiquadFilter();

    source.buffer = buffer;
    source.playbackRate.value = 0.94 + Math.random() * 0.1;

    lowPass.type = "lowpass";
    lowPass.frequency.value = 6800;
    lowPass.Q.value = 0.7;

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.42, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + buffer.duration / source.playbackRate.value + 0.02);

    source.connect(lowPass);
    lowPass.connect(gain);
    gain.connect(ctx.destination);

    source.start(now);
    source.stop(now + buffer.duration / source.playbackRate.value + 0.03);
  });
};
