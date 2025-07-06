import { useEffect, useRef, useState, RefObject } from "react";

/**
 * A custom hook to detect when an element enters or exits the viewport,
 * useful for scroll-triggered animations.
 *
 * @param {RefObject<HTMLElement>} [elementRef] - Optional. A ref to the HTML element to observe.
 * If not provided, the hook will return its own ref.
 * @returns {{ ref: RefObject<HTMLElement>, isInView: boolean }} An object containing:
 * - `ref`: A ref to be attached to the DOM element you want to observe.
 * This is the internal ref if `elementRef` is not provided.
 * - `isInView`: A boolean indicating whether the observed element is currently in the viewport.
 */
import { useEffect, useRef, useState, RefObject } from "react";

export function useScrollAnimation(elementRef?: RefObject<HTMLElement>) {
  const internalRef = useRef<HTMLElement>(null);

  const refToUse = elementRef || internalRef;

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!refToUse.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -75px 0px",
      }
    );

    observer.observe(refToUse.current);

    return () => {
      if (refToUse.current) {
        observer.unobserve(refToUse.current);
      }
    };
  }, [refToUse]);

  return { ref: refToUse, isInView };
}