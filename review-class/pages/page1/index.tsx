import Router from "next/router"

export default function PageTest () {

  const onClickBack = () => {
    Router.back()
  }

  return (
    <div>
      <button onClick={onClickBack}>뒤로 가기</button>
    </div>
  )
}