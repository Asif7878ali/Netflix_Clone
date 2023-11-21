import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const Row = ({ title , fetchURL, rowID , arr= [] } ) => {

  const [films, setfilms]=useState([])
  

  useEffect(()=> {
       axios.get(fetchURL).then((response) => {
         if (response && response.data && response.data.results) {
           setfilms(response.data.results);
         }
       } )
  },[fetchURL])

  console.log(films)

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };



  return (
    <>
         <h1 className='text-white font-bold md:text-xl p-4'> {title}</h1>

         <div className='relative flex items-center group'>
   
         <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
             <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll scroll-smooth relative whitespace-nowrap scrollbar-hide'>
                  {films && films.length > 0 && (
                    films.map((item, id) =>(
                      <div className='inline-block cursor-pointer relative p-2  w-[160px] sm:-w-[200px] md:-w-[240px] lg:-w-[280px]'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                         {/* hower effect  */}
                            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full'>{item?.title}</p>

                            </div>
                      </div>
                    ))
                  )}
             </div>
             <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
         </div>
    </>
  );
}

export default Row;
