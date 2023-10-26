import React from 'react'

export default function Vedio() {
  return (
 
 <div className="video relative overflow-hidden">
    <div className="bg-[#00000099] absolute start-0 end-0 top-0 bottom-0"></div>
      <video autoPlay  muted loop >
        <source src={require('../Video/awesome-video.mp4')} type="video/mp4"/>
      </video>
      <div class="text absolute bg-[#0f748fb3] p-[50px] text-white w-full top-1/2 translate-y-[-50%] text-center">
        <h2 className='text-[18px] uppercase mb-3 md:mb-7 lg:mb-7 md:text-[24px] lg:text-[24px]'>Super Awesome Video Here</h2>
        <p className='text-[16px] mb-7'>Its All You Need</p>
        <button className='bg-black  py-[10px] px-[20px]'>See More</button>
      </div>
    </div>

  )
}
