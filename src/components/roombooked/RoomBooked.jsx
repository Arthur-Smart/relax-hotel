import React from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useLocation} from 'react-router'
import Footer from '../../components/footer/Footer'
import {saveAs} from 'file-saver'
import axios from 'axios'
import './roomBooked.css'
import { accomodations } from '../../data';

function RoomBooked() {
    const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const start = date[0].startDate.getDate();
  const end = date[0].endDate.getDate();

  const days = (end - start) + 1;
  console.log(days);
  
  
  const [open, setOpen] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState({
    adult:1,
    children:0,
    room:1
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return{
        ...prev, [name]:operation ==='i' ? options[name] + 1 : options[name] -1,
      }
    })
  }

  const location = useLocation()

  const path = location.pathname.split('/')[2]
  const room = accomodations.find((p) => p.id.toString() === path);

  const [roomTitle, setRoomTitle] = React.useState(room.title)
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [ country, setCountry] = React.useState('');
  const [invoiceNo, setInvoiceNo] = React.useState();
  const [complete, setComplete] = React.useState(false);
  const [identificationcard, setIdentificationcard] = React.useState();
  const totalPrice = days * room.price

  const handleBooking =  async() =>{
    const invoiceRef = Math.floor(Math.random()*100000);
    setInvoiceNo(invoiceRef);
    if(!name || !email || !phone || !country ){
      alert('Please fill all the fields')
    } else {
           const savedRoom =  await axios.post('https://relaxhotel.herokuapp.com/api/booking', {
          name,
          email,
          roomTitle,
          phone,
          country,
          totalPrice,
          identificationcard,
          options,
          date,
          invoiceNo  
         });
          console.log(savedRoom.data);
      setComplete(true);
    }
 }

 const generateInvoice = () =>{
  axios.post('https://relaxhotel.herokuapp.com/api/create-room-pdf', {
      name,  roomTitle, email, phone,  country,  totalPrice,  identificationcard,  days, invoiceNo
    }).then(() => axios.get('https://relaxhotel.herokuapp.com/api/room-invoice', {responseType:'bolb'})).then((res) => {
      const pdfBlob = new Blob([res.data], {type:'application/pdf'})
      saveAs(pdfBlob, 'Relax Invoce.pdf')
    });
     setName('')
       setEmail('')
       setPhone('')
       setCountry('')
       setIdentificationcard('')
 }
  

  return (
    <div className='roomroot'>
    <div className='roomBooked flex flex-col '>
        <div className='roomImgContainer relative'>
        <img className='roomImage absolute' src={room.img1} alt='' />
        <div className='holderss absolute '>
        <p >{room.title}  Available</p>
        </div>
    </div> 
    
    <div className='info-holder flex justify-center -mt-7 '>
        <div className=' holder relative bg-white flex justify-between items-center border-orange-500 border-2 py-4 px-2 rounded-md'>
            <div className='cont title'>
                <p className='text-zinc-500 text-xl'>{room.title}  <span className='text-lime-400'>Available</span></p>
            </div>

            <div className='cont text-zinc-500 cursor-pointer ' onClick={() => setOpen(!open)}>
                <i class="fa-solid fa-calendar-days mr-2"></i>
                <span className='text-center'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {open && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date '
                />
              }
            </div>

            <div className='cont text-zinc-500 '>
               <i class="fa-solid fa-people-group"></i>
               <span onClick={() => setOpenOptions(!openOptions)} className='cursor-pointer'>{`${options.adult} adult .${options.children} children .${options.room} room`}</span>
             { openOptions && <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <div className='optionCounter'>
                  <button className='optionCounterButton' onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1} >-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                 <div className='optionItem'>
                  <span className='optionText'>Children</span>
                   <div className='optionCounter'>
                  <button className='optionCounterButton' onClick={() => handleOption("children", "d")}  disabled={options.children <= 1} >-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("children", "i")} >+</button>
                  </div>
                </div>
                 <div className='optionItem'>
                  <span className='optionText'>Room</span>
                   <div className='optionCounter'>
                  <button className='optionCounterButton' onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("room", "i")} >+</button>
                  </div>
                </div>
               </div>}
            </div>
        </div>
    </div> 
{/*Section 2 of booking page*/}

<div className='details-holdler flex flex-col'>
<div className='container flex items-center flex-col md:flex-row justify-around bg-teal-500 rounded-md py-1 mt-2'>
  <div className='price-desc font-medium text-lg text-white'>
    <p><b>Price per night: </b>Ksh {room.price}</p>
  </div>
  <div className='price-desc font-medium text-lg text-white'>
    <p><b>Number of days booked:</b> {days}</p>
  </div>
  <div className='price-desc font-medium text-lg text-white'>
    <p><b>Total for all days:</b> {totalPrice}</p>
  </div>

</div>
  <div className='container flex flex-wrap gap-3 items-center justify-center mt-2'>
    <div className='roomPic'>
     <div className='overlay'></div>
    <img src={room.roomImg} alt=''/>
    </div>
     <div className='roomPic'>
      <div className='overlay'></div>
      <img src={room.roomImg2} alt=''/>
    </div>
     <div className='roomPic'>
     <div className='overlay'></div>
      <img src={room.img2} alt=''/>
    </div>
  </div>
</div>
{/*Booking and Info */}
<div className='book-info flex flex-wrap items-center justify-center py-2'>
  <div className='container main2 flex'>
    <div className='cont-left'>
      <p className='text-xl font-semibold text-white mb-4'>Room features</p>
      <div className='features'>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p1}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p2}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p3}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p4}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p5}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p6}</p>
        <p className='text-white text-lg mb-4'> <i class="fa-solid fa-hand-point-right text-orange-400 "></i> {room.p7}</p>
      </div>
    </div>
    <div className='cont-right text-white'>
      <p className='text-xl font-semibold mb-4'>Personal Details</p>
      <div className='personal-details flex justify-center flex-col'>
        <input className='mb-7 bg-transparent input' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input className='mb-7 bg-transparent input' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='mb-7 bg-transparent input' placeholder='Enter Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input className='mb-7 bg-transparent input' placeholder='From eg. Netherlands' value={country} onChange={(e) => setCountry(e.target.value)}/>
        <input className='mb-7 bg-transparent input' placeholder='Enter Id' value={identificationcard} onChange={(e) => setIdentificationcard(e.target.value)}/>
      </div>
      <span className='flex text-lime-500'>
      <input type='checkbox'/>
      <p className='ml-2'>Make online M-pesa payments(Optional)</p>
      </span>
      {
        complete &&  <p>Conglaturations! You have booked a room successfully. Get your invoice below. <b>We are happly waiting for you</b></p>
      }
     
      {
        !complete ? <button className='bg-orange-600 w-80 py-3 px-7 text-white rounded-md text-xl' onClick={handleBooking}>Make Reservation</button> :
         <button className='bg-orange-500  w-80 py-3 px-7 text-white rounded-md text-xl' onClick={generateInvoice}>Get Invoice</button>
      }
      
      
    </div>
  </div>
</div>
<Footer/>
    </div>
    </div>
  )
}

export default RoomBooked