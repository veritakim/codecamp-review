import { Dispatch, SetStateAction } from 'react';
import Calendar from 'react-calendar';

interface CalendarProps {
  value: Date
  onChange: Dispatch<SetStateAction<Date>>
}

export default function MainUi (props: CalendarProps) {


  return (
    <div>
      <Calendar onChange={props.onChange} value={props.value} />
    </div>
  )
}