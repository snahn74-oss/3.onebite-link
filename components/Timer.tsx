type TimerProps = {
  remainingSeconds: number;
  totalSeconds: number;
};

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Timer({ remainingSeconds, totalSeconds }: TimerProps) {
  const hours = Math.floor(remainingSeconds / 3600);
  const mm = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, "0");
  const ss = String(remainingSeconds % 60).padStart(2, "0");
  const display = hours > 0 ? `${String(hours).padStart(2, "0")}:${mm}:${ss}` : `${mm}:${ss}`;
  const ratio = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;

  return (
    <div className="relative h-64 w-64">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          strokeWidth="10"
          className="stroke-red-500/15"
        />
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - ratio)}
          className="stroke-red-500 transition-[stroke-dashoffset] duration-1000 ease-linear"
        />
      </svg>
      <div
        className={`absolute inset-0 flex items-center justify-center font-mono font-bold tabular-nums ${hours > 0 ? "text-4xl" : "text-5xl"}`}
        role="timer"
      >
        {display}
      </div>
    </div>
  );
}
