import React from 'react' ;
import './Flights' ;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper-bundle.min.css' ;


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
  return (
    <div className='flights'>
      <h1>Our latest flight deals</h1>
      <div className='slider'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  ) ;
} ;



export default Flights ;
