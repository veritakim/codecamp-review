import styled from '@emotion/styled';
import { ILoginUiType } from './Login.type';
import * as S from './Login.style'


export default function LoginUI (props: ILoginUiType) {

  return (
    <S.Body>
      <S.BoxContainer>
        <S.MainImgBox>
          <S.LoginImg src='/myDuck.jpeg' />
        </S.MainImgBox>

        <S.LoginBox>
          <form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.LogoDiv>
              <S.Title>Login</S.Title>
            </S.LogoDiv>
            <S.InputDiv>
              <S.InputStyle type="email" placeholder='email' {...props.register("email")}/>
              <S.ErrorDiv>으엉</S.ErrorDiv>
              <S.InputStyle type="password" placeholder='password' {...props.register("password")} />
              <S.ErrorDiv>어엉</S.ErrorDiv>
            </S.InputDiv>

            <S.BtnDiv>
              <S.LoginBtn>
                <S.LoginBtnImg src='/loginKey.png' />
              </S.LoginBtn>
            </S.BtnDiv>
          </form>
          <S.BottomDiv>
            <span>아이디가 없으신가요?</span>
            <S.SignInSpan onClick={props.onClickMoveSignIn}>회원가입</S.SignInSpan>
          </S.BottomDiv>
        </S.LoginBox>

      </S.BoxContainer>
  </S.Body>
  )
}
