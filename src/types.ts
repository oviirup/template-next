import "react";

/** Utility type to "prettify" complex types by re-mapping keys */
export type Pretty<T> = { [K in keyof T]: T[K] } & {};

/** Generic string-keyed dictionary type */
export type Dictionary<T = string> = Record<string, T>;

/** Represents a generic function type accepting any arguments and returning T */
export type AnyFunction<T = any> = (...args: any[]) => T;

// global types ----------------------------------------------------------------

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
