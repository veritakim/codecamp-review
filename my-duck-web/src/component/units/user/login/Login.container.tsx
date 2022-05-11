import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form" 
import { useRouter } from "next/router";

export default function LoginContainer () {
  const {register, handleSubmit, formState} = useForm({
    mode: "onChange"
  })
  const router = useRouter()


  const onClickLogin = () => {
    alert("로그인버튼")
  }

  const onClickMoveSignIn = () => {
    router.push("/user/signIn")
  }


  return <LoginUI 
          register={register}
          handleSubmit={handleSubmit}
          onClickLogin={onClickLogin}
          onClickMoveSignIn={onClickMoveSignIn}
          />
}
