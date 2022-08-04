import React from 'react'
import DinningContainer from '../../components/dinningcontainer/DinningContainer'
import DinningDetails from '../../components/dinningdetails/DinningDetails'
import DinningPrep from '../../components/dinningpreparation/DinningPrep'
import Food from '../../components/food/Food'
import Footer from '../../components/footer/Footer'
import './dinning.css'

function Dinning() {
  return (
    <div className='dinning-cont'>
  <DinningContainer/>
  <DinningDetails/>
  <Food/>
  <DinningPrep/>
  <Footer/>
    </div>
  )
}

export default Dinning