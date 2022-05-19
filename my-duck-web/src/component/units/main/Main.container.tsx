import { useEffect, useState } from "react"
import MainUi from "./Main.presenter"

export default function MainContainer () {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false)

  const handleDateClick = (arg: any) => {
    // alert(arg.dateStr)
    setIsOpen(prev => !prev)
  }

  const onClickModal = () => {
    // setIsModalVisible(true)
    setIsOpen(prev => !prev)
  }


  return (
    <MainUi 
      value={value}
      onChange={onChange}
      handleDateClick={handleDateClick}
      isOpen={isOpen}
      onClickModal={onClickModal}
    />
  )
}