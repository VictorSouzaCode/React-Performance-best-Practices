
// lazy loaded (separate chunk, only fetched when shown).
const ChartComponent = () => {
    // Simulate something heavy
    const bars = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div>
            <h2>📈 Chart Component (Lazy Loaded)</h2>
            <div style={{ 
                display: "flex", 
                gap: "5px",
                justifyContent: "center"
            }}
                >
                {bars.map((bar) => (
                    <div
                        key={bar}
                        style={{
                            width: "20px",
                            height: `${bar * 5}px`,
                            background: "teal",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChartComponent