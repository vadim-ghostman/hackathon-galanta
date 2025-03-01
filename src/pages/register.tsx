import Header from '@/app/header';
import React from 'react';
import '@/app/globals.css';
import Input from '@/components/input';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='font-poppins'>
      <div className="items-center min-h-screen flex flex-col justify-between">
        <Header />
        <div className="px-[100px] w-full bg-[var(--eerie-black)] bg-opacity-10 flex items-center justify-center flex-1">
          <div className='w-[800px] h-[500px] bg-white shadow-black/55 shadow-lg rounded-[20px] flex flex-col items-center justify-center gap-8'>
            <h1 className='text-[48px] font-bold text-[var(--galanta-red)]'>Register</h1>
            <div className='flex flex-col gap-3'>
              <Input type='text' placeholder='GalaKarta alebo email'/>
              <Input type='password' placeholder='Heslo'/>
            </div>
            <button className='bg-[var(--galanta-red)] text-white text-[20px] px-10 py-1 rounded-[10px] hover:shadow-lg hover:shadow-black/45 transition-shadow duration-200'>podtvrdit</button>
            <p className='text-gray-700'>uz mate ucet? <Link href='/login' className='text-[var(--galanta-red)]'>prihlasit sa</Link></p>
          </div>
        </div>
        {/* <EventInfo /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Register;
