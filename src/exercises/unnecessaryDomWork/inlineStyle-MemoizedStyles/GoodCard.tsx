
/* The optimization with cardStyle outside the component doesn’t magically stop rendering.
What it does is:

Prevents React from thinking props changed when using React.memo or when passing style down as a prop.

Without this, even memoized children would still re-render because the style object would be “new” every time.
*/

// To really not re-render the card components on button clicks i need to use "React.memo/memo" in this card component

// to not having to do that i can use css or just tailwind styles

const cardStyle = { backgroundColor: "blue", padding: "20px", margin: "5px" }


const GoodCard = () => {
  console.log("Card rendered");

  return (
    <div style={cardStyle}>GoodCard</div>
  )
}

export default GoodCard


// PROP VERSION ALTERNATIVE

// If the style depends on props or state, you can’t put it outside globally. Instead, use useMemo:

/* function Card({ color }: { color: string }) {
  console.log("Card rendered");

  const style = React.useMemo(
    () => ({ backgroundColor: color, padding: "20px", margin: "5px" }),
    [color]
  );

  return <div style={style}>Card</div>;
}
*/