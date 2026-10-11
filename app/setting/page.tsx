"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TimerSettingInput from "@/components/TimerSettingInput";
import {
  MAX_MINUTES,
  MIN_MINUTES,
  saveDurationMinutes,
  useDurationMinutes,
} from "@/lib/duration";

export default function SettingPage() {
  const router = useRouter();
  const saved = useDurationMinutes();
  const [draft, setDraft] = useState<string | null>(null);
  const value = draft ?? String(saved);

  const minutes = Number(value);
  const valid =
    value.trim() !== "" &&
    Number.isInteger(minutes) &&
    minutes >= MIN_MINUTES &&
    minutes <= MAX_MINUTES;

  const submit = () => {
    if (!valid) return;
    saveDurationMinutes(minutes);
    router.push("/");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h3 className="text-2xl font-semibold">Setting</h3>
      <TimerSettingInput value={value} onChange={setDraft} />
      {!valid && value.trim() !== "" && (
        <p className="text-sm text-red-500">
          {MIN_MINUTES}분 이상 {MAX_MINUTES}분 이하의 정수만 입력할 수 있어요.
        </p>
      )}
      <button
        onClick={submit}
        disabled={!valid}
        className="rounded-full border border-foreground/20 px-5 py-2 font-medium transition-colors hover:bg-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
        설정 완료
      </button>
    </main>
  );
}
