import { twJoin, twMerge } from "tailwind-merge";
import { SITE_URL } from "@/config/app";

/** Creates a formatted className from given arguments */
export function cn(...args: any[]) {
  return twMerge(twJoin(args));
}

/**
 * Returns the canonical url to given path and params
 *
 * @param path - URL path
 * @returns Canonical url relative to the site root
 */
export function canonical(input: string, trailingSlash = true) {
  if (/^https?:\/\//.test(input)) return input;
  const [path, params] = input.split("?");
  const url = new URL(SITE_URL);
  // add pathname and apply trailing slash if needed
  if (trailingSlash) url.pathname = path.endsWith("/") ? path : `${path}/`;
  else url.pathname = path.endsWith("/") ? path.slice(0, -1) : path;
  // add search params if any
  if (params && params.length > 0) url.search = params;
  return url.toString();
}

/**
 * Convert a string to a dash-separated string
 *
 * @example
 *   slugify('Google This'); // 'google-this'
 *
 * @link https://github.com/jonschlinkert/dashify
 */
export function slugify(string: string) {
  return string
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\W/g, (m) => (/[À-ž]/.test(m) ? m : "-"))
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .toLowerCase();
}

/**
 * Truncates a string to the specified length, adding "..." if it was longer.
 *
 * @param text - The string to truncate
 * @param maxLength - Maximum allowed length before truncation
 * @returns The truncated string with "..." if needed
 */
export function truncate(text: string, maxLength: number): string {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

/**
 * Restricts a number to be within a specified range.
 *
 * @param value The number to clamp.
 * @param min The lower bound of the range.
 * @param max The upper bound of the range.
 * @returns The clamped value, guaranteed to be between `min` and `max`
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
