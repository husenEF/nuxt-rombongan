import type { Updater } from "@tanstack/vue-table";
import type { Ref } from "vue";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function valueUpdater<TValue>(
  updaterOrValue: Updater<TValue> | TValue,
  ref: Ref,
) {
  ref.value =
    typeof updaterOrValue === "function"
      ? (updaterOrValue as (old: TValue) => TValue)(ref.value)
      : updaterOrValue;
}
