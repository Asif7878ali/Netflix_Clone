import React from 'react'

const AskQuestion = () => {
  return (
    <>
     <div className="gray-border">
    <div className="text-white max-w-[1100px] mx-auto py-[70px]">
      <h1 className="text-5xl w-full text-center mb-16">Frequently Asked Questions</h1>
      <div className="md:w-[75%] w-full mx-auto">
        <div className="text-2xl bg-gray-800 pl-6 h-14 pt-3">
          <p className="">What is Netflix?</p>

        </div>
        <div className="text-2xl bg-gray-800 mt-2 pl-6 h-14 pt-3">
          <p className="">How much does Netflix cost?</p>
          
        </div>
        <div className="text-2xl bg-gray-800  mt-2 pl-6 h-14 pt-3">
          <p className="list-item-title">Where can I watch?</p>
          
        </div>
        <div className="text-2xl bg-gray-800  mt-2 pl-6 h-14 pt-3">
          <p className="list-item-title">How do I cancel?</p>
         
        </div>
        <div className="text-2xl bg-gray-800  mt-2 pl-6 h-14 pt-3">
          <p className="list-item-title">What can I watch on Netflix?</p>
         
        </div>
        <div className="text-2xl bg-gray-800  mt-2 pl-6 h-14 pt-3">
          <p className="list-item-title">Is Netflix good for Kids?</p>
         
        </div>

      </div>

      <p className="text-[1.2rem] text-center mt-20 mb-4 font-light">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] mx-auto items-center md:items-stretch justify-center">
        <input type="text" placeholder="Email address" className="md:w-[60%] w-full px-[10px] py-2 md:py-4 bg-white placeholder:text-sm"/>
        <button className="bg-red-600 rounded-md pl-1">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  </div>
         
    </>
  )
}

export default AskQuestion