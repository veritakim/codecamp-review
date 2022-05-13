import { ChangeEvent } from "react";

interface ISignUpProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void; 
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void; 
  onChangeNickName: (e: ChangeEvent<HTMLInputElement>) => void; 
  onClickSignUp: (data: any) => void; 
}

export default function SignUpUi (props: ISignUpProps) {

  return (
    <div>
        <h1>회원가입 페이지</h1>
        <div>아이디: <input type="email" onChange={props.onChangeEmail} /> </div>
        <div>비밀번호: <input type="password" onChange={props.onChangePassword} /> </div>
        <div>별명 <input type="text" onChange={props.onChangeNickName} /> </div>
        <button onClick={props.onClickSignUp}>회원가입</button>
    </div>
  )
}