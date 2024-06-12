import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="gray-border">
    <div className="max-w-[1000px] text-[#737373] py-[70px] px-5 md:px-[45px] w-[90%] mx-auto">
      <h2 className="pb-5">Questions? Contact Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 text-[12px] md:text-[13px]">
        <div>
          <div className="footer-item">FAQ</div>
          <div className="footer-item">Investor Relations</div>
          <div className="footer-item">Privacy</div>
          <div className="footer-item">Speed Test</div>
        </div>
        <div>
          <div className="footer-item">Help Center</div>
          <div className="footer-item">Jobs</div>
          <div className="footer-item">Cookie Preferences</div>
          <div className="footer-item">Legal Notices</div>
        </div>
        <div>
          <div className="footer-item">Account</div>
          <div className="footer-item">Ways to Watch</div>
          <div className="footer-item">Corporate Information</div>
          <div className="footer-item">Only on Netflix</div>
        </div>
        <div>
          <div className="footer-item">Media Center</div>
          <div className="footer-item">Terms of use</div>
          <div className="footer-item">Contact Us</div>
        </div>
      </div>
      <h2 className="pt-5 text-[12px] md:text-[13px]">Netflix India</h2>
    </div>
  </footer>


    </>
  )
}

export default Footer