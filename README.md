# React Performance best practices Theory

## 1 - React’s Rendering Model

React uses a virtual DOM (VDOM) to decide what should change in the actual DOM.

Every time state or props change:

React re-renders the affected component (produces a new VDOM tree).

It compares the new tree with the previous one (reconciliation).

React commits only the necessary DOM updates.

⚠️ Problem: If too many re-renders happen, or components do unnecessary work during reconciliation, performance drops.

Theory takeaway → Optimize when and how often components render.

---

## 2 - Reconciliation and Component Re-renders

React tries to re-render the minimal amount of UI.

But if you pass new props or create inline functions/objects, React thinks things “changed” and re-renders children unnecessarily.

Best practices here:

Use React.memo for pure functional components to skip re-renders if props haven’t changed.

Use useMemo / useCallback to keep stable references for expensive calculations and functions.

Avoid unnecessary re-renders by lifting state only as high as needed.

Theory takeaway → Minimize wasted renders by controlling identity (===) and scope of state.

---

## 3 - State Management & Granularity

React re-renders all children of a component when its state changes.

If you keep too much state in one component, that component re-renders often and cascades updates downward.

Best practices:

Split state into smaller, localized pieces.

Co-locate state (only store data where it’s actually needed).

Use context wisely (avoid passing large objects through Context, since it triggers re-renders).

Theory takeaway → Keep state as small and local as possible to reduce re-rendering.

---

## 4 - Expensive Computations

React re-executes the component function on each render.

If a render has expensive logic (e.g., filtering a large list), it slows down reconciliation.

Best practices:

Cache heavy calculations with useMemo.

Use lazy initialization in useState(() => expensiveComputation()).

Offload heavy work to Web Workers if needed.

Theory takeaway → Prevent re-running expensive logic during normal renders.

---

## 5 - List Rendering & Keys

Rendering lists (.map()) can be costly if React can’t identify which items changed.

React relies on keys for efficient diffing.

Best practices:

Always use stable, unique keys (e.g., IDs instead of array index).

Use windowing/virtualization (e.g., react-window, react-virtualized) for very long lists.

Theory takeaway → Good keys allow React to reuse DOM nodes instead of re-creating them.

---

## 6 - Code Splitting & Lazy Loading

By default, React apps bundle everything into one big JS file.

Large bundles slow down initial load.

Best practices:

Use dynamic imports with React.lazy and Suspense.

Split code into smaller chunks, load only what’s needed.

Theory takeaway → Smaller bundles = faster startup, better perceived performance.

---

## 7 - Avoiding Unnecessary DOM Work

React updates the DOM in batches, but certain practices (e.g., forcing layout recalculations) hurt performance.

Best practices:

Avoid manipulating DOM directly unless necessary.

Avoid inline styles that change on every render (creates new objects).

Use CSS classes or memoized style objects.

Theory takeaway → DOM updates are expensive; let React’s batching handle them efficiently.

---

## 8 - Concurrent Rendering (React 18+)

React 18 introduced concurrent features like useTransition and startTransition.

They let you mark updates as urgent (UI input) vs non-urgent (data fetching), preventing UI blocking.

Theory takeaway → Prioritize user interactions over background updates.

---

## 9 - Measuring Performance

Guessing is dangerous; always measure.

React provides Profiler API to detect wasted renders.

Browser DevTools help track slow renders and large bundles.

Theory takeaway → Performance work is about measurement + optimization, not premature tweaks.

---

## Summary of the theory

React performance best practices exist because:

Every state/prop change = potential re-render.

Reconciliation is fast, but too many unnecessary renders hurt performance.

Large state, heavy computations, bad list keys, and large bundles slow apps down.

React gives tools (memo, useMemo, useCallback, lazy loading, concurrent rendering) to control rendering cost.
