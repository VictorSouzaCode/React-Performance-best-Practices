import { useState } from "react"

// Big State:
/* React re-renders a component and all of its children whenever its state changes.
If you keep a lot of unrelated data in one state object, every update touches that state object → React thinks everything changed, so it re-renders more than needed.
*/

// What happens here:
// All three inputs share one big state object.
// Typing in the name input updates the whole object → React re-renders the parent → which re-renders all three inputs, even though only name changed.

// When to Use Which?
// If the values are always updated together (e.g., x and y coordinates), it’s fine to keep them in one object.
// If the values are independent (like name, email, age), splitting them makes rendering more efficient.

const BigState = () => {
  const [form, setForm] = useState(
    {
      email: '',
      name: '', 
      age: ''
    }
  )

  return (
    <div style={{
        border: "1px solid white",
        marginBottom: "16px",
        paddingBottom: "12px"
    }}>
      <p>Big State</p>

      <input type="text" placeholder="Email" value={form.email} onChange={(e) => {
        setForm(thing => ({...thing, email: thing.email = e.target.value}))
      }}/>

      <input type="text" placeholder="Name" onChange={(e) => {
        setForm(thing => ({...thing, name: thing.name = e.target.value}))
      }}/>

      <input type="text" placeholder="Age" onChange={(e) => {
        setForm(thing => ({...thing, age: thing.age = e.target.value}))
      }}/>
    </div>
  )
}

export default BigState