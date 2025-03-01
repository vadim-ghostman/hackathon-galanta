'use client';

import { useEffect, useState } from "react";
import EventPopup, { WeekEventPopup } from "./popup";

interface CalendarDataProps {
  monthData: { [key: string]: string | number },
  events: { [key: number]: string[] },
  weekToShow?: number
  eventData?: { [key: string]: { startHour: string, endHour: string } }
  setMonthData?: (e: { [key: string]: number | string }) => void;
}

export const MiniCalendar = ({ monthData, setMonthData }: CalendarDataProps ) => {
  if (!setMonthData) return;
  const days = ['Pon', 'Ut', 'St', 'St', 'Pia', 'Sob', 'Ned'];
  const daysInMonth = monthData['daysInMonth'] as number;
  const daysInWeek = 7;
  const startPadding = monthData['startPadding'] as number;
  const rows = Array.from(
    { length: daysInMonth / daysInWeek + 1 }, (_, i) =>
      Array.from({ length: daysInWeek }, (_, j) =>
        i * daysInWeek + j + 1 - startPadding).map(day => day > 0 && day <= daysInMonth ? day : '')
  );

  const Day = ({ day, choosen }: { day: number, choosen: boolean }) => {
    const defaultStyle = 'size-[40px] text-center rounded-full cursor-pointer transition-colors duration-300';
    return choosen ?
      <td onClick={() => setMonthData({ ...monthData, today: day })} className={`${defaultStyle} bg-[var(--lapis-lazuli)] text-white`}>{day}</td>
      : <td onClick={() => setMonthData({ ...monthData, today: day })} className={`${defaultStyle} hover:bg-[var(--vista-blue)]`}>{day}</td>
  }
  
  return (
    <div className='w-[350px] flex flex-col gap-[4px]'>
      <div className="w-full flex justify-between items-center p-2">
        <h1>{monthData["monthTitle"]} {monthData["year"]}</h1>
        <div className="flex gap-2">
          <p className="cursor-pointer">{"<"}</p>
          <p className="cursor-pointer">{">"}</p>
        </div>
      </div>
      <div className="border rounded-lg p-2">
        <table>
          <thead>
            <tr className="border-b">
              {days.map((day, di) => <td className='text-center size-[50px]' key={di}>{day}</td>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => <tr key={ri}>{row.map((day, di) => <Day key={di} day={day as number} choosen={day == monthData["today"]} />)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const Calendar = ({ monthData, events, setMonthData }: CalendarDataProps) => {
  if (!setMonthData) return;
  const days = ['Pon', 'Ut', 'St', 'St', 'Pia', 'Sob', 'Ned'];
  const daysInMonth = monthData['daysInMonth'] as number;
  const daysInWeek = 7;
  const startPadding = monthData['startPadding'] as number;
  const rows = Array.from(
    { length: daysInMonth / daysInWeek + 1 }, (_, i) =>
      Array.from({ length: daysInWeek }, (_, j) =>
        i * daysInWeek + j + 1 - startPadding).map(day => day > 0 && day <= daysInMonth ? day : '')
  );

  const DayText = ({ day, choosen }: { day: number, choosen: boolean }) => {
    const defaultStyle = 'flex items-center justify-center size-[35px] rounded-full cursor-pointer transition-colors duration-300';
    return choosen ?
      <p className={`${defaultStyle} bg-[var(--lapis-lazuli)] text-white`}>{day}</p>
      : <p onClick={() => setMonthData({ ...monthData, today: day })} className={`${defaultStyle} hover:bg-[var(--vista-blue)]`}>{day}</p>
  }

  const DayBlock = ({ day, choosen }: { day: number, choosen: boolean }) => {
    return (
      <div
        className={`border border-opacity-25 rounded-[10px] h-[150px] gap-1 text-center transition-colors duration-300 flex flex-col items-center p-2 ${day == monthData["today"] ? 'border-[var(--lapis-lazuli)]' : ''}`}
      >
        <DayText day={day} choosen={choosen} />
        {events[day] && events[day].length <= 2 && events[day].map((event, ei) => <EventPopup key={ei} title={event} />)}
        {events[day] && events[day].length > 2 && <EventPopup title={events[day][0]}/>}
        {events[day] && events[day].length > 2 && <p className='cursor-pointer text-sm text-gray-500'>{events[day].length - 1} more events</p>}
        {/* {(getRandomInt(4) === 3) && <Event title="Some event" />} */}
      </div>
    );
  }

  return (
    <div className='w-full'>
      <h1>{monthData["monthTitle"]} {monthData["year"]}</h1>
      <div className='grid grid-cols-7 gap-2'>
        {days.map((day, di) => <div key={di} className='h-min'><p className='text-center'>{day}</p></div>)}
        {rows.map((row) => row.map((day, di) => <DayBlock key={di} day={day as number} choosen={day == monthData["today"]} />))}
      </div>
    </div>
  );
}


export const DayCalendar = ({ monthData }: CalendarDataProps) => {
  const days = ['', 'Pon', 'Ut', 'St', 'St', 'Pia', 'Sob', 'Ned'];
  const daysInMonth = monthData['daysInMonth'] as number;
  const daysInWeek = 7;
  const startPadding = monthData['startPadding'] as number;
  const rows = Array.from(
    { length: daysInMonth / daysInWeek + 1 }, (_, i) =>
      Array.from({ length: daysInWeek }, (_, j) =>
        i * daysInWeek + j + 1 - startPadding).map(day => day > 0 && day <= daysInMonth ? day : '')
  );
  const [weekToShow, setWeekToShow] = useState(0);

  useEffect(() => {
    rows.forEach((row, idx) => {
      if (row.find((elem) => elem === monthData['today'])) {
        console.log(row);
        setWeekToShow(idx);
      }}
    )},
  [monthData])

  const DayText = ({ day, choosen }: { day: number, choosen: boolean }) => {
    const defaultStyle = 'flex items-center justify-center size-[35px] rounded-full cursor-pointer transition-colors duration-300';
    return choosen ?
      <p className={`${defaultStyle} bg-[var(--lapis-lazuli)] text-white`}>{day}</p>
      : <p className={`${defaultStyle} hover:bg-[var(--vista-blue)]`}>{day}</p>
  }

  const DayBlock = ({ day, choosen }: { day: number, choosen: boolean }) => {
    return (
      <div
        className={`border-b border-opacity-25 h-min gap-1 text-center transition-colors duration-300 flex flex-col items-center p-2 ${day == monthData["today"] ? 'border-[var(--lapis-lazuli)]' : ''}`}
      >
        <DayText day={day} choosen={choosen} />
        {/* {events[day] && events[day].length <= 2 && events[day].map((event, ei) => <EventPopup key={ei} title={event} />)}
        {events[day] && events[day].length > 2 && <EventPopup title={events[day][0]}/>}
        {events[day] && events[day].length > 2 && <p className='cursor-pointer text-sm text-gray-500'>{events[day].length - 1} more events</p>} */}
      </div>
    );
  }

  if (!weekToShow) return;
  const hourRows = [
    "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]

  // const dayData = [
  //   4: ['Event 4'],
  // ]

  const H = ({ hour, color = '' }: { hour: string, color?: string }) =>
    color === 'event'
      ? <WeekEventPopup title={hour}/>
      : <div className="border-b border-opacity-25 gap-1 text-center transition-colors duration-300 flex flex-col items-center p-2">{hour}</div>;
  const evaluateHour = (hour: string) => {
    return parseInt(hour.split(":")[0]);
  }

  const getDay = (vi: number) => {
    const day = rows[weekToShow][vi - 1];
    return day;
  }

  const getEvent = (vi: number, h: string) => {
    const hour = evaluateHour(h);
    const day = getDay(vi);

    if (hour == 10 && day == 11)
      return "event 1";
    else if (hour == 14 && day == 11)
      return "event 2";
    else if (hour == 17 && day == 12)
      return "event 3";
    else if (hour == 10 && day == 14)
      return "event 4";
    else return "";
  }

  const getColor = (vi: number, h: string) => {
    const hour = evaluateHour(h);
    const day = getDay(vi);

    if (
      hour >= 10 && hour < 13 && day == 11
      || hour >= 14 && hour < 16 && day == 11
      || hour >= 17 && hour < 19 && day == 12
      || hour >= 10 && hour < 15 && day == 14
    )
      return "event";
  }

  return (
    <div className='w-full'>
      <h1>{monthData["monthTitle"]} {monthData["year"]}</h1>
      <div className='grid grid-cols-8'>
        {days.map((day, di) => <div key={di}><p className='text-center'>{day}</p></div>)}
        {["hodina", ...rows[weekToShow]].map((day, di) => <DayBlock key={di} day={day as number} choosen={day == monthData["today"]} />)}
        {hourRows.map((hour, hi) => 
          [1, 0, 0, 0, 0, 0, 0, 0].map((val, vi) =>
            val === 1
              ? <H key={hi} hour={hour}/>
              : <H
                key={hi}
                color={getColor(vi, hour)}
                hour={getEvent(vi, hour)}
              />))}
      </div>
    </div>
  );
}
