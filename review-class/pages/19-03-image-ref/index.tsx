import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import { checkFileValidation } from "../../src/commons/library/validation"

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`

const ImgBtnDiv = styled.div`
  width: 80px;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function ImageUploadPage () {
  const fileRef = useRef<HTMLInputElement>(null)

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

  const onClickDiv = () => {
    fileRef.current?.click()
  }



  return (
    <div>
      <div>업로드 테스트</div>
      <ImgBtnDiv onClick={onClickDiv}>이미지 선택</ImgBtnDiv>
      <input style={{display: "none"}} type="file" onChange={onChangeFile} ref={fileRef}/>
      {/* <div>{data?.fetchUseditem.name}</div> */}
      {imgUrl && (
        <img src={`https://storage.googleapis.com/${imgUrl}`} />
      )}
    </div>
  )
}