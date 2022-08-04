import React from 'react'
import './accomgallery.css'

function AccomGallery() {

    const [slideNumber, setSlideNumber] = React.useState(0);
    const [open, setOpen] = React.useState(false);


    const photos = [
        {
            src:require("../../assets/food1.jpg")
        },
        {
            src:require("../../assets/img1.jpg")
        },
        {
            src:require("../../assets/change-2.jpg")
        },
        {
            src:require("../../assets/chips.jpg")
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
    }

    const handleMove = (dir) => {
        let newSlideNumber;

        if(dir === "l"){
            newSlideNumber = slideNumber === 0 ? 3 : slideNumber -1;
        } else{
           newSlideNumber = slideNumber === 3 ? 0 : slideNumber +1;  
        }
        setSlideNumber(newSlideNumber)
    }

  return (
    <div className='accomgallery flex flex-col items-center justify-center mt-4'>
    <div className='container details-photo'>
        <p className='text-stone-500'><i class="fa-solid fa-location-dot"></i>Nakuru, Lanet-location, Kenya</p>
        <p className='text-orange-400 text-lg'>Cool location - 0.5Km from Nakuru-Nairobi Highway</p>
        <p className='text-teal-500 text-lg font-medium underline'>Book a stay with us and get excellent amenitis and professional services</p>
          <p className='text-stone-500'><i class="fa-solid fa-circle-info"></i>Click on the image to magnify it</p>
    </div>
   {open &&<div className='slider'>
       <i class="fa-solid fa-circle-xmark close" onClick={() =>setOpen(false)}></i>
       <i class="fa-solid fa-circle-arrow-left hide arrow" onClick={() => handleMove("l")}></i>
       <div className='sliderWrapper'>
           <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
       </div>
       <i class="fa-solid fa-circle-arrow-right hide arrow" onClick={() => handleMove("r")}></i>
   </div>}
   
   
        <div className='container  flex flex-wrap items-center justify-center  gap-3'>
            {photos.map((photo, i) => (
                <div className='photo rounded-md cursor-pointer'>
                <img onClick={() => handleOpen(i)} src={photo.src} alt=''/>
                </div>
            ))}
        </div>        
          
    </div>
  )
}

export default AccomGallery