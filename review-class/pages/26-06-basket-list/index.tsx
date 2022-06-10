import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARD = gql`
query fetchBoards{
  fetchBoards {
    _id
    writer
    title
  }
}
`

interface IBoard {
  _id: string;
  writer: string;
  title: string;
}

const MyRow = styled.div`
  display: flex;
`

const MyColumn = styled.div`
  width: 25%;
`

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([])
  
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
    setBasketItems(baskets)
    
  }, [])


  return (
    <div>
      <h1>장바구니</h1>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  )
}