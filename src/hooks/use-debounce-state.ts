import * as React from 'react';
import { applyStateAction } from '@/lib/compose';
import { clamp } from '@/lib/utils';

type DebounceStateOptions<T> = {
  initial: T;
  delay: number;
};

/**
 * Custom hook that provides a debounced state value and a setter function. The
 * state value will only update after the specified delay has passed without
 * further updates.
 *
 * @param initial - The initial state value.
 * @param delay - The debounce delay in milliseconds.
 * @returns A tuple containing the current state value and a setter function.
 */
export function useDebounceState<T>({
  initial,
  delay,
}: DebounceStateOptions<T>) {
  const value = React.useRef<T>(initial);
  const timer = React.useRef<NodeJS.Timeout>(null);
  const mounted = React.useRef(false);
  const [, tick] = React.useReducer((i) => ++i, 0);

  const setDebounceValue = React.useCallback(
    (state: React.SetStateAction<T>) => {
      if (timer.current) clearTimeout(timer.current);
      const interval = clamp(delay, 10, Number.MAX_SAFE_INTEGER);
      // start timer to update state after delay
      timer.current = setTimeout(() => {
        if (!mounted.current) return;
        const prev = value.current;
        const next = applyStateAction(state, prev);
        value.current = next;
        timer.current = null;
        tick(); // Trigger re-render
      }, interval);
    },
    [delay],
  );

  // Cleanup timer on unmount
  React.useEffect(() => {
    mounted.current = true;
    return () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
      mounted.current = false;
    };
  }, []);

  return [value.current, setDebounceValue] as const;
}
