import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { makeStyles } from "@mui/material"


export const Wrapper = styled.div`
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const CalendarHead = styled.div`

`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const YearMonthBox = styled.div`

`
export const YearBox = styled.div`
  margin-bottom: -10px;
  font-size: 30px;
`

export const MonthBox = styled.div`
  font-size: 60px;
  font-weight: 800;
`

export const HeadBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const TodayBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
export const CalendarBody = styled.div``

export const Week = styled.div`
  display: flex;
  text-align: center;
  border-bottom: 1px solid #edc590;

`
export const WeekBox = styled.div`
  width: 20%;
  height: 50px;
  font-weight: 700;
  color: ${(props) => props.id === "SUN" && "#e56b24"};
  
`

export const Day = styled.div`
  display: flex;
`

export const DayBox = styled.div`
  width: 30%;
  height: 200px;
  border: 0.5px solid #edc590;
  padding: 10px;
`

const hover = css`
  &:hover {
    display: none;
  }
`

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover{
    opacity: 100;
  }
  `

export const ContentBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border: 1px solid #c6c6c6;
  border-radius: 20%;
`

export const TodayBox = styled(DayBox)`
  font-weight: 700;
`


export const UtilBtn = styled.button`
  border: none;
  background-color: white;
  color: orange;
  cursor: pointer;
`

export const TodayRound = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  top: -29px;
  left: -7px;
  border-radius: 100%;
  background-color: #ff973e69;
`