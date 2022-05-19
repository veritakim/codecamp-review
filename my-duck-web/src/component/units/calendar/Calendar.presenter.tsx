import styled from '@emotion/styled'
import { Moment } from 'moment'
import * as S from './Calendar.style'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

interface ICalendarProps {
 date: Moment; 
 handleDayClick: (current: Moment) => void; 
 returnToday: () => void; 
 jumpToMonth: (num: number) => void; 
 generate: () => JSX.Element[];
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


export default function CalendarUiPage (props: ICalendarProps) {


  return (
    <>
    <S.Wrapper>
      <S.CalendarHead>
        <S.Head>
          <S.YearMonthBox>
            <S.YearBox>{props.date.format('YYYY')}</S.YearBox>
            <S.MonthBox>{props.date.format('MMMM')}</S.MonthBox>
          </S.YearMonthBox>
          <S.HeadBtnBox>
            <S.UtilBtn onClick={() => props.jumpToMonth(0)}>
              <LeftCircleOutlined />
            </S.UtilBtn>
            <S.TodayBtn onClick={props.returnToday}>Today</S.TodayBtn>
            <S.UtilBtn onClick={() => props.jumpToMonth(1)}>
              <RightCircleOutlined />
            </S.UtilBtn>
          </S.HeadBtnBox>
        </S.Head>
      </S.CalendarHead>
      <S.CalendarBody>
        <S.Week>
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((el) => (
            <S.WeekBox key={el} id={el}>
              <span className="text">{el}</span>
            </S.WeekBox>
          ))}
        </S.Week>
        {props.generate()}
      </S.CalendarBody>
    </S.Wrapper>

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
    </>
  )
}