import { useEffect, useRef, useState } from "react";

// The best modern solution — ResizeObserver
// Instead of manually measuring width, let the browser tell you when an element resizes

/* This approach is:

Reactive — you don’t force layout recalculations.

Efficient — the browser notifies you only when layout actually changes.

Ideal for responsive components or charts.
*/


const GoodThreeBest = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!boxRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <p>Width: {width.toFixed(0)}px</p>
      <div
        ref={boxRef}
        style={{
          width: `${width + 20 || 100}px`,
          height: "100px",
          backgroundColor: "lightblue",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}

export default GoodThreeBest