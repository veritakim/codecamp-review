export default function SignInUi (props) {

  return (
    <div>
      <form onClick={props.handleSubmit(props.onClickSignIn)}>
        <h1>회원가입 페이지</h1>
        <div>아이디: <input type="text" {...props.register("email")} /> </div>
        <div>비밀번호: <input type="password" {...props.register("password")} /> </div>
        <button>회원가입</button>
      </form>
    </div>
  )
}