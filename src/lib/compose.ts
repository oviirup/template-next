import { isFunction, isObject } from "./assertions";

type PossibleRef<T> = React.Ref<T> | undefined;
/**
 * Combines multiple React refs into a single ref callback function.
 *
 * @template El The type of element the refs will be attached to
 * @param refs Array of refs to combine.
 */
export function composeRefs<T>(
  ...refs: PossibleRef<T>[]
): React.RefCallback<T> {
  return (el) => {
    const cleanups = refs
      .map((ref) => {
        if (isFunction(ref)) return ref(el);
        if (isObject(ref)) ref.current = el;
        return null;
      })
      .filter(isFunction<void>);
    // run cleanup functions if any were provided
    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  };
}

type PartialEvent = { defaultPrevented?: boolean };
/**
 * Composes multiple event handlers into a single handler that calls each in
 * sequence. The composed handler will only call subsequent handlers if the
 * event hasn't been prevented.
 *
 * @param original The original event handler to call first
 * @param custom Additional event handler to call afterwards
 * @param checkIsPrevented Whether to check if the event was prevented
 */
export function composeEventHandlers<E extends PartialEvent>(
  original?: React.Dispatch<E> | null | undefined,
  custom?: React.Dispatch<E> | null | undefined,
  checkIsPrevented = true,
) {
  return (event: E) => {
    original?.(event);
    if (!checkIsPrevented || !event.defaultPrevented) {
      return custom?.(event);
    }
  };
}

/**
 * Applies a React SetStateAction to a previous state value.
 *
 * @param state The state action (either a value or updater function)
 * @param prev The previous state value
 * @returns The next state value
 */
export function applyStateAction<T>(
  state: React.SetStateAction<T>,
  prev: T,
): T {
  return isFunction(state) ? state(prev) : state;
}
