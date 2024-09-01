import React from 'react';

function Navbar() {

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight/2.5,
      behavior: 'smooth'
    });
  };

  return (
    <div className='Header fixed z-[999] w-full px-20 py-5 flex justify-between items-center bg-white'>
      <img src="https://www.globalgovernanceinitiative.org/_next/image?url=%2Flogo.jpg&w=384&q=75" alt="" />
      
      <a className='uppercase text-[#be0300] font-semibold' href="https://www.globalgovernanceinitiative.org/ggi-scholars">Management</a>
      <a className='uppercase text-[#be0300] font-semibold' href="https://www.globalgovernanceinitiative.org/ggipolicyscholarsprogram">Policy</a>
      <a className='uppercase text-[#be0300] font-semibold' href="https://www.globalgovernanceinitiative.org/impact-fellowship">Fellowship</a>
      <a className='uppercase text-[#be0300] font-semibold' href="https://www.globalgovernanceinitiative.org/reviews">Employment Report</a>
      <button onClick={scrollToBottom} className='bg-[#be0300] text-white uppercase border-2 p-2 rounded-xl'>
        Apply Now
      </button>
    </div>
  );
}

export default Navbar;
