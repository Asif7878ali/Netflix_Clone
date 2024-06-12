import React from 'react'

const Home = () => {
  return (
    <>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/14db4679-e946-46ab-a96a-9285864a1422/LK-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg')] md:h-[95vh] h-[70vh] bg-cover bg-center relative">


        <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"></div>



        <div className="relative z-10 flex flex-col text-center px-5 justify-center items-center w-full md:w-[85%] max-w-[800px] text-white h-full mx-auto gap-3">
          <h1 className="text-5xl max-w-screen-sm">Unlimited Movies, TV shows and more</h1>
          <p className="text-3xl md:py-[12px]">Watch anywhere. Cancel anytime.</p>
          <p className="md:text-[1.2rem] font-light">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-stretch">
            <input type="text" placeholder="Email address" className="md:w-[60%] w-full px-[10px] py-2 md:py-4 bg-white placeholder:text-sm" />
            <button className="bg-red-700 rounded-md ml-1 md:w-32">
              <span>Get Started</span>

            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home