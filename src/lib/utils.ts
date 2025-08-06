import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { SITE_URL } from '@/config/app';
import { isFunction, isObject } from '@/lib/assertions';

/** Creates a formatted className from given arguments */
export function cn(...args: any[]) {
  return twMerge(cx(args));
}

type PossibleRef<T> = React.Ref<T> | undefined;
/**
 * Combines multiple React refs into a single ref callback function.
 *
 * @template El - The type of element the refs will be attached to
 * @param refs - Array of refs to combine.
 */
export function composeRefs<T>(
  ...refs: PossibleRef<T>[]
): React.RefCallback<T> {
  return (el) => {
    const cleanups = refs
      .map((ref) => {
        if (isFunction(ref)) return ref(el);
        if (isObject(ref)) ref.current = el;
      })
      .filter(isFunction<void>);
    // run cleanup functions if any were provided
    if (cleanups.length === 0) return;
    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  };
}

type PartialEvent = { defaultPrevented: boolean };
/**
 * Composes multiple event handlers into a single handler that calls each in
 * sequence. The composed handler will only call subsequent handlers if the
 * event hasn't been prevented.
 *
 * @param original - The original event handler to call first
 * @param custom - Additional event handler to call afterwards
 * @param checkIsPrevented - Whether to check if the event was prevented
 */
export function composeEventHandlers<E extends PartialEvent>(
  original?: (event: E) => void,
  custom?: (event: E) => void,
  checkIsPrevented = true,
) {
  return (event: E) => {
    original?.(event);
    if (!checkIsPrevented || !event.defaultPrevented) {
      return custom?.(event);
    }
  };
}

/**
 * Applies a state action to the previous state value.
 *
 * @param state - The state action, which can be a value or a function
 * @param prev - The previous state value
 * @returns The new state value after applying the action
 */
export function applyStateAction<T>(
  state: React.SetStateAction<T>,
  prev: T,
): T {
  return isFunction(state) ? state(prev) : state;
}

/**
 * Returns the canonical url to given path and params
 *
 * @param path - URL path
 * @returns Canonical url relative to the site root
 */
export function canonical(input: string, trailingSlash = true) {
  if (/^https?:\/\//.test(input)) return input;
  const [path, params] = input.split('?');
  const url = new URL(SITE_URL);
  // add pathname and apply trailing slash if needed
  if (trailingSlash) url.pathname = path.endsWith('/') ? path : `${path}/`;
  else url.pathname = path.endsWith('/') ? path.slice(0, -1) : path;
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
  if (typeof string !== 'string') {
    throw new TypeError('expected a string');
  }
  return string
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, (m) => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
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
  if (typeof text !== 'string') return '';
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
