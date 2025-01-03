import { twMerge } from 'tailwind-merge';
import { isArray, isEmpty, isFunction, isObject } from '~/lib/assertions';

/** Creates a formatted className from given arguments */
export function cn(...args: any[]): string {
  if (!args.length) throw new Error('No argument is used');
  const names: string[] = [];
  args.forEach((arg) => {
    if (isEmpty(arg)) {
      return;
    } else if (typeof arg === 'string' || typeof arg === 'number') {
      names.push(arg.toString());
    } else if (isArray(arg)) {
      const inner = cn.apply(null, ...[arg]);
      if (inner) names.push(inner);
    } else if (isObject(arg)) {
      const entries = Object.entries(arg);
      entries.map(([key, value]) => Boolean(value) && names.push(key));
    }
    return;
  });
  return twMerge(names);
}

type PossibleRef<El> = React.ForwardedRef<El> | undefined;
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
