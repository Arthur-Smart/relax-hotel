import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import './offer.css'

function Offer() {

  const [index , setIndex] = React.useState(0);
  const handleClick = (param) => {
      if(param === "left"){
          setIndex(index !==0 ? index - 1 : 1)
      }

      if(param === "right"){
          setIndex(index !==1 ? index + 1 : 0)
      }
  }

  return (
    <div className='offer flex flex-col justify-center'>
       <p className='text-center text-3xl text-white font-normal '>Packages & Special Offers</p>
       
       <div className='o-carousel flex' style={{transform:`translateX(${-100 * index}vw)`}}>
           <div className='i-carousel flex justify-center  '>
               <div className='container justify-center adjust -ml-2 md:ml-0  py-4 flex gap-4'>
               <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/Bear.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>DAIRY HAPPY HOUR</h1>
                  <p className='ml-2 text-gray-00'>Dairy Happy Hour from 4:00pm @ Relax Hotel. Enjoy Johnnie Walker Black Label. Make your evening great. Drink controllably. This Package
                  is only for 18+ and above individuals. For Every 5 bottles and above there shall be an extra bottles. You can also enjoy great offer by becoming a member of Eka Hotel.  </p>
                  
               </div>

                <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/spa-01.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>SPA WELLNESS POINT</h1>
                  <p className='ml-2 text-gray-00'>We offer SPA offer and packages also. We make efforts in all dimensions to make such you are comfortal and relaxed just as our name suggest.
                  We have a well trained individual who does it well.Make you back | neck | face | legs and every part of your body relaxed.  </p>
                  
               </div>

                <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/fam-01.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>SUNDAY FAMILY BARBEQUE</h1>
                  <p className='ml-2 text-gray-00'>Sunday <b>Nayo Aje!</b> We have made a place for you and your family a place on every Sunday. Prepare for your work week by
                  coming and refreshing and relaxing at Relax Hotel. We got Children facility where the can enjoy. The offer starts from 4:30pm to 8:00pm. What an amaizing offer for your family</p>
                  
               </div>

               </div>
           </div>
               {/*Carousel 2 */}
            
             <div className='i-carousel flex justify-center '>
               <div className='container justify-center adjust py-4 flex -ml-4 md:ml-0 gap-4'>
               <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/safari.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>MASSAIMARA EXCURSION</h1>
                  <p className='ml-2 text-gray-00'>We have made it possible and affordable. MassaiMara Excursion. Make some travelling arrangement with Relax Hotel to Massaimara with us.
                  This happens every monthy in an year. This is a great deal for your holiday vaccation and travelling programs</p>
                  
               </div>

                <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/city-01.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>CITY STAYCATION</h1>
                  <p className='ml-2 text-gray-00'>City staycation. Enjoy the view and the breeze from the comfort of our Hotel. A place for couple evening talk. Business places also become cool and enjoyable when they are being planned in city staycation</p>
                  
               </div>

                <div className='ac-container bg-white rounded-md pb-2'>
                   <img src={require('../../assets/takeaway-01.jpg')} alt=''/>
                   <h1 className='text-orange-400 font-bold ml-2'>TAKEAWAY PACKAGES</h1>
                  <p className='ml-2 text-gray-00'>If its soo sweet, you need to carry some home to you family. We have takeaway packages. Don't go empty handed. Carry something and make your family feel the sweets you felt. You can also make some order via our website or android app. </p>
                  
               </div>

               </div>
           </div>

           {/*Carousel 3 */}
            
         
       </div>
         <div className='self-center items-center flex mb-5 show'>
           <div className='left-btn' onClick={() => handleClick("left")}><i class="fa-solid fa-chevron-left"></i></div>
           <div className=' right-btn' onClick={() => handleClick("right")}><i class="fa-solid fa-chevron-right"></i></div>
         </div>
       <div className='l-btn btn-control ' onClick={() => handleClick("left")}><i class="fa-solid fa-chevron-left"></i></div>
       <div className='r-btn btn-control' onClick={() => handleClick("right")}><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  )
}

export default Offer