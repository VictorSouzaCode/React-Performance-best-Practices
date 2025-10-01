import { useUser } from "../context/UserContext"

const UserInfo = () => {
    const user = useUser()

  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserInfo