import React from 'react'
import { accomodations } from '../../data'
import {Link} from 'react-router-dom'
import './rooms.css'

function Rooms() {
 
  return (
    <div className='rooms'>
      <div className='container flex flex-col items-center  justify-center'>
          {accomodations.map((d) => {
        return   <div className='room  flex  flex-col items-center justify-center'>
        <h1 className='text-orange-400 text-xl font-bold'>{d.title}</h1>
          <div className='room-details flex-wrap flex justify-center '>
          <div className='roomImg'>
          <img src={d.img1} alt=''/>
          </div>
          <div className='details p-4 flex flex-col  justify-center'>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p1}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p2}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p3}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i>{d.p4}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p5}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p6}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p7}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p8}</p>
            <p className="pb-4" > <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {d.p9}</p>
          <Link to={`/booking/${d.id}`}> <button className='bg-teal-600 self-center py-2 px-4 self-center text-white font-medium text-2xl rounded-md hover:bg-teal-700'><i class="fa-solid fa-receipt"></i> Book Room</button></Link>  
          </div>
           <div className='roomImg'>
          <img src={d.img2} alt=''/>
          </div>
          </div>
          </div>
          })
          }
        {/*End of room 3 */}
      </div>
      
    </div>
  )
}

export default Rooms