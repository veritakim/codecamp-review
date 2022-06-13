// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';


const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})

export default function WebEditorPage () {
  const onChageContents = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      제 목 : <input type="text" /> <br />
      작성자 : <input type="text" /><br />
      비밀번호 : <input type="password" /><br />
      내 용 : <ReactQuill onChange={onChageContents}/><br />
      <button>등록하기</button>

    </div>
  )
}