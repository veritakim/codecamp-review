import { Dispatch, SetStateAction, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import moment from 'moment';

interface CalendarProps {
  value: Date
  onChange: Dispatch<SetStateAction<Date>>
}

export default function MainUi (props: CalendarProps) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
        onChange={props.onChange} 
        value={props.value} 
        />
    </div>
  )
}