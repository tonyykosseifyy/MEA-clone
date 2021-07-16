import React, { useState } from 'react' ;
import './Flights.css' ;
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Button } from './About' ;

SwiperCore.use([Navigation , Pagination]);

const flights = [
  {
    title: 'Dusseldorf-Beirut',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3546Image.jpg?w=1320&h=607&mode=crop',
    travel : 'Travel between: 03 Jul 2021 to 31 Dec 2021' ,
    type: 'Bussiness' ,
    traveltype: 'Round Trip' ,
    price: 'From EUR 960 *' ,
    timeleft: 'Fare expires In: 181 days'
  } ,
  {
    title: 'Beirut-Dusseldorf',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3547Image.jpg?w=1320&h=607&mode=crop',
    travel : 'Travel between: 03 Jul 2021 to 31 Dec 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'From USD 460 *' ,
    timeleft: 'Fare expires In: 181 days'
  },
  {
    title: 'Beirut-Istanbul',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3550Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between:  09 Jun 2021 to 31 May 2022' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'From USD 270 *' ,
    timeleft: 'Fare expires In: 303 days'
  },
  {
    title: 'Amsterdam-Beirut',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3560Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between: 21 Jul 2021 to 28 Oct 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'From USD 458 *' ,
    timeleft: 'Fare expires In: 117 days'
  } ,
  {
    title: 'Beirut-Amsterdam',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3558Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between: 21 Jul 2021 to 28 Oct 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'From USD 481 *' ,
    timeleft: 'Fare expires In: 117 days'
  }
]

const Flights = () => {
  const [ grabbing , setGrabbing ] = useState(false) ;
  const swiperProps = {
    onDragStart: () => console.log('drag start'),
    onDragEnd: () => console.log('drag end'),
    style: {
      cursor :grabbing ? 'grabbing' : 'grab'
    }
  }

  return (
    <div className='flights'>
      <h1>Our latest flight deals</h1>
      <div className='slider'>
        <div className='slider-sidebar'></div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          { flights.map((item , index) => (
            <SwiperSlide key={index} >
              <img src={item.url} alt={item.title} />
              <div className='slider-details'>
                <p>{item.timeleft}</p>
                <p>{item.travel}</p>
                <h1>{item.title}</h1>
                <span>{item.traveltype}</span>
                <p>{item.price}<span></span></p>
                <div className='slider-book'>
                  <Button
                    bg='white'
                    co='black'
                    w='110px'
                    h='55px'
                    bc='white'
                    c='#0873BA'
                    >Book</Button>
                  <span>fare conditions</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) ;
} ;



export default Flights ;
