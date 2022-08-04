import React from 'react'
import './meetinghero.css'

function MeetingHero() {
  return (
    <div className='meetingHero flex items-center justify-center'>
       <div className='w-10/12 md:w-2/5 h-80 bg-white rounded-md  flex flex-col justify-around items-center'>
        <p className='text-2xl text-orange-500 font-semibold' >Conference | Meetings |Events</p>
        <p className='text-center text-stone-400 text-lg'> We value the confort of our guest. The rooms are always arraged in the most convinient manner</p>
        <p className='text-center text-stone-400 text-lg'>Email: relaxhotel@gmail.com | Phone: +2547 6358 9614 </p>
        <div className='social'>
            <i class="fa-brands fa-facebook text-stone-400 text-2xl cursor-pointer"></i>
            <i class="fa-brands fa-instagram-square text-stone-400 text-2xl cursor-pointer"></i> 
            <i class="fa-brands fa-twitter-square text-stone-400 text-2xl cursor-pointer"></i>   
            <i class="fa-brands fa-linkedin text-stone-400 text-2xl cursor-pointer"></i>        
        </div>
       </div>
    </div>
  )
}

export default MeetingHero