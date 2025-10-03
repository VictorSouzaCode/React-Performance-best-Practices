

const Charts = () => {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      <h3>Chart Component</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        {data.map((bar) => (
          <div
            key={bar}
            style={{
              width: "20px",
              height: `${bar * 10}px`,
              background: "teal",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Charts