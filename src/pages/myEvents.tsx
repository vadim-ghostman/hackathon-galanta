import Header from '@/app/header';
import React, { useState } from 'react';
import '@/app/globals.css';
import Input from '@/components/input';
import { MiniCalendar } from '@/components/calendars';
import { events } from '@/lib/mockData';
import { eventData } from '@/lib/mockData';
import FilterList, { FilterListDict } from '@/components/filterlist';
import Image from 'next/image';

const MyEvents = () => {
  const [monthData, setMonthData] = useState({
    monthTitle: 'Februar',
    year: 2025,
    daysInMonth: 28,
    startPadding: 5,
    today: 27
  });

  const [categories, setCategories] = useState<FilterListDict>({
    'Všetky': false,
    'Detské': false,
    'Kultúrne': false,
    'Športové': false,
    'Zábavné': false
  });

  const [eventDay, chooseEventDay] = useState("");
  
  return (
    <div>
      <div className="items-center min-h-screen flex flex-col justify-between">
        <Header withLang={false} />
        <div className="px-[100px] w-full flex justify-center flex-1 py-10">
          <div className='flex flex-1 justify-between gap-5'>
            <div className='flex flex-col w-[70%] flex-shrink-0 border rounded-[20px] py-10 px-20 gap-5'>
              <p className='text-[44px] font-bold'>Moje podujatia</p>
              <div className='flex flex-col gap-3 w-[600px]'>
                <div className='flex flex-col gap-2 border rounded-[20px] bg-blue-300 p-5'>
                  <h1 className='font-bold text-[24px]'>Hackathon Galanta</h1>
                  <p className='flex items-center gap-2 text-[var(--lapis-lazuli)]'>Thursday, February 27 <span className='rounded-full size-1 bg-[var(--lapis-lazuli)] inline-block'></span> 10:00 - 11:00</p>
                  <div className='flex gap-1 items-center'>
                    <Image src='/location.svg' width={16} height={16} alt='location'/>
                    <p className='text-[var(--lapis-lazuli)]'>Location: Galanta, Neologicky kastiel</p>
                  </div>
                  <p className='text-[var(--lapis-lazuli)]'>Price: free</p>
                  <button className='flex items-center justify-center px-5 py-2 bg-[var(--vista-blue)] rounded-[10px]'>info</button>
                </div>
              </div>
            </div>
            <div className='flex border w-full py-10 rounded-[20px] flex-col items-center gap-10'>
              <MiniCalendar
                events={events}
                monthData={monthData}
                setMonthData={setMonthData}
              />
              <div className='flex px-[70px]'>
                <FilterList filterList={categories} setFilterList={setCategories}/>
              </div>
            </div>
          </div>
        </div>
        {/* <EventInfo /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MyEvents;
