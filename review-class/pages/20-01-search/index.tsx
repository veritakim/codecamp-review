import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { ChangeEvent, MouseEvent, useState } from 'react'
import _ from 'lodash'


const FETCH_BOARDS = gql `
  query fetchBoards($search: String, $page: Int){
    fetchBoards(search: $search, page: $page){
          _id
          writer
          title
    }
  }
`
const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function SearchPage () {
                    // 안에는 셋팅값
  const { data, refetch } = useQuery(FETCH_BOARDS)
  console.log(data)
  const [keyword, setKeyword] = useState("")

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const onClickSearch = () => {
    refetch({
      search: keyword
    })
  }

  const onClickPage = (event) => {
    refetch({
      page: Number(event.target.id)
    })

  }

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChageSearch}/> <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map( (el) => (
        <MyRow key={el.number}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onClickPage} key={index + 1} id={String(index)}>{index + 1}</span>
      ))}
    </div>
    
  )
}

