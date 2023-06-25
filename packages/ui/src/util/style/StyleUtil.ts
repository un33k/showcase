import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function tm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function classNames(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}
