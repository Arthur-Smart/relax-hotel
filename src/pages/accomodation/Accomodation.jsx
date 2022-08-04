import React from 'react'
import AccomDetails from '../../components/accom-details/AccomDetails'
import AccomGallery from '../../components/accomgallery/AccomGallery'
import HeroAccomodation from '../../components/heroaccom/HeroAccomodation'
import Rooms from '../../components/rooms/Rooms'
import Footer from '../../components/footer/Footer'
import './accomodation.css'

function Accomodation() {
  return (
    <div className='accomodation'>
        <HeroAccomodation/>
        <AccomGallery/>
        <AccomDetails/>
        <Rooms/>
        
        <Footer/>
    </div>
  )
}

export default Accomodation