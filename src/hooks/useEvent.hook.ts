import React from 'react';

// Windows Event based interface
export function useEvent<EW extends keyof WindowEventMap>(
  event_name: EW,
  callback: (event: WindowEventMap[EW]) => void,
  options?: boolean | AddEventListenerOptions,
  element?: undefined,
): void;

// HTML Element Based interface
export function useEvent<EH extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
  event_name: EH,
  handler: (event: HTMLElementEventMap[EH]) => void,
  options?: boolean | AddEventListenerOptions,
  element?: React.RefObject<T>,
): void;

// Document Event based interface
export function useEvent<ED extends keyof DocumentEventMap>(
  event_name: ED,
  callback: (event: DocumentEventMap[ED]) => void,
  options?: boolean | AddEventListenerOptions,
  element?: React.RefObject<Document>,
): void;

/**
 * Hook to use event listener
 *
 * @param event_name - Window or Element event name
 * @param callback - Callback function
 * @param element - Element to attach event listener to
 */
export function useEvent<
  EW extends keyof WindowEventMap,
  EH extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  event_name: EW,
  callback: (event: WindowEventMap[EW] | HTMLElementEventMap[EH] | Event) => void,
  options?: boolean | AddEventListenerOptions,
  element?: React.RefObject<T>,
) {
  // Create a ref that stores handler
  const handler = React.useRef(callback);

  React.useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    // Add event listener
    const eventListener: typeof callback = (event) => {
      if (!!handler?.current) handler.current(event);
    };
    targetElement.addEventListener(event_name, eventListener, options);
    return () => {
      targetElement.removeEventListener(event_name, eventListener, options);
    };
  }, [event_name, element, callback, options]);
}
