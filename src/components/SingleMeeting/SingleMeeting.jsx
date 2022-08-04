import React from 'react'
import { meetings } from '../../data'
import HoverRating from '../rating/HoverRating'
import './singlemeeting.css'

function SingleMeeting() {
  return (
    <>
    {
      meetings.map((meeting) =>{
        return <div className='singleMeeting rounded-md'>
       <img className='singleMeetingImg' src={meeting.img} alt=''/>
       <p className='text-xl text-stone-500 font-bold uppercase'>{meeting.title}</p>
       <p className='text-lg text-stone-500'>{meeting.desc}</p>

    </div>
      })
    }
    </>
  )
}

export default SingleMeeting