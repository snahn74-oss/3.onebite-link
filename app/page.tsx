"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Timer from "@/components/Timer";
import Controllers from "@/components/Controllers";
import { useDurationMinutes } from "@/lib/duration";
import { playAlarm, prepareAlarm } from "@/lib/alarm";

export default function Home() {
  const minutes = useDurationMinutes();
  const total = minutes * 60;
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const remaining = Math.max(total - elapsed, 0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (running && remaining === 0) {
      setRunning(false);
      playAlarm();
    }
  }, [running, remaining]);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-extrabold uppercase tracking-widest sm:text-6xl">
        pomodoro
      </h1>
      <Timer remainingSeconds={remaining} totalSeconds={total} />
      <Controllers
        running={running}
        onStart={() => {
          if (remaining <= 0) return;
          prepareAlarm();
          setRunning(true);
        }}
        onStop={() => setRunning(false)}
        onReset={reset}
      />
      <Link
        href="/setting"
        className="rounded-full border border-foreground/20 px-5 py-2 font-medium transition-colors hover:bg-foreground/10"
      >
        설정
      </Link>
    </main>
  );
}
