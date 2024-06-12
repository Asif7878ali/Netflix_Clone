import React, { useEffect, useState } from 'react';
import requests from '../Request';
import axios from 'axios'

const Imageback = () => {
    const[movies,setmovies]= useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
          axios.get(requests.requestPopular).then((response)=>{
               setmovies(response.data.results)
          }
          )
    },[])
   // console.log(movie)
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='w-full absolute h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

            <div className='absolute w-full top-[20%] p-5 md:p-8'>
                <h1 className='text-4xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='border bg-gray-200 text-black border-gray-300 py-2 px-5 mr-4 rounded-md'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5 rounded-md'>Watch later</button>
            </div>
            <p className='text-gray-300 text-sm'>Release: {movie?.release_date}</p>
            <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{movie?.overview}</p>
            </div>


        </div>
      
    </div>
  );
}

export default Imageback;
