import React from 'react'
import Stepper from '../stepper/Stepper'
import './heroaccomodation.css'

function HeroAccomodation() {
  const [show, setShow] = React.useState(false)

  const openModel = () => {
    setShow(true)
  }
  return (
   
    <div className='accomodation flex items-center justify-center '>
     {show && (
     <div className='show-Reg'>
     <div onClick={() => setShow(false)} className='mb-7 text-white cursor-pointer'><i class="fa-solid fa-circle-xmark fa-2x"></i></div>
     <div className='details-holder'>
      <h3 className='text-2xl font-bold h3' >Fill in your details</h3>
      <input className='input-fields' type='text' placeholder='Enter Name'/>
      <input className='input-fields' type='text' placeholder='Enter Email'/>
      <input className='input-fields' type='text' placeholder='Enter Phone Number'/>
       <button onClick={() =>setShow(false)} className='bg-white reg-btn self-center mt-7 mx-2 px-7 py-3 text-md rounded-md bg-orange-400  text-white '>Register now</button>
      </div>
     </div>)
     }
     <div className='accod-detail-holder flex flex-col justify-center items-center py-10 px-3 rounded-md'>
         <h1 className=' text-2xl font-bold underline text-orange-400'>OUR ROOMS</h1>
         <p className='text-white text-center text-lg'>The hotel has 167 air conditioned rooms, of these 158 are Superior rooms, 2 rooms for guests with special needs, 4 Junior suites and 3 Executive suites. The Superior rooms are fitted with either a double bed or twin beds. Guests staying in the hotel have exclusive access to Wi-fi, the gym and swimming</p>
         <div className='hide-option'>
         <p className='text-orange-400 text-center font-semibold text-xl uppercase underline mt-5 '>Register to become a member and get exclusive offers</p>
         
         </div>
         <button onClick = {() =>openModel()} className='bg-white self-center mt-7 mx-2 px-7 py-3 text-md rounded-md bg-orange-400  text-white '>Register to become a member</button>
     </div>
     
    </div>
  )
}

export default HeroAccomodation