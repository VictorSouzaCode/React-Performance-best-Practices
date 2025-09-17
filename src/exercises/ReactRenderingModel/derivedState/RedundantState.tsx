import { useState } from "react"

// THE WRONG WAY

// Why is redundant state a problem?
// It can get out of sync (you forget to update both text and length).
// It causes extra re-renders (because React thinks there are more changes than necessary).
// It adds unnecessary complexity.

const RedundantState = () => {
    const [text, setText] = useState("")
    const [length, setLength] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        setLength(e.target.value.length);
    }

    // Problems:
    // i am updating two pieces of state for the same source of truth.
    // If i forget setLength, my UI shows wrong data.
    // More state updates → more reconciliation → slower.

  return (
    <div style={{
        border: '1px solid white',
        marginTop: "10px"
    }}>
        <p>Rendundant</p>
        <input value={text} onChange={handleChange} />
        <p>Length: {length}</p>
    </div>
  )
}

export default RedundantState