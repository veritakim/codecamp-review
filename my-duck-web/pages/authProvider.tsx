import { User } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase/clientApp"
import { AuthContext } from "./authContext"


const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(fbUser => {
      console.log("구독", fbUser)
      setUser(fbUser)
    })
    return subscribe
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider
