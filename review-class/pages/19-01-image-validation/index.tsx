import { gql, useMutation, useQuery } from "@apollo/client"
import { ChangeEvent, MouseEvent, useState } from "react"
import { checkFileValidation } from "../../src/commons/library/validation"

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`

export default function ImageUploadPage () {
  const [imgUrl, setImgUrl] = useState<string | undefined>("")
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)

    const isValid = checkFileValidation(file)
    
    if (!isValid) return

    try {
      const result = await uploadFile({variables: {file}})
  
      setImgUrl(result.data?.uploadFile.url)
    } catch (e) {
      alert(e.message)
    }

  }



  return (
    <div>
      <div>업로드 테스트</div>
      <input type="file" onChange={onChangeFile}/>
      {/* <div>{data?.fetchUseditem.name}</div> */}
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </div>
  )
}