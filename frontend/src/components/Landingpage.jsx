import React from 'react'

function Landingpage() {
  return (
    <div className='relative flex items-center justify-center'>
        <div>
        <img className=" h-[90] w-screen" src="https://www.globalgovernanceinitiative.org/mba.jpeg" alt="" />
        </div>
        
        <div className='absolute bottom-20  border-8 bg-zinc-800 bg-opacity-75 p-5'>
        <h1 className='font-bold text-center text-3xl text-white'> Learn Business Skills Live, </h1>
        <h1 className='font-bold text-center text-3xl text-white border-white'> Join Global Network to Become a Business Leader </h1>
        </div>

        
    </div>
  )
}

export default Landingpage