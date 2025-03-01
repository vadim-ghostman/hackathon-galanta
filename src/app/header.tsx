'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/base';
import Link from 'next/link';

const Lang = ({ languageMenuShow, setLanguageMenuShow, languageRounded }: { languageMenuShow: boolean, setLanguageMenuShow: (v: boolean) => void, languageRounded: string }) => {
  return (
    <div
      className={`flex items-start justify-between gap-2 bg-[var(--vista-blue)] text-white px-5 py-2 ${languageRounded} relative`}
      onMouseEnter={() => setLanguageMenuShow(true)}
      onMouseLeave={() => setLanguageMenuShow(false)}
    >
      <Image src='/lang.svg' width={24} height={24} alt='lang' />
      <p>sk</p>
      <div
        className={`transition-opacity flex flex-col gap-1 absolute top-10 right-0 bg-[var(--vista-blue)] text-white rounded-[0_0_20px_20px] px-5 w-full items-end pb-2 overflow-hidden ${languageMenuShow ? '' : 'opacity-0'}`}
      >
        <p className='cursor-pointer'>en</p>
        <p className='cursor-pointer'>hu</p>
      </div>
      {/* {languageMenuShow && (
        <div className='absolute top-10 right-0 bg-[var(--tan)] rounded-[20px] p-2'>
          <p className='text-right px-5'>sk</p>
          <p className='text-right px-5'>hu</p>
        </div>
      )} */}
    </div>
  )
}

const User = ({ username, isAdmin }: { username: string, isAdmin: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='w-max relative'>
        <div
          onClick={handleClick}
          className='w-full flex gap-2 items-center px-5 py-2 rounded-[20px] bg-[var(--vista-blue)] text-white'
        >
          <Image src='/user.svg' width={24} height={24} alt='user' />
          <p>{username}</p>
        </div>
        {open ? (
          <div className="absolute right-0 mt-2 z-10">
            {/* <EventInfo /> */}
            <div className='flex flex-col gap-2 bg-[var(--vista-blue)] text-white p-2 pr-5 pl-8 rounded-[20px] text-right text-nowrap shadow-lg shadow-black/45'>
              {isAdmin && <Link href="/createEvent" className='text-[var(--lapis-lazuli)] font-bold'>Vytvorit podujatie</Link>}
              <Link href="/myEvents">Moje podujatia</Link>
              <Link href="/signout">Odhlasiť</Link>
            </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}

const Header = ({ withLang = true }: { withLang?: boolean }) => {
  const [languageMenuShow, setLanguageMenuShow] = useState(false);
  const languageRounded = !languageMenuShow ? 'rounded-[20px]' : 'rounded-[20px_20px_0_0]';

  return (
    <div className='w-full border-b-2 items-center py-[20px] flex px-[100px] justify-between'>
      <div className='flex items-center gap-4'>
        <Image src='/crest.svg' width={37} height={74} alt='cal' className='animate-[vezaDown_4s]'/>
        <div>
          <p className='text-[#707070] font-normal text-2xl animate-[textToRight_2s]'>podujatia</p>
          <p className='text-[var(--galanta-red)] font-bold text-5xl'>Galanta</p>
        </div>
      </div>
      {withLang && <Lang languageMenuShow={languageMenuShow} setLanguageMenuShow={setLanguageMenuShow} languageRounded={languageRounded} />}
      {!withLang && <User username='Janko Hrasko' isAdmin={true} />}
    </div>
  );
}

export const Footer = () => {
  return (
    <div className='w-full h-[70px] bg-[#342C37] items-center px-5 py-[10px]'>
    </div>
  );
}

export default Header;
