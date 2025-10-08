// If the animation doesn’t depend on React state at all, you can let CSS handle everything:

// Here, Tailwind’s active:scale-110 handles the scaling when pressed — zero JavaScript, zero re-renders, just GPU-accelerated CSS transitions.

const FullTailwindControl = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-200 ease-in-out active:scale-110"
    >
      Click Me
    </button>
  );
}

export default FullTailwindControl