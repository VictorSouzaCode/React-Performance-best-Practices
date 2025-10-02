

/*
When building an app with multiple pages (using React Router), if you import all pages normally, React will bundle them all together.
That means even if a user only visits /home, your /about and /contact code still loads at startup. 
*/

// With route-based code splitting, each page is loaded only when visited. This makes the first load much faster.

const AllPages = () => {
  return (
    <div>AllPages</div>
  )
}

export default AllPages