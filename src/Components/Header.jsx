import React from 'react'

const Header = () => {
  return (
    <>
       <div className="gray-border">
        <div className="flex md:flex-row flex-col text-white justify-between py-16 md:gap-[30px] max-w-[1100px] mx-auto items-center">
          <div className="md:w-[52%] w-full text-center md:text-left">
            <h1 className="text-5xl pb-3">Enjoy on your TV.</h1>
            <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="relative md:w-[48%] w-full">
            <img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
            <video className="absolute top-[48%] max-h-[54%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2" data-uia="our-story-card-video" autoPlay playsInline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>


      <div className="gray-border">
    <div className="flex flex-col-reverse md:flex-row py-16 md:py-0 text-white justify-between md:gap-[100px] max-w-[1300px] mx-auto w-full items-center md:pb-[40px]">
      <div className="relative w-full md:w-[48%]">
       
        <img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
        <div className="flex items-center w-[70%] md:w-[60%] border-2 border-gray-700 justify-between gap-3 md:py-[0.5rem] py-[0.25rem] px-[0.5rem] md:px-[0.75rem] rounded-xl absolute left-[50%] bottom-[4%] -translate-x-1/2 bg-black">
        
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className="md:h-[4.5rem] h-[3rem]"/>
          <div className="text-left">
            <div className="md:text-base text-[0.9rem]">Stranger Things</div>
            <div className="md:text-base text-[0.75rem] text-[#0071eb]">Downloading...</div>
          </div>
          <img className="h-[3rem] w-[3rem]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt=""/>
        </div>
      </div>
      <div className="md:w-[52%] w-full text-center md:text-left">
        <h1 className="text-5xl pb-3">Download your shows to watch offline.</h1>
        <p className="subtitle">Save your favorites easily and always have something to watch.</p>
      </div>
    </div>
  </div>


  <div className="gray-border">
    <div className="flex flex-col md:flex-row text-white justify-between gap-[30px] max-w-[1100px] mx-auto items-center py-[70px]">
      <div className="md:w-[52%] w-full text-center md:text-left">
        <h1 className="text-5xl pb-3">Watch everywhere.</h1>
        <p className="subtitle md:px-0 px-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="relative md:block hidden w-[48%]">
      </div>
    </div>
  </div>

  <div className="gray-border">
    <div className="flex md:flex-row flex-col-reverse text-white justify-between gap-[100px] max-w-[1200px] mx-auto w-full items-center py-[30px]">
      <div className="relative md:w-[48%] w-full">
        <img className="w-full h-full" src="https://occ-0-2477-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt=""/>
      </div>
      <div className="md:w-[52%] w-full text-center md:text-left">
        <h1 className="text-5xl pb-3">Create profiles for kids.</h1>
        <p className="subtitle md:px-0 md:pr-20 px-5">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
      </div>
    </div>
  </div>
          
    </>
  )
}

export default Header