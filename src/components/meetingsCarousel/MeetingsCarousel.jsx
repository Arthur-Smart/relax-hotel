import React from 'react'
import SingleMeeting from '../SingleMeeting/SingleMeeting'
import './meetingscarousel.css'

function MeetingsCarousel() {
  return (
    <div className='meetingsCarousel flex flex-col items-center justify-center '>
    <div className='container flex items-center justify-center gap-5 flex-wrap mt-4'>
        <SingleMeeting/>
        
    </div>
    <p className='mt-7 text-2xl font-semibold text-orange-500 uppercase ' >Hold your mettings at ease</p>
    <div className='container cont-main-item flex mt-10'>
        <div className='w-1/2 room-image'>
            <img src={require('../../assets/con6.jpg')} alt=''/>
        </div>
        <div className='w-1/2 text-cont p-4'>
            <p className=' text-lg text-stone-500 '>We offer a wide selection of conference venues, seminar options, and workshop ideas with a complete business support service and an integrated conference planning and management team.

Kunste has the largest conferences and events venue in Nakuru county, each with pre-function space and break-out areas. All our meeting rooms have free high speed wireless internet (WiFi).

Our conference package is custom-made to meet the needs of the participants.

Our conference package is custom-made to meet the needs of the participants.Please book now to enjoy our special rates

Other Details
Conference Package Kshs 3,000/= per person
Half Day Conference Kshs 1,800/= per person
Syndicate Room Kshs 5,000/= per day
Conference Hall Kshs 20,000 /=per day
Carpeted Hall Kshs 35,000/= per day
Banquet Hall Kshs 50,000/= per day</p>
        </div>
    </div>


    </div>
  )
}

export default MeetingsCarousel