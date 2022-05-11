import styled from '@emotion/styled';

const SignInSpan = styled.span`
  cursor: pointer;
`

export default function LoginUI (props) {

  return (
    <div>
      <form onClick={props.handleSubmit(props.onClickLogin)}>
        <h1>로그인 페이지입니뎅</h1>
        <div>아이디 : <input type="text" {...props.register("email")}/></div>
        <div>비밀번호 : <input type="password" {...props.register("password")} /></div>
        <button>로그인</button>
      </form>
      <div>
        <span>아이디가 없으신가요?</span>
        <span onClick={props.onClickMoveSignIn}>회원가입</span>
      </div>
    </div>
  )
}
