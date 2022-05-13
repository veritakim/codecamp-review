import { ChangeEvent, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../../context/AuthContext";
import SignUpUi from "./SignUp.presenter";

export default function SignUpContainer () {
  const { user, signUp } = useAuth()
  const [ newUser, setNewUser] = useState({
    email: "",
    password: "",
    nickName: ""
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

  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      nickName: e.target.value
    })
  }

  const onClickSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
    // alert("회원가입 버튼")
    e.preventDefault()
    try{
      await signUp( newUser.email, newUser.password)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return <SignUpUi 
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          onChangeNickName={onChangeNickName}
          onClickSignUp={onClickSignUp}
      />
}