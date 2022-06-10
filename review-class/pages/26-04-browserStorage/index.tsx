export default function BrowserStorage () {



  const onClickSaveCookie = () => {
    document.cookie = "aaa=mark"
    document.cookie = "bbb=johny"
  }
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "jay")
  }
  const onClickSaveSesstion = () => {
    sessionStorage.setItem("ccc", "eng")
  }
  
  const onClickLoadCookie = () => {
    const myCookie = document.cookie
    console.log(myCookie)
  }
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb")
    console.log(bbb)
  }
  const onClickLoadSesstion = () => {
    const ccc = sessionStorage.getItem("ccc")
    console.log(ccc)
  }

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}> 로컬 저장</button>
      <button onClick={onClickSaveSesstion}>세션 저장</button>
      =================
      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <button onClick={onClickLoadSesstion}>세션 조회</button>
    </div>
  )
}