import { memo, useState } from "react";

// Inline Functions Causing Re-renders
// Goal: Learn how inline callbacks break memoization.
// notice ButtonChild always re-renders because the onClick function is new every time.

const ButtonChild = memo(({onClick}: {onClick: () => void}) => {

    console.log("Render: ButtonChild")
    return <button onClick={onClick}>Click Child</button>
})

const FunctionCausingReRenders = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: "1px solid white",
            marginBottom: "20px"
        }}>
            <p>{count}</p>
            <ButtonChild onClick={() => setCount(c => c + 1)}/>
        </div>
    )
}


export default FunctionCausingReRenders

