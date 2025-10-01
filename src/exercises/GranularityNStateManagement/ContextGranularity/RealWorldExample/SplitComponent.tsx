import UserInfo from "./components/UserInfo"
import Header from "./components/Header"
import { UserProvider } from "./context/UserContext"
import { ThemeProvider } from "./context/ThemeContext"

const SplitComponent = () => {
    const user = { name: "Alice", email: "alice@something.com"}

  return (
      <UserProvider user={user} >
          <ThemeProvider>
              <Header />
              <UserInfo />
          </ThemeProvider>
      </UserProvider>
  )
}

export default SplitComponent