import { useSyncExternalStore } from "react";

export const DEFAULT_MINUTES = 25;
export const MIN_MINUTES = 1;
export const MAX_MINUTES = 24 * 60;

const STORAGE_KEY = "pomodoro:minutes";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  const n = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isInteger(n) && n >= MIN_MINUTES && n <= MAX_MINUTES
    ? n
    : DEFAULT_MINUTES;
}

export function useDurationMinutes() {
  return useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_MINUTES);
}

export function saveDurationMinutes(minutes: number) {
  localStorage.setItem(STORAGE_KEY, String(minutes));
}
