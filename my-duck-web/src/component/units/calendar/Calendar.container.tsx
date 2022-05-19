import CalendarUiPage from "./Calendar.presenter";
import { Fragment, useState } from "react";
import moment, { Moment as MomentTypes } from 'moment';
import * as S from './Calendar.style' 
import { v4 as uuidv4 } from 'uuid'

export default function CalendarContainer () {
  const [date, setdate] = useState<moment.Moment>(() => moment());
  const [isOpen, setIsOpen] = useState(false)

  const handleDateClick = (arg: any) => {
    // alert(arg.dateStr)
    setIsOpen(prev => !prev)
  }

  const onClickModal = () => {
    // setIsModalVisible(true)
    setIsOpen(prev => !prev)
  }


  // func
  const handleDayClick = (current: moment.Moment) => {
    setdate(current)
    setIsOpen(prev => !prev)
  };

  const returnToday = () => setdate(moment());
  const jumpToMonth = (num: number) => (num ? setdate(date.clone().add(30, 'day')) : setdate(date.clone().subtract(30, 'day')));

  // chalandar generate logic
  function generate() {
    // 님 날짜 뭐 눌렀어요? (초기값은 오늘)
    const today = date;
    const now = today;

    const myDate = new Date()
    const year = myDate.getFullYear()
    const month = String(myDate.getMonth() + 1).padStart(2, '0')
    const day = myDate.getDate()

    const myDay = `${year}${month}${day}`
    console.log("mydatye", myDay)

    // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
    // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
    const startWeek = today.clone().startOf('month').week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    let calendar = [];

    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기하자
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <S.Day key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              return (
                <Fragment key={uuidv4()}>
                 {current.format('YYYYMMDD') === myDay 
                 ? (
                    <S.TodayBox key={uuidv4()} onClick={() => handleDayClick(current)}>
                      <span className="text">{current.format('D')}</span>
                      <S.TodayRound></S.TodayRound>
                    </S.TodayBox>
                  )
                  : (
                    <S.DayBox key={uuidv4()} onClick={() => handleDayClick(current)}>
                      {current.format('MM') !== today.format('MM') 
                      ? (<span></span>)
                      : (
                        <>
                          <span className="text">{current.format('D')}</span>
                          <S.ContentBox>
                            <S.ContentBtn>+</S.ContentBtn>
                          </S.ContentBox>
                        </>
                      )}
                    </S.DayBox>
                  )
                } 
                </Fragment>
              );
            })}
        </S.Day>,
      );
    }
    return calendar;
  }

  return <CalendarUiPage
          date={date}
          handleDayClick={handleDayClick}
          returnToday={returnToday}
          jumpToMonth={jumpToMonth}
          generate={generate}
          handleDateClick={handleDateClick}
          isOpen={isOpen}
          onClickModal={onClickModal}
          />
}