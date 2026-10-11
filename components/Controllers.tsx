type ControllersProps = {
  running: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const buttonClass =
  "rounded-full border border-foreground/20 px-5 py-2 font-medium transition-all duration-200 ease-out enabled:hover:-translate-y-0.5 enabled:hover:bg-foreground/10 enabled:hover:shadow-md enabled:active:translate-y-0 enabled:active:scale-90 disabled:cursor-not-allowed disabled:opacity-40";

export default function Controllers({
  running,
  onStart,
  onStop,
  onReset,
}: ControllersProps) {
  return (
    <div className="flex gap-3">
      <button className={buttonClass} onClick={onStart} disabled={running}>
        시작
      </button>
      <button
        className={`${buttonClass} ${running ? "animate-pulse border-red-500/60" : ""}`}
        onClick={onStop}
        disabled={!running}
      >
        정지
      </button>
      <button className={buttonClass} onClick={onReset}>
        초기화
      </button>
    </div>
  );
}
