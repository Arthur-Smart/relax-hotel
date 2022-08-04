import React from 'react'
import { galleryItems } from '../../data'
import './showCase.css'

function ShowCase() {
  return (
    <div className='showCase flex flex-col items-center justify-center my-5  ' id='place'>
    <p className="text-2xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">A PLACE OF ULTIMATE ENJOYMENT</p>
      <div className='container flex flex-wrap items-center justify-center gap-4 mt-3'>
      {galleryItems.map((item) => {
          return <div className='s-container rounded-md '>
          <div className='i-container'>
              <img src={item.img} alt=''/>
          </div>
              <div className=' line bg-amber-600'></div>
              <div className='bottom px-3'>
                  <p className='font-bold text-orange-600 text-lg'>{item.title}</p>
                  <p className='text-stone-400'>{item.desc}</p>
                  <p className='font-bold text-stone-400 text-lg' >{item.count}</p>
                  </div>
          </div>
          
      })}
          
{/*End of showcase*/}
        </div>
    </div>
  )
}

export default ShowCase