let ctx: AudioContext | null = null;

// 브라우저 자동재생 정책 때문에 사용자 클릭(시작 버튼) 시점에 미리 준비해 둔다.
export function prepareAlarm() {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
}

// 짧은 "삐" 소리를 3번 반복한다.
export function playAlarm() {
  prepareAlarm();
  if (!ctx) return;
  const c = ctx;
  for (let i = 0; i < 3; i++) {
    const t = c.currentTime + i * 0.5;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.02);
    gain.gain.linearRampToValueAtTime(0, t + 0.35);
    osc.connect(gain).connect(c.destination);
    osc.start(t);
    osc.stop(t + 0.4);
  }
}
