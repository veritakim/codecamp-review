import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import DOMPurify from "dompurify"

const FETCH_BOARD = gql`
  query fetchBoard ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`


export default function WebEditorDetailPage () {
  const router = useRouter()


  const {data} = useQuery(FETCH_BOARD, {
    variables: {boardId : router.query.id}
  })

  return (
    <div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제 목 : {data?.fetchBoard.title}</div>
      {/* <div>내 용 : {data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" && (<div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data?.fetchBoard.contents)}}
      ></div>)}
    </div>
  )
}