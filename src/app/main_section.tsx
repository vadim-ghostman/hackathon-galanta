'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import FilterList from '@/components/filterlist';
import { MiniCalendar, Calendar, DayCalendar } from '@/components/calendars';
import { events } from '@/lib/mockData';
import GalantaMap, { FairPoint } from '@/components/map';

const Tabs = ({ tabs, currentTab, setCurrentTab }: { tabs: string[], currentTab: number, setCurrentTab: (t: number) => void }) => {
  // const [currentTab, setCurrentTab] = useState(0);

  const Tab = ({ text, choosen, idx }: { text: string, choosen: boolean, idx: number }) =>
    choosen ? 
      <button onClick={() => setCurrentTab(idx)} className='self-baseline transition-all duration-500 text-black font-bold text-[44px] py-2'>{text}</button>
      : <button onClick={() => setCurrentTab(idx)} className='self-baseline transition-all duration-500 text-gray-400 text-[24px] py-2'>{text}</button>;
  
  return (
    <div className='flex align-end gap-4 py-2 text-white h-[80px]'>
      {tabs.map((tab, idx) => <Tab text={tab} choosen={idx == currentTab} idx={idx} key={idx} />)}
    </div>
  );
}

const CalendarBlock = () => {
  const [filterList, setFilterList] = useState({});
  const [currentTab, setCurrentTab] = useState(0);
  const [coords, setCoords] = useState<FairPoint[]>([]);
  const [monthData, setMonthData] = useState({
    monthTitle: 'Februar',
    year: 2025,
    daysInMonth: 28,
    startPadding: 5,
    today: 27
  });
  // const filteredList = Object.keys(filterList).filter((_, idx) => Object.values(filterList)[idx]).join(", ");

  useEffect(() => {
    setFilterList({
      'Všetky': true,
      'Detské': false,
      'Kultúrne': false,
      'Športové': true,
      'Zábavné': false
    });
  }, []);

  return (
    <div className='w-full flex gap-5'>
      <div className='h-[400px] w-[500px] flex flex-col gap-5'>
        <Tabs tabs={['kalendar', 'mapa', 'den']} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <MiniCalendar
          setMonthData={setMonthData}
          events={events}
          monthData={monthData}
        />
        <FilterList filterList={filterList} setFilterList={setFilterList} />
        {/* <p>{filteredList}</p> */}
      </div>
      <div className='w-full'>
        {currentTab == 0 && <Calendar
          setMonthData={setMonthData}
          events={events}
          monthData={monthData}
        />}
        {currentTab == 1 && <GalantaMap coords={coords} setCoords={setCoords}/>}
        {currentTab == 2 && <DayCalendar
          events={events}
          monthData={monthData}
          weekToShow={2}
        />}
      </div>
    </div>
  );
}

export default CalendarBlock;
