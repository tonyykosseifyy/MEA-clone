import React, { useState , createRef } from 'react' ;
import './Flights.css' ;
import SwiperCore, { Navigation, Pagination, A11y , Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { Button } from './About' ;
import styled from 'styled-components' ;

SwiperCore.use([Navigation , Pagination, A11y , Thumbs]);

const flights = [
  {
    title: 'Dusseldorf-Beirut',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3546Image.jpg?w=1320&h=607&mode=crop',
    travel : 'Travel between: 03 Jul 2021 to 31 Dec 2021' ,
    type: 'Bussiness' ,
    traveltype: 'Round Trip' ,
    price: 'EUR 960 *' ,
    timeleft: '181 days'
  } ,
  {
    title: 'Beirut-Dusseldorf',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3547Image.jpg?w=1320&h=607&mode=crop',
    travel : 'Travel between: 03 Jul 2021 to 31 Dec 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'USD 460 *' ,
    timeleft: '181 days'
  },
  {
    title: 'Beirut-Istanbul',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3550Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between:  09 Jun 2021 to 31 May 2022' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'USD 270 *' ,
    timeleft: '303 days'
  },
  {
    title: 'Amsterdam-Beirut',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3560Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between: 21 Jul 2021 to 28 Oct 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'USD 458 *' ,
    timeleft: '117 days'
  } ,
  {
    title: 'Beirut-Amsterdam',
    url: 'https://www.mea.com.lb/azure/files/ContentFiles/3558Image.jpg?w=1320&h=607&mode=crop' ,
    travel : 'Travel between: 21 Jul 2021 to 28 Oct 2021' ,
    type: 'Economy' ,
    traveltype: 'Round Trip' ,
    price: 'USD 481 *' ,
    timeleft: '117 days'
  }
]

const Flights = () => {
  const [ indexx , setIndexx ] = useState(0) ;
  return (
    <div className='flights'>
      <h1>Our latest flight deals</h1>
      <div className='slider'>
        <div className='slider-sidebar'>
          <Pointer indexx={indexx} ></Pointer>
          { flights.map((item , index) => (
            <PaginationElement
              active={ index === indexx}
              onClick={() => {
                setIndexx(index) ;
              }}
              key={index}
              >
              {item.title}
            </PaginationElement>
          ))}
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop
          grabCursor={true}
          effect={ window.innerWidth < 1130 ? "fade" : ''}
          onSlideChange={(e) => setIndexx(e.activeIndex)}
          autoplay={{delay: 5000}}
        >
          { flights.map((item , index) => (
            <SwiperSlide key={index} >
              <img src={item.url} alt={item.title} />
              <div className='slider-details'>
                <p style={{fontWeight: '200', fontSize: '15px'}}>Fare expires In: <strong>{item.timeleft}</strong></p>
                <p>{item.travel}</p>
                <h1>{item.title}</h1>
                <span>{item.traveltype}</span>
                <p>From
                  <strong style={{fontSize:'22px'}}> {item.price.slice(0,3)} </strong>
                  <strong style={{fontSize:'35px'}}>{item.price.slice(3,-1)} *</strong>
                </p>
                <div className='slider-book'>
                  <Button
                    bg='white'
                    co='black'
                    w='110px'
                    h='55px'
                    bc='white'
                    c='#0873BA'
                    >Book</Button>
                  <span>Fare Conditions</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) ;
} ;

const PaginationElement = styled.p`
  display: flex ;
  color: ${props => props.active ? 'white' : '#EFEFEF'} ;
  cursor: pointer ;
  transition: .3s ease-out ;
  font-size: 20px ;
  margin: 30px 0 ;
  width: 200px ;
  font-weight: ${props => props.active ? '400' : '200'} ;
  text-align: right ;
  margin-left: auto ;
  &:hover {
    color: white ;
  }
`

const Pointer = styled.div`
  position: absolute ;
  top: ${props => 105 + (props.indexx * 54)}px ;
  right: 0 ;
  background-color: #0873BA ;
  width: 15px ;
  height: 15px ;
  border-radius: 50% ;
  border: 2.5px solid white ;
  transition: .3s ease-out ;
  transform: translateX(50%) ;
`

export default Flights ;
