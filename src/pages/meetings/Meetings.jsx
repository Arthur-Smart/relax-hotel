import React from 'react'
import MeetingDetails from '../../components/meetingdetails/MeetingDetails'
import MeetingHero from '../../components/meetinghero/MeetingHero'
import MeetingsCarousel from '../../components/meetingsCarousel/MeetingsCarousel'
import Footer from '../../components/footer/Footer'
import './meetings.css'

function Meetings() {
  return (
    <>
    <div className='meetings'>
    <div className='meetings-socket flex items-center justify-center  '>
        <div className='container flex justify-between '>
            <div className='title'>
                <p className = 'text-slate-500 text-2xl font-semibold uppercase mt-4'>Conference & Meeting Rooms</p>
            </div>
            <div className='button'>
                <a href='tel: +254742068914'><button className='bg-orange-400 py-2 px-4 rounded-md mt-3 text-white text-lg'>Call for Reservations</button></a>
            </div>
        </div>
    </div>
    <MeetingHero/>
    <MeetingsCarousel/>
    <MeetingDetails/>
    <Footer/>
    </div>
    </>
  )
}

export default Meetings