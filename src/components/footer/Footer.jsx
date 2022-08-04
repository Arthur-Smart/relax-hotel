import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer flex items-center justify-center flex-col bg-gray-500 pt-2'>
     <div className='container'>
         <div className='top-container flex   w-100 gap-4'>
             <div className='flex-4 '>
                 <p className='text-white font-bold text-2xl uppercase text-orange-400'>Call us</p>
                 <p className='text-white font-normal text-lg mb-4 link '>+2457 894 531 674</p>
                 <p className='text-white font-normal text-lg mb-4 link ' >Email</p>
                 <p className='text-white font-normal text-lg mb-4 link ' >relax@info.com</p>
                 <div className='social text-white font-normal text-lg flex w-100'>
                     <i class="fa-brands fa-facebook-f"></i>
                     <i class="fa-brands fa-twitter"></i>
                     <i class="fa-brands fa-instagram-square"></i>
                 </div>
             </div>
             <div className='flex-4'>
                 <h1 className='text-white font-bold text-2xl uppercase text-orange-400'>ABOUT US</h1>
                 <div className='links'>
                     <p className='text-white font-normal text-lg mb-4 link' >About</p>
                     <p className='text-white font-normal text-lg mb-4 link ' >Packages</p>
                     <p className='text-white font-normal text-lg mb-4 link ' >Gallery</p>
                 </div>
             </div>
             <div className='flex-4'>
                 <h1 className='text-white font-bold text-2xl uppercase text-orange-400'>QUICK LINKS</h1>
                 <div className='links'>
                     <p className='text-white font-normal text-lg mb-4 link ' >Rooms</p>
                     <p className='text-white font-normal text-lg mb-4 link ' >Booking</p>
                     <p className='text-white font-normal text-lg mb-4 link ' >Quotation</p>
                 </div>
             </div>
             <div className='flex-4'>
                 <h1 className='text-white font-bold text-2xl uppercase text-orange-400'>RELAX HOTEL</h1>
                 <div className='links'>
                     <p className='text-white font-normal text-lg mb-4 ' >Relax Hotel, a contemporary style hotel that provides all the comfort, convenience and efficiency to the discerning traveler.</p>
                 </div>
             </div>
         </div>
         <div className='bottom-container w-full flex flex-col justify-center items-center'>
             <p className='text-white font-normal uppercase text-2xl'>Sign to our news letter</p>
             <form className='form   flex flex-col  justify-center items-center'>
                 <input className='footer-input' type='email' placeholder='Enter email e.g relax@gmail.com'/>
                 <button className='footer-btn text-white mt-3   hover:bg-teal-400'>Send</button>
             </form>
         </div>
     </div>
     <div className='socket py-2 px-4  flex flex-col md:flex-row justify-between'>
         <p className='text-white text-center'>Relax Hotel&copy; 2022. All rightis Reserved</p>
         <p className='text-white text-center'>Find a place of refreshment far away from home</p>
     </div>
    </div>
  )
}

export default Footer