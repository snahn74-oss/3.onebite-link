import { MAX_MINUTES, MIN_MINUTES } from "@/lib/duration";

type TimerSettingInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function TimerSettingInput({
  value,
  onChange,
}: TimerSettingInputProps) {
  return (
    <input
      type="number"
      inputMode="numeric"
      min={MIN_MINUTES}
      max={MAX_MINUTES}
      step={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`${MIN_MINUTES}~${MAX_MINUTES} (분)`}
      aria-label="타이머 시간(분)"
      className="w-40 rounded border border-foreground/30 bg-transparent px-3 py-2"
    />
  );
}
