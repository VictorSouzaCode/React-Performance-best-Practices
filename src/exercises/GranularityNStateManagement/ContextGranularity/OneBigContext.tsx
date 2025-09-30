import { createContext, useContext, useState } from "react";

// The Idea
// React Context lets you share data without prop drilling.
// But here’s the gotcha:
// Whenever the context value changes, all components that consume that context re-render.
// If you stuff a big object into one context, any change to any field forces all consumers to re-render — even if they don’t use the changed field.
// This is what we want to avoid → so we split contexts by responsibility.

// What happens here:
// components showing just name or email still re-render even if only the theme is changed.
// UserInfo uses only user, not theme.
// But when you toggle theme in Header, React updates the AppContext value → UserInfo also re-renders, for no reason.
// As the app grows, this becomes a performance bottleneck.


// When to use it?
// Use one big context if your app is small and performance doesn’t matter much.

const BigContext = createContext<any>(null)

const OneBigContext = () => {
    const [state, setState] = useState({
        user: {
            name: "Alice",
            email: "alice@something.com",
        },
        theme: "light",
    })
  return (
    <BigContext.Provider value={{state, setState}}>
        <Header/>
        <UserInfo/>
    </BigContext.Provider>
  )
}


const Header = () => {
    const { state, setState } = useContext(BigContext)
    console.log("Header render")

    return (
        <header>
            <p>
            Big Context
            </p>
            <button
            onClick={() => {
                setState({...state, theme: state.theme === "light" ? "dark" : "light"})
            }}
            >
                {state.theme === "light" ? "L" : "D"}
            </button>
        </header>
    )
}

const UserInfo = () => {
    const { state } = useContext(BigContext);
    console.log("UserInfo render");

    return (
        <p>
            {state.user.name} - {state.user.email}
        </p>
    )
}

export default OneBigContext