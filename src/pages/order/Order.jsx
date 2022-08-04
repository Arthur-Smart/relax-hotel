import React from 'react'
import {useLocation} from 'react-router'
import Footer from '../../components/footer/Footer'
import { menuItems } from '../../data'
import axios from 'axios'
import {saveAs} from 'file-saver'
import './order.css'

const Order = () => {

  
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const liveMenu = menuItems.find((item) => item.id.toString() === path);
 

  const [qty, setQty] = React.useState(1)
  const [file] =React.useState(liveMenu.img)
  const [deliver, setDeliver] = React.useState('')
  const [name, setName] = React.useState('')
  const [invoiceNo, setInvoiceNo] = React.useState('')
  const [showInvoiceBtn, setShowInvoiceBtn] = React.useState(false);
  const title = liveMenu.title
  let total = qty*liveMenu.cost

  

  const handleOrder = async() => {
     const data = new FormData();
   data.append('file', file);
   data.append('upload_preset', 'uploads')
   const invoiceRef = Math.floor(Math.random()*100000);
    setInvoiceNo(invoiceRef);
    try {
    
   const madeOrder = await axios.post('https://relaxhotel.herokuapp.com/order', {
   qty,
   title,
   deliver,
   total,
   name,
  invoiceNo
   });
   setShowInvoiceBtn(true);
  console.log(madeOrder.data)
} catch (err) {
  console.log(err)
}
 console.log('welcome')
  }
 
  const getInvoice = () => {
    
    axios.post('https://relaxhotel.herokuapp.com/api/create-pdf', {
      qty,deliver,title,name,total,invoiceNo
    }).then(() => axios.get('https://relaxhotel.herokuapp.com/api/relax-invoice', {responseType:'bolb'})).then((res) => {
      const pdfBlob = new Blob([res.data], {type:'application/pdf'})
      saveAs(pdfBlob, 'Relax Invoce.pdf')
    })
  }

  return (
    <div className='order'>
     <img className='orderImg' src={liveMenu.img} alt=''/>
     <div className='container mb-10 flex flex-col items-center justify-center'>
      <div className='order-top flex flex-col items-center px-10 justify-ceenter'>
     <p className='text-3xl font-bold'>{liveMenu.title}</p>
     <p className='text-orange-500 font-semibold'>{liveMenu.minute}</p>
     <p className='text-stone-400 text-center'>{liveMenu.desc}</p>
      </div> 
      <div className='order-bottom flex flex-col items-center justify-center '>
       <div className='quantity flex-col md:flex-row flex mt-4  '>
          <p className='mr-6 text-stone-400 text-xl font-medium'>Name</p>
          <input placeholder='Enter name'
          className='border-2 border-slate-400 outline-0 w-96 py-1 rounded-md md:ml-5'
          type='text'
          onChange={(e) => setName(e.target.value)}  
          />
        </div>
        <div className='quantity flex-col md:flex-row flex mt-4'>
          <p className='mr-6 text-stone-400 text-xl font-medium '>Quantity</p>
          <input placeholder='Enter quantity eg 1' min='1' value={qty} className='border-2 border-slate-400 outline-0 w-96 py-1 rounded-md' type='number' onChange={(e) => setQty(e.target.value)}/>
        </div>
        <div className='quantity flex-col md:flex-row flex mt-4  '>
          <p className='mr-6 text-stone-400 text-xl font-medium'>Location</p>
          <input placeholder='Eg FreeArea'
          className='border-2 border-slate-400 outline-0 w-96 py-1 rounded-md'
          type='text'
          onChange={(e) => setDeliver(e.target.value)}  
          />
        </div>
       
        <div className='payments flex-col md:flex-row flex w-full items-center justify-between mt-4'>
        <span>
           <p className='text-xl text-stone-400 font-bold'><span className='text-orange-500  font-bold'>Total:</span>Ksh {total}</p>
        </span>
          <span className='flex items-center text-lg'>
            <p className='mr-2 text-cyan-700'>Pay on Delivery</p>
            <input type='checkbox'/>
          </span>
          <span className='flex items-center'>
            <p className='mr-2 text-lime-600'>Lipa Na M-pesa</p>
            <input  type='checkbox'/>
          </span>
        </div>
       
      </div>
      <button className='bg-orange-400 w-3/6 py-2 text-xl font-semibold text-white rounded-md' onClick={handleOrder}>Confirm Order</button>      
      {
        showInvoiceBtn && 
         <button className='bg-teal-300 w-3/6 py-2 text-xl font-semibold  text-white rounded-md mt-2' onClick={getInvoice}>Get Invoice</button>
      }
     
     </div>
     <Footer/>
    </div>
  )
}

export default Order