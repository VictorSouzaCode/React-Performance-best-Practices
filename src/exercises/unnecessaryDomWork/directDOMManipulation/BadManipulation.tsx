/* 
why React controls the DOM for you — and why doing direct DOM manipulation can cause weird or inconsistent UI behavior.
*/

// Here’s a basic example that breaks React’s control over the DOM:

/*
You’re directly using document.getElementById and changing the DOM manually (box.style.backgroundColor = 'red').

React doesn’t know this DOM change happened — it didn’t come from React’s render cycle.

Then, when React re-renders the component (because count changes), it re-applies what it thinks the DOM should look like — i.e. backgroundColor: 'blue' again.

The color might “flicker” back, or React might overwrite your manual changes.

This is because React keeps its Virtual DOM in sync with what it expects the browser DOM to be.
When you mutate the DOM directly, you’re stepping outside of that system.

In short:

React wants to be the single source of truth for your UI.
Direct DOM changes confuse React and can lead to inconsistent UIs. 
*/

import { useState } from "react";

const BadManipulation = () => {
  const [count, setCount] = useState(0);

  const changeColor = () => {
    const box = document.getElementById("box");

    if(box) {
      box.style.backgroundColor = "red";
    }
    setCount((c) => c + 1)
  }

  return (
    <div>
      <button onClick={changeColor}>Change Color: {count}</button>
      <div id="box" style={{ width: 100, height: 100, backgroundColor: "blue" }}/>
    </div>
  )
}

export default BadManipulation