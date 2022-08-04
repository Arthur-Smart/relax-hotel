import React from 'react'
import './dinningcontainer.css'
import Video from '../../assets/coolVideo.mkv'

function DinningContainer() {
  return (
    <div className='dinning flex items-center justify-center'>
      <div className='video-container'>
        <video className='video' autoplay  loop >
            <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <div className='dinning flex items-center px-7 justify-center flex-col'>
        <p className='text-white text-center text-3xl font-bold underline'>Dinning and Drinking</p>
        <p className='text-white text-center text-l mt-3 mb-3'>Accomodation is not sweet without something to eat or drink. That's why we bring your stay to a point satiety will any drinks you want and cool meals.</p>
      
        <button className='px-4 py-2 border-2 text-white rounded-md border-white '>Get our whole menu</button>
    
        
      </div>
    </div>
  )
}

export default DinningContainer