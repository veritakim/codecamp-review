import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARD = gql`
query fetchBoards{
  fetchBoards {
    _id
    writer
    title
  }
}
`

const MyRow = styled.div`
  display: flex;
`

const MyColumn = styled.div`
  width: 25%;
`

export default function BasketPage() {
  const {data} = useQuery(FETCH_BOARD)

  const onClickBasket = (el) => () => {
    
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]") 
    // 중복 처리
    const temp = baskets.filter((item) => (item._id === el._id))
    if( temp.length === 1 ) {
      alert("이미 담은 물품입니다.")
      return
    }

    const {__typename, ...newEl} = el
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))

  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  )
}