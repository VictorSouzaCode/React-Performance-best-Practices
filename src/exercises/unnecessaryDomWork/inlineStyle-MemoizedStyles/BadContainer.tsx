import { useState } from "react";
import BadCard from "./BadCard";

/* What happens here?

Every time you click the button, all 100 Card components re-render.

Why? Because the style prop ({ backgroundColor: "blue", padding: "20px" }) is a new object every render.

Even if the actual style values didn’t change, React compares objects by reference, not by content.

So React thinks the prop changed → child re-renders.
*/

const BadContainer = () => {
    const [count, setCount] = useState(0);

    const cards = Array.from({ length: 100});

  return (
    <div>
        <button onClick={() => setCount((c) => c + 1)}>Re-render:{count}
        </button>
        {cards.map((_, i) => (
                <BadCard key={i}/>
            ))}
    </div>
  )
}

export default BadContainer