import { useState } from "react"
import BadButton from "./BadButton"

// What does "lifting state" mean?
// Lifting state = moving a piece of state up into a parent component so multiple children can access or share it.
// Example: You often lift state when two components need to know about the same data.

// The Problem: State lifted too high
// When you lift state higher than necessary:
// Parent re-renders on every update.
// All children re-render even if only one child actually needed the change.
// This wastes work and makes the UI feel slower, especially with large trees.

// imagine we lift both counters’ state to the parent:
// When A updates, the parent re-renders.
// Because the parent re-renders, both A and B display elements re-render even though only A changed.
// With many counters → huge wasted work.

const BadState = () => {

  type CountResults = {
    A: number,
    B: number
  }
  const [counts, setCounts ] = useState<CountResults>(
    {
      A: 0, 
      B: 0
    }
  )

  return (
    <div style={{
      border: "1px solid white",
      marginBottom: "20px"
    }}>
      <p>Bad State</p>

      <BadButton
      label={'A'} 
      onIncrement={() => setCounts(c => ({...c, A: c.A + 1}))}
      />

      <BadButton 
      label={'B'} 
      onIncrement={() => setCounts(c => ({...c, B: c.B + 1}))}
      />

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px"
      }}>
        <p>A:{counts.A}</p>
        <p>B:{counts.B}</p>
      </div>
      
    </div>
  )
}

export default BadState