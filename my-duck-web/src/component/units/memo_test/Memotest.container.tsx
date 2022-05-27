import styled from "@emotion/styled"
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import Draggable from 'react-draggable';
import { useRecoilState } from "recoil";
import { imageState } from "../../../commons/store";
import { v4 as uuid } from 'uuid'

const DivStyle = styled.div`
  width: 150px;
  height: 150px;
  background: url('/cuteJs.jpeg');
  background-size: 150px;
  background-repeat: no-repeat;
`


const ImgBtnDiv = styled.div`
  width: 80px;
  height: 50px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const DivImg = styled.div`
  width: 150px;
  height: 150px;
  background: ${props => props.id && `url(${props.id})`};
  background-size: 150px;
  background-repeat: no-repeat;
`

interface IDraggableData {
  x: number,
  y: number
}



export default function MemoTestContainer () {
  const fileRef = useRef<HTMLInputElement>(null)

  const [imgUrls, setImgUrls] = useState(["", "", ""])
  const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined])

  const [position, setPosition] = useState({x: 382, y: 440})

  const trackPos = (data: IDraggableData) => {
    setPosition({ x: data.x, y: data.y })
  };

  const eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  const onClickDiv = () => {
    fileRef.current?.click()
  }

  const onChangeFile = (number: number)=> (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      alert("파일이 없습니다")
      return 
    }

    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imgUrls]
        tempUrls[number] = data.target?.result

        setImgUrls(tempUrls)

        const tempFiles = [...files]
        tempFiles[number] = file
        setFiles(tempFiles)
      }
    }
  } 


  // console.log("img", files)

  return (
    <div>
       <ImgBtnDiv onClick={onClickDiv}>이미지 선택</ImgBtnDiv>
       <input style={{display: "none"}} type="file" onChange={onChangeFile(0)} ref={fileRef}/>
      <Draggable
      handle=".handle"
      defaultPosition={position}
      position={position}
      onDrag={(e, data) => trackPos(data)}
      >
      <div>
        <DivStyle className="handle"></DivStyle>
      </div>
    </Draggable>
    {imgUrls && (
      <>
        {/* <img src={imgUrls[0]} /> */}
        <Draggable
        handle=".handle"
        defaultPosition={position}
        position={position}
        onDrag={(e, data) => trackPos(data)}
        >
        <div>
          <DivImg className="handle" id={imgUrls[0]}></DivImg>
        </div>
      </Draggable>
      </>

    )}
    </div>
  )
}