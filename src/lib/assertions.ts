/** Checks if the given value is an array */
export function isArray<T = any>(value: any): value is T[] {
  return Array.isArray(value);
}

/** Checks if the given value is an empty array */
export function isEmptyArray(value: any): boolean {
  return isArray(value) && value.length === 0;
}

/** Checks if the given value is an valid number */
export function isNumber(v: any): v is number {
  return typeof v === 'number' && Number.isFinite(v) && !Number.isNaN(v);
}

/** Checks if a value is an object (excluding arrays) */
export function isObject<T extends object = Record<string, any>>(
  value: any,
): value is T {
  return value !== null && typeof value === 'object' && !isArray(value);
}

/** Checks if a given value is an empty object */
export function isEmptyObject(value: any): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

/** The function checks if a value (object/array) is empty */
export function isEmpty(value: any): boolean {
  if (isArray(value)) return isEmptyArray(value);
  if (typeof value === 'object' && value !== null) return isEmptyObject(value);
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  return false;
}

type AnyFn<T> = (...args: any[]) => T;
/** Check if the given object is a function */
export function isFunction<T = unknown>(value: any): value is AnyFn<T> {
  return typeof value === 'function';
}

/** Check if the given object is a date object */
export function isDateObject(value: unknown): value is Date {
  return value instanceof Date;
}

/** Check if the given value is a regex */
export function isRegex(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/** Checks if current environment is running on server or client */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

/** Checks if current environment is running on client */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
