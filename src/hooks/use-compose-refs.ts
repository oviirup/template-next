import * as React from 'react';
import { composeRefs } from '@/lib/utils';

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Custom React hook that combines multiple refs into a single callback ref.
 *
 * @param refs - A list of refs to be combined.
 * @returns A callback ref that assigns the element to all provided refs.
 */
export function useComposeRef<T>(...refs: PossibleRef<T>[]) {
  return React.useCallback(() => composeRefs<T>(...refs), [refs]);
}
