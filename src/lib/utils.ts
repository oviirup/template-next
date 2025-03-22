import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { SITE_URL } from '~/const';
import { isFunction, isObject } from '~/lib/assertions';

/** Creates a formatted className from given arguments */
export function cn(...args: any[]) {
  return twMerge(cx(args));
}

type PossibleRef<El> = React.Ref<El> | undefined;
/** Use multiple refs on a single element */
export function referrals<El extends Element>(...refs: PossibleRef<El>[]) {
  if (!refs.length) return;
  return (el: El) => {
    for (const ref of refs) {
      if (!ref) continue;
      else if (isFunction(ref)) ref(el);
      else if (isObject(ref)) ref.current = el;
    }
  };
}

/**
 * Returns the canonical url to given path and params
 *
 * @param path - URL path
 * @returns Canonical url relative to the site root
 */
export function canonicalURL(path: string) {
  const url = new URL(SITE_URL);
  url.pathname = path.endsWith('/') ? path : `${path}/`;
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
