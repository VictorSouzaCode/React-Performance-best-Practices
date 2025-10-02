

/*
When building an app with multiple pages (using React Router), if you import all pages normally, React will bundle them all together.
That means even if a user only visits /home, your /about and /contact code still loads at startup. 
*/

// With route-based code splitting, each page is loaded only when visited. This makes the first load much faster.

// On initial load, only App + Home are fetched.
// If you click "About", React fetches About.chunk.js dynamically.
// If you click "Contact", it fetches Contact.chunk.js.

// If your app has 20+ routes, you don’t want them all bundled together.
// Each route being split into its own chunk makes the app feel faster to users.

/* 
Takeaway:
Route-based lazy loading means users only download what they need, when they need it → faster startup, smaller initial bundle.
*/

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home