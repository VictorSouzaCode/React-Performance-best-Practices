import { createContext, type ReactNode, useContext, useState } from "react";


export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const ctx = useContext(ThemeContext);

    if(!ctx) throw new Error("useTheme must be used inside ThemeProvider");

    return ctx;
}

type ThemeProviderProps = {
    children: ReactNode,
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((t) => (t === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}