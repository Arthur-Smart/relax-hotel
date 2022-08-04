import React from 'react'
import PrepDialog from '../prepDialog/PrepDialog'
import './dinningprep.css'

function DinningPrep() {
  return (
    <div className='dinning-prep flex items-center justify-center'>
        <div className='container flex flex-col items-center justify-center'>
          <p className='text-white text-center font-bold text-3xl uppercase'>Reserve  a table</p>
          <p className='text-white text-center text-base text-lg'>We are here to make your dinning experience a day worth a recap. Please contact us with your requirements and we will be happy to serve you</p>
        <PrepDialog/>
        </div>
    </div>
  )
}

export default DinningPrep