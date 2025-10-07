import { useState, useEffect } from "react";


const BadAnimations = () => {
  const [rotation, setRotation] = useState(0);

  // Animate by updating state every frame
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 5) % 360);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "none",
        width: "100px",
        height: "100px",
        margin: "10px",
        background: "salmon",
      }}
    >
      🔄
    </button>
  );
}
export default BadAnimations