import Header from '@/app/header';
import React, { useState } from 'react';
import '@/app/globals.css';
import Input from '@/components/input';
import Link from 'next/link';
import { MiniCalendar } from '@/components/calendars';
import { events } from '@/lib/mockData';
import { eventData } from '@/lib/mockData';
import CategoryList, { CategoryListDict } from '@/components/categoryList';

const CreateEvent = () => {
  const [monthData, setMonthData] = useState({
    monthTitle: 'Februar',
    year: 2025,
    daysInMonth: 28,
    startPadding: 5,
    today: 27
  });

  const [categories, setCategories] = useState<CategoryListDict>({
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
        <Header />
        <div className="px-[100px] w-full flex justify-center flex-1 py-10">
          <div className='flex flex-1 justify-between gap-5'>
            <div className='flex flex-col w-[70%] flex-shrink-0 border rounded-[20px] py-10 px-20 gap-5'>
              <p className='text-[44px] font-bold'>Vytvorenie podujatia</p>
              <div className='flex flex-col gap-3 w-[800px]'>
                <Input type="text" placeholder='Nazov podujatia'/>
                <Input type="text" placeholder='Popis podujatia'/>
                <Input type="text" placeholder='Miesto konania' isDatalist={true}/>
                <Input type="text" placeholder='Link na externy rezervacny system (nepovinne)'/>
                {!eventDay && <Input type="text" placeholder='Den podujatia (vyberte na kalendari)' disabled={true}/>}
                {eventDay && 
                  <div className='flex flex-col gap-3'>
                    <Input value={eventDay} type="text" placeholder='Den podujatia (vyberte na kalendari)' disabled={true}/>
                    <div className='flex gap-3'>
                      <div className='flex flex-col gap-1 w-full'>
                        <p>Cas zaciatku</p>
                        <Input type='time' placeholder=''/>
                      </div>
                      <div className='flex flex-col gap-1 w-full'>
                        <p>Cas konca</p>
                        <Input type='time' placeholder=''/>
                      </div>
                    </div>
                  </div>
                }
                <CategoryList categoryList={categories} setCategoryList={setCategories}/>
              </div>
              <button className='bg-[var(--galanta-red)] w-[200px] text-white text-[20px] px-10 py-1 rounded-[10px] hover:shadow-lg hover:shadow-black/25 transition-shadow duration-200'>podtvrdit</button>
            </div>
            <div className='flex border w-full py-10 rounded-[20px] flex-col items-center gap-10'>
              <MiniCalendar
                events={events}
                monthData={monthData}
                setMonthData={setMonthData}
              />
              <div className='flex flex-col gap-3 w-full items-center'>
                <h2 className='text-[32px] text-center'>Podujatia pre {monthData.today} {monthData.monthTitle}</h2>
                <div className='flex flex-col gap-1 w-full px-[130px]'>
                  {events[monthData["today"]] && events[monthData["today"]].map((eventTitle, id) => {
                    if (!eventData[eventTitle]) return;
                    const from = eventData[eventTitle]?.startHour;
                    const to = eventData[eventTitle]?.endHour;
                    return (
                      <p key={id} className='bg-[var(--vista-blue)] text-white w-full py-2 px-5 rounded-[10px]'><span className='text-gray-200'>{from} - {to}</span> {eventTitle}</p>
                    )
                  })}
                  {!events[monthData["today"]] && <p className='text-gray-500 text-center'>Ziadne podujatia</p>}
                </div>
                <button onClick={() => chooseEventDay(`${monthData.today} ${monthData.monthTitle}`)} className='bg-[var(--galanta-red)] w-[200px] text-white text-[20px] px-10 py-1 rounded-[10px] hover:shadow-lg hover:shadow-black/25 transition-shadow duration-200'>vybrat den</button>
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

export default CreateEvent;
