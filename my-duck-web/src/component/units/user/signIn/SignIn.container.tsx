import { useForm } from "react-hook-form";
import SignInUi from "./SignIn.presenter";

export default function SignInContainer () {
  const {register, handleSubmit, formState} = useForm({
    mode: "onChange"
  })

  const onClickSignIn = (data) => {
    alert("회원가입 버튼")
    console.log(data.email, data.password)
  }

  return <SignInUi 
          register={register}
          handleSubmit={handleSubmit}
          onClickSignIn={onClickSignIn}
      />
}