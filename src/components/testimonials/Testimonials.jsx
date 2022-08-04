import React from 'react'
import './testimonials.css'

function Testimonials() {
  return (
    <div className='testimonials py-6 flex items-center justify-center'>
        <div className='container flex flex-wrap justify-around items-center'>
            <div className='t-container px-3 flex flex-wrap flex-col justify-center items-center'>
                <div className='t-image'>
                    <img src={require('../../assets/man.jfif')} alt=''/>
                </div>
                <p className='text-slate-400 font-medium text-2xl'>FRANCIS OKOTH</p>
                <p className='text-orange-400'><b>From:</b> Nairobi</p>
                <p className='text-center text-slate-400 font-medium'><i class="fa-solid fa-quote-left"></i> I'll never forget the nights spent at relax hotel. The place was awesom with professional services being offered. Tidy and clear room from the start.I rank Relax hotel the best. <i class="fa-solid fa-quote-right"></i></p>
            </div>

             <div className='t-container px-3 flex flex-col justify-center items-center'>
                <div className='t-image'>
                    <img src={require('../../assets/manager.jpg')} alt=''/>
                </div>
                <p className='text-slate-400 font-medium text-2xl'>PETER KUTO</p>
                <p className='text-orange-400'><b>From:</b> Kitale</p>
                 <p className='text-center text-slate-400 font-medium'><i class="fa-solid fa-quote-left"></i>It from saturday to Friday I when I was on a vacation with my Family. A friend recommended me to Relax Hotel after which I made up my mind to spend My one week Vaccation there. Indeed relax Hotel is one of the very best. <i class="fa-solid fa-quote-right"></i></p>
            </div>

             <div className='t-container px-3 flex flex-col justify-center items-center'>
                <div className='t-image'>
                    <img src={require('../../assets/woman1.jfif')} alt=''/>
                </div>
                <p className='text-slate-400 font-medium text-2xl'>JANET NJOKI</p>
                <p className='text-orange-400'><b>From:</b> Nakuru</p>
                <p className='text-center text-slate-400 font-medium'><i class="fa-solid fa-quote-left"></i> I think birthday will always remain Jubiliant as long as they are being held in Relax Hotel. I mean It is an awesome place for such jovial events and bonding event <i class="fa-solid fa-quote-right"></i></p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials