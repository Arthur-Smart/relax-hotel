import React from 'react'
import './food.css'
import GalaxyRes from '../galaxRes/GalaxyRes'
import GalaxyCoffee from '../galaxycoffee/GalaxyCoffee'
import GalaxyBar from '../galaxybar/GalaxyBar'
import GalaxySpur from '../galaxySpur/GalaxySpur'

function Food() {
  return (
    <div className='food flex flex-col items-center justify-center mt-5 mb-5'>
    <div className='container flex justify-center md:justify-between gap-4 flex-wrap mb-20   '>
        <div className='left'>
           <GalaxyRes/>
        </div>
        <div className='right p-4'>
        <p className='text-orange-500 text-2xl '>Galaxy Restaurant</p>
            <p>Relax Hotel oﬀers dining at its best with the freshest ﬂavors of locally sourced produce. It oﬀers a selected buﬀet breakfast, all day a-la-carte and snack dining, ﬂowing coﬀee/tea dispenser and 24 hour room service.
             Spread out over the ground ﬂoor, the Galaxy (150 covers) showcases the ﬁnest cuisine, complete with live show kitchen and outdoor terrace overlooking the pool. We 
             have made a cool place for you to conduct your business meeting. We value the success of your business. We value you</p>
        <p className='text-lime-700 text-base font-bold'><i class="fa-solid fa-check"></i> All supplies for different seasons. All setup as you request for it</p>
        </div>
    </div>

    {/*Galaxy coffee shop */}
     <div className='container flex justify-center md:justify-between gap-4 flex-wrap  mb-20 '>
        <div className='left'>
           <GalaxyCoffee/>
        </div>
        <div className='right p-4'>
        <p className='text-orange-500 text-2xl '>Galaxy Coffee Shop</p>
            <p>Open 24 hrs, the coffee shop is ideal for casual meetings with family or friends. Brace yourself to be delighted by a wide selection of high quality coffee & tea blends, beverages and tasty meals to suit your taste.

Our experienced barista will not only brew coffee that will warm your heart but also serve it with freshly baked cakes and pastries, the best way to get your daily grind going.</p>
        <p className='text-amber-600 text-base font-bold'><i class="fa-solid fa-check"></i>Your brand choice is covered by Relax Hotel. White and Black coffee made. Available. Also let us know what other type you may desire.</p>
        </div>
    </div>

    {/*Galaxy Bar */}
     <div className='container flex justify-center md:justify-between gap-4 flex-wrap mb-20  '>
        <div className='left'>
           <GalaxyBar/>
        </div>
        <div className='right p-4'>
        <p className='text-orange-500 text-2xl '>Galaxy Bar</p>
            <p>An extension of the Galaxy restaurant, the elegant bar showcases array of wines and beverages with favorite bites and snacks to savor as you enjoy your drink.
Unwind after an exciting day in the bustling city of Nairobi. Whether your visiting for business or leisure, the Galaxy bar and bar deck is the ideal place to let the day run out with a large selection of international
wines, cocktails, beers, spirits and soft drinks.</p>
        <p className='text-teal-400 text-base font-bold'><i class="fa-solid fa-check"></i> All supplies for different seasons. All setup as you request for it</p>
        </div>
    </div>

    {/*Spur Restaurant */}
     <div className='container flex justify-center md:justify-between gap-4 flex-wrap mb-20  '>
        <div className='left'>
           <GalaxySpur/>
        </div>
        <div className='right p-4'>
        <p className='text-orange-500 text-2xl '>Spur Restaurant</p>
            <p>The internationally acclaimed Spur restaurant is renowned for its selection of succulent steaks, delicious hamburgers, mouthwatering carveries, tasty chicken, seafood, salads and vegetarian meals.
That why we ensure you never miss the Spur goodies at any time you arrive in a certain time in our restaurants. We also take ordrs on how 
you would like it to be prepared.
The Spur Restaurant open from 9:30am to 9:30pm.
            </p>
        <p className='text-neutral-500 text-base font-bold'><i class="fa-solid fa-check"></i> All supplies for different seasons. All setup as you request for it</p>
        </div>
    </div>

    {/*End of Spur Restaurant */}

    </div>
  )
}

export default Food