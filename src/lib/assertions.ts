import { UrlObject } from 'url';

/** Detects if string url is external url */
export function isExternal(href: string | UrlObject) {
  if (!href) return false;
  href = href.toString();
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(href);
}

/** Checks if the given value is an array */
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

/** Checks if the given value is an empty array */
export function isEmptyArray(value: any) {
  return isArray(value) && value.length === 0;
}

/* Checks if a value is an object (excluding arrays) */
export function isObject(value: any): value is Record<string, any> {
  const type = typeof value;
  return (
    value !== null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  );
}
/* Checks if a given value is an empty object */
export function isEmptyObject(value: any) {
  return isObject(value) && Object.keys(value).length === 0;
}

/* The function checks if a value (object/array) is empty */
export function isEmpty(value: any): boolean {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value === null || value === '') return true;
  return false;
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}
