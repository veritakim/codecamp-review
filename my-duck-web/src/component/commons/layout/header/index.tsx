import { useRouter } from "next/router"
import { useAuth } from "../../../../../context/AuthContext"

export default function Header () {
  const { logout } = useAuth() 
  const router = useRouter()

  const onClickLogout = () => {
    logout()
    router.push('/')
  }
  
  return (
    <div>
      <div>header</div>
      <div><button onClick={onClickLogout}>Logout</button></div>

    </div>
  )
}