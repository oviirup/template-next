import { twMerge } from 'tailwind-merge';

/**
 * Creates a formatted className from given arguments
 *
 * @param {...any} args - String, array, or object
 * @returns {string} Sanitized class-names
 */
export function cn(...args) {
  if (!args.length) throw new Error('No argument is used');
  let names = [];
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
      entries.map(([key, value]) => Boolean(value) && names.push(key));
    }
    return;
  });
  return twMerge(names);
}

/**
 * Converts a boolean value into a boolean attribute
 *
 * @param {boolean | undefined} condition
 */
export function booleanAttr(condition) {
  return condition ? '' : undefined;
}
