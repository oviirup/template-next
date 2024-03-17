import { twMerge } from 'tailwind-merge';
import { SITE_URL } from '@/app/constants';

/** creates a formatted className from given arguments */
export function cn(...args: any[]): string {
  if (!args.length) throw new Error('No argument is used');
  let names: string[] = [];
  args.forEach((arg) => {
    if (!arg) return;
    const argType = arg?.constructor;
    if (argType === String || argType === Number) {
      names.push(arg.toString());
    } else if (argType === Array) {
      let inner = cn.apply(null, arg);
      if (inner) names.push(inner);
    } else if (argType === Object) {
      let entries = Object.entries(arg);
      entries.map(([key, value]) => value && names.push(key));
    }
    return;
  });
  return twMerge(names);
}

/** returns the canonical url to given path and params */
export function canonicalURL(path: string, params?: Record<string, string>) {
  const url = new URL(SITE_URL);
  url.pathname = path;
  return url.toString();
}

/* Converts a boolean value into a boolean attribute type */
export function booleanAttr(condition?: boolean) {
  return condition ? '' : undefined;
}
