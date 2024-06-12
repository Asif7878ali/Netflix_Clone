import React from 'react';
import netfliclogo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
         <div className='text-red-600 cursor-pointer font-bold text-4xl'>
            <img src={netfliclogo} className='h-10' alt="Netflix" />
          </div>
        <div>
        <select name="" id="" className='bg-gray-950 border-[1px] border-gray-300 text-white md:h-10 md:w-24'>
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <Link to='/signup'>
            <button className='bg-red-600 px-2 py-2 rounded text-white cursor-pointer ml-7'>Sign up</button>
          </Link>
         
        </div>
     </div>
  );
}

export default Navbar;

