import React from 'react'
import {Link} from 'react-router-dom'
import { searchResults } from '../../data';
import TopSocket from '../topsocket/TopSocket';
import './navbar.css'

const Navbar = () => {

  const  [scrolled, setScrolled] = React.useState(false);
  const [results, setResults] = React.useState('chip');
  const [open, setOpen] = React.useState(false)
  const resultsOutput = searchResults.filter((result) => result.title.includes(results));
  const slicedResults = resultsOutput.slice(0,6);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
  }

  return (
    <>   <TopSocket/>
    <div className=' flex main3 w-100 items-center justify-around bg-teal-500 fixed right-0 left-0  z-10 ' >
    
        <div className='column-2 flex-1 w-16 text-white h-20 flex items-center justify-start px-2 font-extrabold'>
           <Link to='/'><h1 className='main-link md:text-3xl logo cursor-pointer '>RELAX HOTEL</h1></Link> 
        </div>
        <div className='column-2 comp-nav flex-auto w-64 text-white  h-20 flex justify-around items-center' >
          <Link to='/'><h1 className='cursor-pointer' >Home</h1></Link>  
            <Link to='/accomodation'><h1 className='cursor-pointer' >Accomodations</h1></Link>
            <Link to='/dinning'><h1 className='cursor-pointer' >Dinning</h1></Link>
            <Link to='/meetings'><h1 className='cursor-pointer' >Meetings</h1></Link>
           
           <Link to='/contact'><h1 className='cursor-pointer' >Contact</h1></Link>
        </div>
          
         <div onClick={() => setOpen(true)} className='-ml-10 open-btn cursor-pointer'>
          <i class="fa-solid fa-align-center fa-2x text-white"></i>
         </div>

         <div className={open ? 'mobile show ' : 'mobile '} >
         <p className='text-3xl cursor-pointer' onClick={() =>setOpen(false)}><i class="fa-solid fa-circle-xmark"></i></p>
          <Link to='/'><h1  onClick={() =>setOpen(false)} className='cursor-pointer mobile-link' >Home</h1></Link>  
            <Link to='/accomodation'><h1  onClick={() =>setOpen(false)} className='cursor-pointer mobile-link' >Accomodations</h1></Link>
            <Link to='/dinning'><h1  onClick={() =>setOpen(false)} className='cursor-pointer mobile-link' >Dinning</h1></Link>
            <Link to='/meetings'><h1  onClick={() =>setOpen(false)} className='cursor-pointer mobile-link' >Meetings</h1></Link>
           
           <Link to='/contact'><h1  onClick={() =>setOpen(false)} className='cursor-pointer mobile-link' >Contact</h1></Link>
        </div>

        <div className='main column-2 flex-1 w-16 text-white h-20 relative flex items-center justify-end px-2'>
            <input className='px-10 py-2 search rounded-full relative  text-black outline-0 hover:hover-div'
            type='text'
            placeholder='Search favorite...'
            onChange={(e) => setResults(e.target.value.charAt(0).toUpperCase())}
            />
             <div className='hover-div grid grid-cols-3 gap-4 px-2 py-2'>
             {slicedResults.map((item) => {
              return  <div className='result drop-shadow-lg'>
                 <img className='resultsImg' src={item.img} alt=''/>
                 <p  className='mx-1' >{item.title}</p>
                 <p  className='mx-1 text-amber-500 font-norma' >$ {item.cost} <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
               </div>
             }
             )}
              <button className='text-white w-64 bg-orange-500 py-2 px-2 rounded-md'>View whole menu</button>
            </div>
           
        </div>
            </div>
            </>
  )
}

export default Navbar