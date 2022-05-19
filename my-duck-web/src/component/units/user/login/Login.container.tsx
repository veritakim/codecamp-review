import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form" 
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useAuth } from "../../../../../context/AuthContext";

export default function LoginContainer () {
  const { user, login } = useAuth()
  const router = useRouter()

  const [ newUser, setNewUser ] = useState({
    email: "",
    password: ""
  })

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      email: e.target.value
    })
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      password: e.target.value
    })
  }


  const onClickLogin = async () => {
    try{
      await login(newUser.email, newUser.password)
      
      router.push('/main')
    } catch (error: any) {
      alert("아이디와 비밀번호를 확인해주세요")
      // console.log(error.message)
    }
  }

  
  const onClickMoveSignIn = () => {
    router.push("/user/signUp")
  }


  return <LoginUI 
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          onClickLogin={onClickLogin}
          onClickMoveSignIn={onClickMoveSignIn}
          />
}
