import { useState } from "react";

// Split State:
// React re-renders a component and all of its children whenever its state changes.

// What happens here:
// Each field manages its own independent piece of state.
// Typing in the name input → only name state changes → React re-renders just what’s necessary.
// email and age are unaffected, so React can skip extra work.

// Lesson Learned
// Big state object = convenient grouping, but causes wider re-renders.
// Split state = more granular updates, better performance.

// When to Use Which?
// If the values are always updated together (e.g., x and y coordinates), it’s fine to keep them in one object.
// If the values are independent (like name, email, age), splitting them makes rendering more efficient.

const SplitState = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

  return (
    <div style={{
        border: "1px solid white",
        paddingBottom: "12px"
    }}>
        <p>Split State</p>
        <input type="text" placeholder="Email" value={email} onChange={(e) => {
            setEmail(e.target.value)
        }}/>

        <input type="text" placeholder="Name" value={name} onChange={(e) => {
            setName(e.target.value)
        }}/>

        <input type="text" placeholder="Age" value={age} onChange={(e) => {
            setAge(e.target.value)
        }}/>
    </div>
  )
}

export default SplitState