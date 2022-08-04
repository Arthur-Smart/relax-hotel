import React from 'react'
import {Link} from 'react-router-dom'
import './services.css'

function Services() {
  return (
    <div className='services flex items-center justify-center'>
      <div className='container flex items-center justify-center flex-wrap mt-10 gap-4'>
       <div className='service container rounded-lg cursor-pointer'>
          <img className='service-img' src={require('../../assets/change-1.jpg')} alt=''/>
              <Link to='accomodation'><div className='texts'>
                  <h1 className='text-white underline ml-4 text-2xl font-medium'>OUR BEDROOMS</h1>
                  <p className='text-white ml-4'>Spend your night comfortably with your alone or family. Delux | Standard | Double-Desc roooms available</p>
              </div> </Link>   
          </div>

      <div className='service container rounded-lg cursor-pointer'>
              <img className='service-img' src={require('../../assets/change-3.jpg')} alt=''/>
               <Link to='meetings'><div className='texts'>
                  <h1 className='text-white underline ml-4 text-2xl font-medium'>CONFERENCE ROOMS</h1>
                  <p className='text-white ml-4'>Hold all your meetings at ease. Well airrated conference halls with good chair and table preparations</p>
              </div></Link> 
          </div>  

          <div className='service container rounded-lg cursor-pointer'>
              <img className='service-img' src={require('../../assets/img1.jpg')} alt=''/>
             <Link to='dinning'> <div className='texts'>
                  <h1 className='text-white underline ml-4 text-2xl font-medium'>DINNING ZONE</h1>
                  <p className='text-white ml-4'>Well prepared food | professional hospitality services | Discounted cost. We give award winning services to all our clients.</p>
              </div></Link>
          </div>

          <div className='service container rounded-lg cursor-pointer'>
              <img className='service-img' src={require('../../assets/bg-main.jpg')} alt=''/>
              <div className='texts'>
                  <h1 className='text-white underline ml-4 text-2xl font-medium'>GALLERY</h1>
                  <p className='text-white ml-4'>Unending browsing with our free WI-FI. Fast and reliable. A set of Televion screen in the room and a hot shower.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Services