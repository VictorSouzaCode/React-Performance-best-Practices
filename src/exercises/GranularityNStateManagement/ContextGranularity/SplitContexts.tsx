import { createContext, useContext, useState } from "react"

// The Idea
// React Context lets you share data without prop drilling.
// But here’s the gotcha:
// Whenever the context value changes, all components that consume that context re-render.
// If you stuff a big object into one context, any change to any field forces all consumers to re-render — even if they don’t use the changed field.
// This is what we want to avoid → so we split contexts by responsibility.


// What Happens Here:
// UserInfo is subscribed only to UserContext.
// Toggling theme doesn’t affect it → no re-render.
// Header re-renders only when theme changes.

// When to use it?
// Use split contexts in larger apps where different parts of the UI need different data independently.
// For very large apps, sometimes you combine Context + memoization or even switch to state management libraries (Redux, Zustand, Jotai, etc.) for fine-grained contr

// WARNING
// here is just an example because the correct way to do it is to split this context in two separate files because
// Even though user never changes, its provider is still in the JSX tree.
// If React decides to re-render the parent (SplitContexts) → all its children (Header + UserInfo) re-render.
// In your code, SplitContexts re-renders every time theme changes, because the useState for theme lives inside it.
// That causes the JSX tree to re-run, which includes <UserInfo/>.

const UserContext = createContext<any>(null);
const ThemeContext = createContext<any>(null);

const SplitContexts = () => {
  const [user] = useState({name: "Alice", email: "alice@example.com"});
  const [ theme, setTheme ] = useState<string>("light");

  return (
    <>
    <UserContext.Provider value={user}>
      <UserInfo />
    </UserContext.Provider>

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  </>
  )
}

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Header render");

  return (
    <header>
      <p>Split Context</p>
      <button onClick={() => setTheme((t:string) => (t === "light" ? "dark" : "light"))}>
        {theme === "light" ? "🌞" : "🌙"}
      </button>
    </header>
  )
}

const UserInfo = () => {
  const user = useContext(UserContext);
  console.log("UserInfo render");

  return (
    <p>
      {user.name} - {user.email}
    </p>
  )
}

export default SplitContexts