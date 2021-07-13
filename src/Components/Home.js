import React, { useState } from 'react' ;
import './Home.css' ;
import Header from './Header' ;
import styled from 'styled-components'

const mainImageUrl = 'https://www.mea.com.lb/images/mainBanner.jpg?w=1663&h=936&mode=crop' ;
const LinksData = [
  {
    title: 'Book a trip' ,
    description : 'Search Flights and Books',
    url: 'https://www.mea.com.lb/images/book-buyBg.jpg?w=1663&h=936&mode=crop'
  } ,
  {
    title: 'Online Check-In' ,
    description : 'Check-in before departure',
    url: 'https://www.mea.com.lb/images/online-check-in.jpg?w=1663&h=936&mode=crop'
  },
  {
    title: 'Manage Booking' ,
    description : 'View or Modify your booking',
    url : 'https://www.mea.com.lb/images/check-my-trip.jpg?w=1663&h=936&mode=crop'
  },
  {
    title: 'Flight Status' ,
    description : 'Check current flights times',
    url: 'https://www.mea.com.lb/images/timetablebg.jpg?w=1663&h=936&mode=crop'
  }
] ;

const Home = ({setBackground}) => {
  return (
    <div className='home'>
      <CenterHome>
        {LinksData.map((item , index) => (
          <div
          style={{padding: '10px', cursor: 'pointer'}}
          className='cont'
          onMouseOver={() => setBackground(item.url)}
          onMouseLeave={() => setBackground(mainImageUrl)}
          >
            <ContainerLinks key={index}>
              <h2>{item.title}</h2>
              <h5>{item.description}</h5>
              <Bar />
            </ContainerLinks>
          </div>
        ))}
      </CenterHome>
    </div>
  ) ;
} ;
const Bar = styled.div`
  background-color: rgba(255,255,255,.4) ;
  height: 2px ;
  width: 70px ;
`

const ContainerLinks = styled.div`
  display: flex ;
  flex-direction: column ;
  text-align: center ;
  align-items: center ;
  color: white ;
  cursor: pointer ;
  transition: .4s ease-out ;
  padding: 20px ;
  & > h2 {
    margin: 6px 0 ;
    font-size: 1.9rem ;
    font-weight: 500 ;
  }
  & > h5 {
    font-size: 16px ;
    font-weight: 200 ;
  }
  & > div${Bar} {
    margin-top: 20px ;
  }
  @media (max-width: 1130px) {
   & > h2 {
     font-size: 1.4rem ;
   }
   & > div${Bar} {
     margin-top: 10px ;
   }
  }
`

const CenterHome = styled.section`
  display: flex ;
  align-items: center ;
  justify-content: space-evenly ;
  height: calc(100vh - 170px);
  z-index: 100 ;
  position: relative ;
  @media (max-width: 1130px) {
    flex-direction: column ;
    justify-content: center ;
    height: calc(100vh - 90px);
  }
`
export default Home ;
