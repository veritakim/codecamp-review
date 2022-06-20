export default function EventLoopPage () {
  const onClickTimer = () => {

    console.log("========start=======")
  
    // 비동기작업(매크로큐에 들어감)
    setTimeout(() => {
      console.log("i'm setTimeout!! queue!! i'll start later 0sec")
    }, 0)
  
    new Promise((resolve) => {
      resolve("mike")
    }).then((res) => {
      console.log("i'm Promise!! queue!! i'll start later 0sec -1")
    })
  
    // 비동기작업(매크로큐에 들어감)
    setInterval(() => {
      console.log("i'm setInterval!!!! i'll process every single 0sec")
    }, 0)
  
    let sum = 0
    for (let i = 0; i < 90000000; i++ ) {
      sum = sum + 1   
    }
  
    new Promise((resolve) => {
      resolve("mike")
    }).then((res) => {
      console.log("i'm Promise!! queue!! i'll start later 0sec -2")
    })
  
    console.log("========end=======")


    /*ㅎ
     *  매크로 테스크 큐
     오래걸리는 작업. 백그라운드에서 처리되고 들어옴
      setTimeout, setInterval

     - 마이크로 테스크 큐 
     Promise 

    큐가 2개가 되면 누가 먼저 빠져나올 것인가?
    순서
    마이크로가 먼저 -> 그 다음 매크로가 빠져나온다.


     */
  }

  return (
    <div>
      <button onClick={onClickTimer}>start</button>
    </div>
  )
  
}