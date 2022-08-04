import React from 'react'
import {Link} from 'react-router-dom'
import { menuItems } from '../../data'


import './menu.css'

function Menu() {
  const [select, setSelect] = React.useState('meals')
  const selectedData =  menuItems.filter((item) =>item.category.includes(select))
  

  return (
    <div className='menu-container flex flex-col w-100 justify-center items-center mt-7 ' id='down'>
   <select className='select py-3 rounded-md border-sky-600 border-2' onChange={(e) => setSelect(e.target.value) }>
       <option value='meals'>Meals</option>
       <option value='drinks'>Drinks</option>
       <option value='appetizers'>Appetizers</option>
       <option value='fruits'>Fruits</option>
   </select>
       <div className='container flex items-center justify-center  gap-4  menu-items mt-2'>
        { selectedData.map((d) => {
          return <div key={d.id} className='item rounded-md drop-shadow-lg '>
           <div className='item-header p-2 flex justify-between'>
             <div className='i-left flex '>
               <h1 className='letter font-bold  text-lg'>{d.title.charAt(0)}</h1>
               <div className='i-detail ml-3'>
                 <p className='text-lg '>{d.title}</p>
                 <p className='text-slate-400'>{d.minute}</p>
               </div>
             </div>
             <div className='i-right cursor-pointer'><i class="fa-solid fa-angle-right"></i></div>
           </div>
          
           <div className='item-image'>
             <img src={d.img} alt=''/>
           </div>
           <div className='item-bottom p-2'>
             <p>{d.desc}</p>
          <Link to={`/order/${d.id}`}> <button className='bg-orange-700 p-2 rounded-md text-white hover:bg-orange-800'>Place order</button></Link>
           </div>       
         </div>
        })
        
        }
{/*End of products */}
       </div>
    </div>
  )
}

export default Menu