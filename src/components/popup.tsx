'use client';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import EventInfo from "./eventinfo";
import React, { useState } from "react";

const EventPopup = ({ title }: { title: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='w-full relative'>
        <div
          onClick={handleClick}
          className='w-full flex items-center p-2 rounded-[10px] bg-[var(--vista-blue)] text-white'
        >
          <p>{title}</p>
        </div>
        {open ? (
          <div className="absolute left-[100%] -top-[400%] z-10">
            <EventInfo />
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

export const WeekEventPopup = ({ title }: { title: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='w-full relative'>
        <div
          onClick={handleClick}
          className="bg-[var(--vista-blue)] h-full cursor-pointer text-white border-opacity-25 gap-1 text-center transition-colors duration-300 flex flex-col items-center p-2"
        >
          {title}
        </div>
        {open ? (
          <div className="absolute left-[100%] -top-[400%] z-10">
            <EventInfo />
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

export default EventPopup;