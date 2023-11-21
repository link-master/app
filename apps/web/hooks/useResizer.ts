import { useEffect, useRef } from 'react';

const useResizer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const resizerRef = useRef<HTMLDivElement | null>(null);
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
    if (containerRef.current?.style) {
      containerRef.current.style.width = `${containerWidth.current}px`;
    }
  }

  function onMouseup() {
    eventPairs.forEach((pair) => {
      document.body.removeEventListener(pair[0], pair[1]);
    });
  }

  function onMousedown(e: globalThis.MouseEvent) {
    e.preventDefault();
    eventPairs.forEach((pair) => {
      document.body.addEventListener(pair[0], pair[1]);
    });
  }

  useEffect(() => {
    if (!(resizerRef.current && containerRef.current)) {
      return;
    }

    const resizerElement = resizerRef.current;
    resizerElement?.addEventListener('mousedown', onMousedown);

    containerWidth.current = containerRef.current?.offsetWidth || 0;

    return () => {
      resizerElement?.removeEventListener('mousedown', onMousedown);
    };
  }, [containerRef, resizerRef]);

  return {
    containerRef,
    resizerRef,
  };
};

export default useResizer;
