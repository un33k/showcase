import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind class merge
 * @param inputs input class names
 * @returns
 */
export function tm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Conditional joined classes
 * @param classes classes to be joined
 * @returns joined classes
 */
export function cc(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
