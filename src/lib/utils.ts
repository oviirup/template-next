import { isFunction, isObject } from "@oviirup/utils/assertions";
import { twJoin, twMerge } from "tailwind-merge";
import { createTV, type VariantProps } from "tailwind-variants/lite";
import { SITE_URL } from "@/app";
import { AnyFunction } from "@/types";

/** Creates a formatted className from given arguments */
export function cn(...args: any[]) {
  return twMerge(twJoin(...args));
}

export const tv = createTV();
export namespace tv {
  export type Props<T extends AnyFunction> = VariantProps<T>;
}

/** Returns the canonical url to given path and params */
export function canonical(input: string, trailingSlash = false) {
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

/** Combines multiple React refs into a single ref callback function */
export function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (el) => {
    const cleanups = refs
      .map((ref) => {
        if (isFunction(ref)) return ref(el);
        if (isObject(ref)) ref.current = el;
        return null;
      })
      .filter(isFunction);
    // run cleanup functions if any were provided
    return () => {
      if (cleanups.length === 0) return;
      for (const cleanup of cleanups) cleanup();
    };
  };
}

/** Applies a React SetStateAction to a previous state value */
export function resolveStateAction<T>(
  action: React.SetStateAction<T>,
  prev: T,
) {
  return isFunction(action) ? action(prev) : action;
}
