import axios from "axios"

export default function CallbackPromiseAsyncawaitPage () {

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest()
    aaa.open("get", "http://numbersapi.com/random?min=16&max=200")
    aaa.send()
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]
      // console.log(num)

      const bbb = new XMLHttpRequest()
      bbb.open("get", `http://koreanjson.com/posts/${num}`)
      bbb.send()
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId
        console.log(res)
        const ccc = new XMLHttpRequest()
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`)
        ccc.send()
        ccc.addEventListener("load", (res) => {
          // 최종 결과값
          console.log(res) 
        })

      })
    })
  }

  const onClickPromise = () => {
    axios.get("http://numbersapi.com/random?min=16&max=200")
  }
  const onClickAsyncawait = () => {}

  return(
    <div>
      <button onClick={onClickCallback}>Callback 요청하기!</button>
      <button onClick={onClickPromise}>Promise 요청하기!</button>
      <button onClick={onClickAsyncawait}>Asyncawait 요청하기!</button>
    </div>
  )
}