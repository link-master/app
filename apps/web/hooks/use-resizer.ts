import { useEffect, useRef } from 'react';

const useResizer = () => {
  const containerReference = useRef<HTMLDivElement | null>(null);
  const resizerReference = useRef<HTMLDivElement | null>(null);
  const containerWidth = useRef<number>(0);

  const eventPairs = [
    ['mousemove', onMousemove],
    ['mouseup', onMouseup],
    ['mouseleave', onMouseup],
  ] as const;

  const calculateDifference = (event: globalThis.MouseEvent) => {
    return event.clientX - containerWidth.current;
  };

  function onMousemove(event: globalThis.MouseEvent) {
    const differenceX = calculateDifference(event);
    containerWidth.current += differenceX;

    // Resize container
    if (containerReference.current?.style) {
      containerReference.current.style.width = `${containerWidth.current}px`;
    }
  }

  function onMouseup() {
    for (const pair of eventPairs) {
      document.body.removeEventListener(pair[0], pair[1]);
    }
  }

  function onMousedown(e: globalThis.MouseEvent) {
    e.preventDefault();
    for (const pair of eventPairs) {
      document.body.addEventListener(pair[0], pair[1]);
    }
  }

  useEffect(() => {
    if (!(resizerReference.current && containerReference.current)) {
      return;
    }

    const resizerElement = resizerReference.current;
    resizerElement?.addEventListener('mousedown', onMousedown);

    containerWidth.current = containerReference.current?.offsetWidth || 0;

    return () => {
      resizerElement?.removeEventListener('mousedown', onMousedown);
    };
  }, [containerReference, resizerReference]);

  return {
    containerRef: containerReference,
    resizerRef: resizerReference,
  };
};

export default useResizer;
