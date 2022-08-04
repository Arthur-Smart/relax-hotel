import React from 'react'
import './meetingdetails.css'

function MeetingDetails() {
  return (
    <div className='meetingDetails flex flex-col items-center justify-center'>
  <p className='text-white text-center text-3xl -mt-7'>Why book a place for your next event with us?</p>
  <div className='container flex flex-wrap items-center justify-center md:justify-between mt-7'>
    <div className='detail'>
        <p className='text-orange-500 text-xl text-center '><i class="fa-solid fa-hand-holding-dollar"></i> Affordability and flexibility</p>
        <p className='text-white text-center mt-2'>We offer our meeting and conference facility at competitive rates without compromising on quality.</p>
    </div>

    <div className='detail'>
        <p className='text-orange-500 text-xl text-center '><i class="fa-solid fa-people-group"></i> Dedicated Team</p>
        <p className='text-white text-center mt-2'>There is always a dedicated banqueting team available for every event/meeting that you will host at Eka Hotel, to ensure a successful function.</p>
    </div>

    <div className='detail'>
        <p className='text-orange-500 text-xl text-center '><i class="fa-solid fa-business-time"></i> Quick preparation</p>
        <p className='text-white text-center mt-2'>We offer our meeting and conference facility at competitive rates without compromising on quality.</p>
    </div>
  </div>
    </div>
  )
}

export default MeetingDetails