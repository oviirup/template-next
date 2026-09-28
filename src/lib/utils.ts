import { isFunction } from "@oviirup/utils/guards";
import { createCn } from "cn/engine";
import { cva as cvaBase, VariantProps } from "cva";
import { SITE } from "@/config/app";
import { Func } from "@/types";
import { default as cnTables } from "../../cn.tables";

export const cn = createCn(cnTables);

export const cva = cvaBase;
export namespace cva {
  export type Props<T extends Func> = VariantProps<T>;
}

/**
 * Returns the canonical url to given path and params
 * @param input The input string to convert to a URL
 * @returns The canonical URL
 */
export function canonical(input: string): URL {
  if (/^https?:\/\//.test(input)) return new URL(input);
  const [path, params] = input.split("?");
  const url = new URL(SITE.url);
  url.pathname = path.endsWith("/") ? path.slice(0, -1) : path;
  // add search params if any
  if (params && params.length > 0) url.search = params;
  return url;
}

/**
 * Resolves the state value
 *
 * @param state The state value or state action to resolve.
 * @param prev The previous state value.
 * @returns The resolved state value.
 *
 * @example ```tsx
 * const [state, setState] = useState(0);
 * const resolvedState = resolveStateAction(setState, state);
 * ```
 */
export function resolveStateAction<T>(state: React.SetStateAction<T>, prev: T): T {
  return isFunction(state) ? state(prev) : (state as T);
}
