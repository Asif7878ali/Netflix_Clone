import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
     <h1 className='text-red-600 cursor-pointer font-bold text-4xl'>NETFLIX</h1>
       <div>
          <button className='border text-white border-gray-300 py-2 px-5 rounded'>Sign In</button>
          <button className=' bg-red-600 px-2 py-2 rounded text-white cursor-pointer ml-7'>Sign up</button>
       </div>
</div>
  );
}

export default Navbar;

