import { Dispatch, SetStateAction, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import * as S from './Main.styled'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';

interface CalendarProps {
  value: Date
  onChange: Dispatch<SetStateAction<Date>>
  eventContent?: any
  handleDateClick?: (arg: any) => void
  isOpen: boolean;
  onClickModal: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CalendarDiv = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
`

const IconArea = styled.div`
  position: relative;
  top: 100px; 
`
const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20%;
  margin-left: 2px;
`

const ImageBox = styled.div`
  width: 100px;
  height: 60px;
  position: absolute;
  top: 30px;
  overflow: hidden;
  margin: 0 auto;
`
const SelectImg = styled.img`
  width: 100%;
  height:100%;
  object-fit:cover;
`

const Hamburger = styled.div`
  position: relative;
  top: 200px;
  width: 200px;
  height: 150px;
  background-color: #ffa60044;
`

export default function MainUi (props: CalendarProps) {

  function renderEventContent(eventInfo: any) {
    // console.log("info", String(eventInfo.event._instance.range.end).split(" ")[2])
    console.log(eventInfo)
    const start = Number(String(eventInfo.event._instance.range.start).split(" ")[2])
    const end = Number(String(eventInfo.event._instance.range.end).split(" ")[2])

    return (
      <>  
        {eventInfo.event.title !== "" && (
          <i>{eventInfo.event.title}</i>
        )}
        {end - start === 1 && (
          <IconArea>
            <Icon src='/bubble.png' />
            <Icon src='/insta.png' />
            <Icon src='/twitter.png' />
          </IconArea>
        )}
        <ImageBox>
          {eventInfo.event.url && (
            <SelectImg src={eventInfo.event.url} />
          )}
        </ImageBox>
        {/* <h1>{eventInfo.timeText}</h1> */}
      </>
    )
  }
  

  return (
    <div>
      <S.StyleWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="en"
          eventContent={renderEventContent}
          events={[
            {date: "2022-05-14"},
            {title: "마첫 지송", start: "2022-05-14", end: "2022-05-16"},
            {title: "개짱나", start: "2022-05-14", end: "2022-05-16"},
            {title: "지송이 너무 기여움", date: "2022-05-18", url:"/cuteJs.jpeg"}
          ]}
          dateClick={props.handleDateClick}
          />
      </S.StyleWrapper>

      {props.isOpen && (
        <Modal
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <button onClick={props.onClickModal}>취소</button>
          </Box>
        </Modal>
      )}
     
    </div>
  )
}