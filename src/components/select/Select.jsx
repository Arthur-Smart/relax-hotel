import React from 'react'
import './select.css'
import {Link} from 'react-router-dom'

function Select() {
  return (
    <div className='select-contain h-10 -mt-7 flex items-center justify-center '>
        <div className='container bg-white   flex  flex-wrap border-2 items-center justify-around rounded-md py-7 border-sky-700 '>
          <div className='flex items-center  text-slate-500 mb-3' >
            <i class="fa-solid fa-bed mr-2 "></i>
            <p>Better accomodations</p>
          </div>
          <div className='flex items-center text-slate-500 mb-3'>
            <i class="fa-solid fa-apple-whole  mr-2"></i>
            <p>Safe food</p>
          </div>
          <div className='flex items-center text-slate-500 mb-3'>
            <i class="fa-solid fa-wifi  mr-2"></i>
            <p>Fast WI-FI</p>
          </div>
          <div className='flex items-center text-slate-500 mb-3'>
            <i class="fa-solid fa-person-swimming"></i>
            <p>Recreational activities</p>
          </div>
          <div className='flex items-center'>
           <Link to='/accomodation'> <button className='rounded-md bg-orange-500 px-5 py-2 text-white font-normal hover:bg-orange-400'>View Rooms</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Select