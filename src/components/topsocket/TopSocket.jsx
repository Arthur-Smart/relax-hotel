import React from 'react'
import './topsocket.css'

const TopSocket = () => {
  return (
    <div className='socket-container  bg-cyan-600 w-100 flex justify-center '>
        <div className='container  flex break justify-between w-60% h-5px '>
            <div><p className='text-white'><i class="fa-solid fa-envelope-circle-check"></i> @smartfood@gmail.com</p></div>
            <div > <p className='text-white'><i class="fa-solid fa-phone"></i> 0742068914 | 0737725951 | 0707071004 </p></div>
        </div>
    </div>
  )
}

export default TopSocket