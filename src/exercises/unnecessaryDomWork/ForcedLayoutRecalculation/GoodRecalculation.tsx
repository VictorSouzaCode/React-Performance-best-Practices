
// You rarely need to measure layout every render.
// You should do it only when:
// The element’s size actually changes, or
// You need to measure something right after mount.
import { useEffect } from "react";

const GoodRecalculation = () => {
  useEffect(() => {
    const width = document.getElementById("box")?.offsetWidth;
    console.log("Initial width:", width);
  }, []); // Run once after mount, not every render

  return (
    <div
      id="box"
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightgreen",
      }}
    />
  );
}

export default GoodRecalculation