import React from 'react'
import './roomimages.css'

const RoomImages = () => {
  return (
    <div className='displayImage flex flex-col items-center justify-center'>
    <div className='container flex flex-col items-center justify-center '>
    <p className='text-orange-500 text-2xl uppercase text-center font-semibold'>A place to dare a visit and worth a recap</p>
    <p className='text-white text-lg text-center'>From our heart lays the drive of Elegance, Satisifacation and Delivery to all our client. You satisifaction is our source of pride</p>
    <p className='text-white text-center'>We have made a legacy from country to country of our affordable | convinient services</p>
    <p className='text-white text-lg font-bold underline text-center'>Follow us. We are social</p>
    <div className='icons flex'>
      <a href='https://web.facebook.com/profile.php?id=100064319250841' target='_blank'><i class="fa-brands fa-facebook text-stone-400 text-2xl cursor-pointer"></i></a>
           <a href='https://www.instagram.com/ngigearthur/ ' target='_blank'><i class="fa-brands fa-instagram-square text-stone-400 text-2xl cursor-pointer"></i></a>
            <a href='https://www.instagram.com/ngigearthur/ '><i class="fa-brands fa-twitter-square text-stone-400 text-2xl cursor-pointer" target='_blank'></i></a>   
           <a href='https://www.linkedin.com/in/arthur-mwangi-7a80761bb/' target='_blank'><i class="fa-brands fa-linkedin text-stone-400 text-2xl cursor-pointer"></i></a> 
    </div>
    </div>
    <a href ='#down' className='move'>
      <i class="fa-solid fa-arrow-down"></i>
    </a>
    
    </div>
  )
}

export default RoomImages