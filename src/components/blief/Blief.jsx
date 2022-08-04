import React from 'react'
import {Link} from 'react-router-dom'
import './blief.css'

function Blief() {
  return (
    <div className='blief flex items-center justify-center mt-3'>
    <div className='container flex flex-col justify-center items-center md:flex-row'>
        <div className='b-left px-2 text-center flex flex-col mt-7 justify-center items-center md:w-2/4'>
            <h1 className='text-2xl text-center text-white font-bold'>STAY AT RELAX HOTEL IN NAKURU</h1>
            <p className='text-white text-center text-xl font-medium text-orange-300'>Comfort & Convenience</p>
            <p className='text-white text-center'>Eka Hotel rooms are designed to provide the highest levels of Comfort, Convenience and Efficiency, supported by the latest in technology. The hotel boasts of 85 well-appointed and air-conditioned rooms;
            a presidential suite, executive suite, business suites and superior rooms.
            The room amenities include; TV with DSTV connection, complimentary high speed Wi-fi, minibar, safety deposit box, coffee/tea making facilities, direct-dial international telephone, hair dryers and Iron/Ironing boards on request, bathroom with toiletries.</p>
            <p className='font-bold text-center text-xl text-white'>A BETTER HOME FAR AWAY FROM HOME!</p>
           <Link to='/accomodation'> <button className='py-2 px-2 bg-transparent rounded-md border-2 mt-2 text-white'>Book your stay</button> </Link> 
        </div>
        <div className='b-right flex items-center justify-center md:w-2/4'>
          <img className='h-400 ml-11' src={require('../../assets/sofa22.png')} alt=''/>
        </div>
    </div>
  
    </div>
  )
}

export default Blief