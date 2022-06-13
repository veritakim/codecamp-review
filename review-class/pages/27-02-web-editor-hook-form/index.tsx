// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form'


const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})

export default function WebEditorHookFormPage () {
  const {handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange"
  })

  const onChageContents = (value: string) => {
    console.log(value)

    setValue("contents", value === "<p><br></p>" ? "" : value)
    
    trigger("contents")
  }

  return (
    <div>
      제 목 : <input type="text" {...register("title")} /> <br />
      작성자 : <input type="text" {...register("writer")}/><br />
      비밀번호 : <input type="password" {...register("password")} /><br />
      내 용 : <ReactQuill onChange={onChageContents}/><br />
      <button>등록하기</button>

    </div>
  )
}