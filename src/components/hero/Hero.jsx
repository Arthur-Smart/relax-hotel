import React from 'react'
import {Link} from 'react-router-dom'
import './hero.css'

function Hero() {
  return (
    <div className='hero--container flex px-2 items-center'>
       <div className='container w-50% justify-start'>
           <h1 className='text-3xl md:text-5xl font-bold text-white'>ENJOY YOUR VACATION !</h1>
           <p className='text-2xl text-white'>In our cool Luxurious hotels</p>
           <p className='mt-7 font-sans text-white text-base'> We offer the best accomodation facilities and Professional hospitality services. <br></br>
           Our room are well served with all necessary ammenities to keep you happy
           </p>
           <div className='flex'>
           <a href='#place'><button className=' mt-7 px-7 py-3 text-md rounded-md bg-transparent border-2 text-white hover:bg-white hover:text-black'>Discover</button></a>
          <Link to='/dinning'> <button className='bg-white mt-7 mx-2 px-7 py-3 text-md rounded-md bg-orange-400  text-white ' >View Menu</button></Link>
           </div>
       </div>
    </div>
  )
}

export default Hero