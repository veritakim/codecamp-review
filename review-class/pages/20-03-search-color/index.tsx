import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { ChangeEvent, MouseEvent, useState } from 'react'
import _ from 'lodash'
import {v4 as uuid} from 'uuid'


interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props:IProps) => props.isMatched ? "red" : "black"};
`

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
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const [keyword, setKeyword] = useState("")

  const getDebounde = _.debounce((data) => {
    refetch({
      search: data,
      page: 1
    })
    setKeyword(data)
  }, 200)
  
  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounde(event.target.value)

  }



  const onClickPage = (event) => {
    refetch({
      page: Number(event.target.id)
    })

  }

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChageSearch}/>
      {data?.fetchBoards.map( (el) => (
        <MyRow key={el.number}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title.replaceAll(keyword, `#@!${keyword}#@!`).split("#@!").map((el, index) => (
          <Word key={uuid()} isMatched={keyword === el}>{el}</Word>
          ))}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onClickPage} key={index + 1} id={String(index)}>{index + 1}</span>
      ))}
    </div>
    
  )
}

