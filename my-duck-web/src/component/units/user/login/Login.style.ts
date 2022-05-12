import styled from "@emotion/styled"

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #F1F1F1;
`

export const BoxContainer = styled.div`
  width: 540px;
  height: 400px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 3px 20px -3px #999999;
  margin: 0 auto;
`
export const LoginBox = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ImageDiv = styled.div`
  overflow: hidden;
`

export const LoginImg = styled.img`
  width: 270px;
  margin-left: 10px;
`

export const LogoDiv = styled.div`
  width: 250px;
  height: 115px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  margin-left: 17px;
`
export const Logo = styled.img`
  width: 120px;
  height: 90px;
`
export const InputDiv = styled.div`
    width: 256px;
    height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ErrorDiv = styled.div`
  width: 256px;
  height: 22px;
  font-size: 12px;
  color: red;
  margin-left: 36px;
`

export const InputStyle = styled.input`
  width: 226px;
  height: 45px;
  margin-bottom: 10px;
  font-size: 15px;
  padding-left: 10px;
`
export const LoginButton = styled.div`
  width: 120px;
  height: 50px;
  border: none;
`

export const BtnDiv = styled(InputDiv)`
  display: flex;
  height: 46px;
  flex-direction: row;
  align-items: center;
`

export const LoginBtn = styled.button`
  width: 30px;
  border: none;
  background-color: white;
`

export const LoginBtnImg = styled.img`
  width: 30px;
  cursor: pointer;
` 

export const BottomDiv = styled.div`
  width: 100%;
  height: 55px;
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
`

export const SignInSpan = styled.span`
  font-weight: 600;
  cursor: pointer;
`