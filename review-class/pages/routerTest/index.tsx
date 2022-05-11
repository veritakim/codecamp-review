import { useRouter } from 'next/router'

export default function TestRouter() {
  const router = useRouter()

  const onClickReload = () => {
    router.reload()
  }

  const onClickMove = () => {
    router.replace("/page1")
  }
  return (
    <div>
      <button onClick={onClickMove}>페이지 이동</button>
      <button onClick={onClickReload}>새로고침</button>
    </div>
  )
}