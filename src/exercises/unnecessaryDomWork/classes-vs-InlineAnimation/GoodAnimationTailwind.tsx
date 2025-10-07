

/*
What’s going on here

Every ~16ms:

setRotation() updates React state.

React re-renders the entire component.

The style prop creates a new object each render ({ transform: "rotate(..." }).

React updates the DOM’s transform property.

The browser recalculates layout, paints, and composites again.

So you’re asking React + the JS thread to handle 60 updates per second 🤯.

If you had 50 buttons like that?
→ 50 re-renders per frame × 60 frames per second = 3000 React updates per second.
→ 💥 CPU spike, jank, lag.

Why this hurts performance

React is not designed for frame-by-frame animation. It’s great for declarative UI, but slow for continuous updates.

Each setState → re-render → reconciliation → DOM diff → paint.

The browser’s animation engine (CSS transitions, keyframes, or the compositor) is much faster — it can run animations on the GPU, outside the JS thread.
*/

const GoodAnimationTailwind = () => {
  return (
    <div>GoodAnimationTailwind</div>
  )
}

export default GoodAnimationTailwind