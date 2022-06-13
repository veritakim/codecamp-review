// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';


const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})
interface IBoard {
  title: string,
  writer: string,
  password: string,
  contents?: string
}

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`
export default function WebEditorSubmitPage () {
  const {handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange"
  })

  const [createBoard] = useMutation(CREATE_BOARD)
  const router = useRouter()

  const onChageContents = (value: string) => {
    console.log(value)

    setValue("contents", value === "<p><br></p>" ? "" : value)
    
    trigger("contents")
  }

  const onClickSubmit = async (data: IBoard) => {
    if(!(data.writer && data.title && data.password)) {
      alert("모두 입력해주세요.")
      return
    } 

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents
          }
        }
      })

      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`)

    } catch(error) {
      alert(error.message)
    }

  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      제 목 : <input type="text" {...register("title")} /> <br />
      작성자 : <input type="text" {...register("writer")}/><br />
      비밀번호 : <input type="password" {...register("password")} /><br />
      내 용 : <ReactQuill onChange={onChageContents}/><br />
      <button>등록하기</button>

    </form>
  )
}