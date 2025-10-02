import { useState } from "react";

// BAD EXAMPLE

// imagine a shopping cart:
// Here total is stored separately. But total can be derived from items.
// The risk: you must keep items and total in sync manually → bugs waiting to happen.

// When to Derive vs When to Store
// Store it if:
// It can’t always be re-computed easily.
// Example: UI state like isModalOpen, async values like dataFromAPI, user input before it’s committed.

// The key lesson: If React can compute it on the fly, don’t store it. Only store the minimal source of truth.

const StoringDerived = () => {
    type ItemType = {
        id: number,
        price: number,
        qty: number
    }

    const [items, setItems] = useState<ItemType[]>([
        {id: 1, price: 10, qty: 2}, 
        {id: 2, price: 5, qty: 1},
        {id: 3, price: 15, qty: 3}
    ]);

    // Wrong: storing something we can calculate
    const [total, setTotal] = useState(25);

    const addItem = (newItem:ItemType) => {

        setItems([...items, newItem]);

        setTotal(total + newItem.price * newItem.qty);
    };

  return (
    <div>
        StoringDerived
        <p>Total: {total}</p>
    </div>
  )
}

export default StoringDerived