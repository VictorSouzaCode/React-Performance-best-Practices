import ship from "./shipOnSpace.webp"

const HeavyComponent = () => {

    // Simulate something "big" by rendering many items
    const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
        <h2>Heavy Component Loaded!</h2>
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>

        <div style={{
            width: "100%"
        }}>
            <img src={ship} alt="ship" style={{
                width: "100%"
            }}/>
        </div>

        <div style={{
            width: "100%"
        }}>
            <img src={ship} alt="ship" style={{
                width: "100%"
            }}/>
        </div>

        <div style={{
            width: "100%"
        }}>
            <img src={ship} alt="ship" style={{
                width: "100%"
            }}/>
        </div>

        <div style={{
            width: "100%"
        }}>
            <img src={ship} alt="ship" style={{
                width: "100%"
            }}/>
        </div>
    </div>
  )
}

export default HeavyComponent