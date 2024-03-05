import { twMerge } from 'tailwind-merge';

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

/* Converts a boolean value into a boolean attribute type */
export function booleanAttr(condition?: boolean) {
  return condition ? '' : undefined;
}
