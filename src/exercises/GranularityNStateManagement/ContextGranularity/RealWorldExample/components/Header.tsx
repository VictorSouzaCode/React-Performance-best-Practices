import { useTheme } from "../context/ThemeContext"

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    console.log("Header Render")

  return (
    <header>
        <p>Split Context Example</p>
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌞 light" : "🌙 Dark"}
        </button>
    </header>
  )
}

export default Header