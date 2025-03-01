// import Bell from '/bell.svg?react';
import Image from 'next/image';
import React from 'react';

const EventInfo = () => {
  return (
    <div className='ml-2 shadow-xl shadow-black/35 relative rounded-[10px] w-[500px] text-left'>
      <div className='bg-blue-600 w-full h-[100px] rounded-[10px_10px_0_0]'></div>
      <div className='bg-[var(--lapis-lazuli)] size-8 flex items-center cursor-pointer justify-center rounded-[6px] absolute right-3 top-3'>
        <Image src='/info.svg' width={20} height={20} alt='info'/>
      </div>
      <div className="py-6 px-8 bg-[var(--vista-blue)] rounded-[0_0_10px_10px] w-[500px] flex flex-col gap-2">
        <div className='flex gap-3 w-full'>
          <div className='size-4 bg-[var(--lapis-lazuli)] rounded-[4px] mt-[10px] mx-1'></div>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-[24px]'>Hackathon Galanta</h1>
            <p className='flex items-center gap-2'>Thursday, February 27 <span className='rounded-full size-1 bg-black inline-block'></span> 10:00 - 11:00</p>
          </div>
        </div>
        <div className='flex gap-3 w-full'>
          <Image src='/location.svg' width={24} height={24} alt='location'/>
          <div className='flex flex-col'>
            <p>Location: Galanta, center</p>
            {/* <p>Address: 1234 Fake St.</p> */}
          </div>
        </div>
        <div className='flex gap-3 w-full'>
          <Image src='/price.svg' width={24} height={24} alt='price'/>
          <p>Price: 10€</p>
        </div>
        <div className='flex w-full gap-[6px] bg-[var(--lapis-lazuli)] rounded-[6px] text-white px-5 py-2 justify-center items-center mt-3 cursor-pointer'>
          <Image src='/bell.svg' width={24} height={24} alt='attend'/>
          <div>Attend</div>
        </div>
        <div className='flex gap-1'>
          <div className='flex w-full gap-[6px] bg-[var(--lapis-lazuli)] rounded-[6px] text-white px-5 py-2 justify-center items-center cursor-pointer'>
            <Image src='/ticket.svg' width={24} height={24} alt='attend'/>
            <div>Buy ticket</div>
          </div>
          <div className='flex w-full gap-[6px] bg-[var(--lapis-lazuli)] rounded-[6px] text-white px-5 py-2 justify-center items-center cursor-pointer'>
            <Image src='/email.svg' width={24} height={24} alt='attend'/>
            <div>Ask question</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
