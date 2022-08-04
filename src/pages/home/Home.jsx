import React from 'react'
import Blief from '../../components/blief/Blief'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Menu from '../../components/menu/Menu'
import Offer from '../../components/offer/Offer'
import RoomImages from '../../components/roomImages/RoomImages'
import Select from '../../components/select/Select'
import Services from '../../components/services/Services'
import ShowCase from '../../components/showCase/ShowCase'
import Testimonials from '../../components/testimonials/Testimonials'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Select/>
        <Services/>
        <RoomImages/>
        <Menu/>
        <Blief/>
        <ShowCase/>
        <Offer/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home