import { useEffect, useState } from "react"
import MainUi from "./Main.presenter"

export default function MainContainer () {
  const [value, onChange] = useState(new Date());

  return (
    <MainUi 
      value={value}
      onChange={onChange}
    />
  )
}