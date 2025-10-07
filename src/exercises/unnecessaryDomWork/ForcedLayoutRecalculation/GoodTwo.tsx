import { useEffect, useState } from "react";

// Measure only when a dependency changes
// Now React doesn’t trigger layout recalculation unnecessarily — only when the box width actually changes

const GoodTwo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const width = document.getElementById("box")?.offsetWidth;
    console.log("Width changed:", width);
  }, [count]); // ✅ Only measure when `count` changes

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase width</button>
      <div
        id="box"
        style={{
          width: `${100 + count * 10}px`,
          height: "100px",
          backgroundColor: "lightcoral",
        }}
      />
    </div>
  );
}

export default GoodTwo