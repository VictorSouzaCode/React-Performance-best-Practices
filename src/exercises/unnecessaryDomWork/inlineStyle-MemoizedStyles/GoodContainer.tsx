import { useState } from "react";
import GoodCard from "./GoodCard";

/* 
Theory takeaway

Inline style objects are recreated every render, which causes React to think props changed.

Move them outside the component if static, or memoize them with useMemo if dynamic.

Pair with React.memo to skip child re-renders when props don’t change.

Extracting style outside the component prevents unnecessary prop changes.

But to skip child renders, you need React.memo inside the card component.
*/

const GoodContainer = () => {
    const [count, setCount] = useState(0);

    const cards = Array.from({ length: 100});

  return (
    <div>
        <button onClick={() => setCount((c) => c + 1)}>Re-render:{count}
        </button>
        {cards.map((_, i) => (
                <GoodCard key={i}/>
            ))}
    </div>
  )
}

export default GoodContainer
