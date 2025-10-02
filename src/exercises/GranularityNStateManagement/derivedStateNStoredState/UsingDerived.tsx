import { useState } from "react"

// GOOD EXAMPLE

// Now total is always correct. No risk of going out of sync.

// When to Derive vs When to Store
// Derive it if:
// It can always be calculated from props or other state.
// Example: fullName = firstName + " " + lastName, filteredList = list.filter(...).

// The key lesson: If React can compute it on the fly, don’t store it. Only store the minimal source of truth.

const UsingDerived = () => {
    type ItemType = {
        id: number,
        price: number,
        qty: number,
    }

    const [items, setItems] = useState<ItemType[]>([
        {id: 1, price: 10, qty: 2},
        {id: 2, price: 5, qty: 1}
    ])

    // Derive total directly when rendering
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const addItem = (newItem: ItemType) => {
        setItems([...items, newItem]); // no need to manage "total"
    }

  return (
    <div>
        <p>Total: {total}</p>
    </div>
  )
}

export default UsingDerived