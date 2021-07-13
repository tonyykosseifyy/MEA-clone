
import { ImAirplane , ImLocation} from 'react-icons/im' ;
import { GrClock } from 'react-icons/gr' ;
import { BiWorld , BiCalendar} from 'react-icons/bi' ;
import { IoMdLaptop } from 'react-icons/io' ;
import { GiCargoCrane } from 'react-icons/gi' ;
import { BsFillBriefcaseFill } from 'react-icons/bs' ;
import { FaPlaneDeparture } from 'react-icons/fa' ;

export const flightsData = [
  {
    title: 'Plan & Book' ,
    description: [
      {
        subTitle: 'Book a trip' ,
        subDescription: 'Search Flights & Book',
        icon : <ImAirplane />
      } ,
      {
        subTitle: 'Flight Schedule ' ,
        subDescription: 'View MEA\'s Flight Schedule' ,
        icon: <GrClock />
      },
      {
        subTitle: 'Manage Booking ' ,
        subDescription: 'View or Modify your Booking' ,
        icon : <BiWorld />
      } ,
      {
        subTitle: 'Online Check-in' ,
        subDescription: 'Check in before departure' ,
        icon: <IoMdLaptop />
      } ,
      {
        subTitle: 'Flight Status' ,
        subDescription: 'Check current flights times' ,
        icon: <BiCalendar />
      } ,
      {
        subTitle: 'Cargo' ,
        subDescription: 'Online tracking facility',
        icon: <GiCargoCrane />
      }
    ] ,
    features : ['Special Offers' , 'How to Book Online','The MEA App','Legal Notices','Cancellation and Refund']
  } ,
  {
    title: 'Traveler In' ,
    description: [
      {
        subTitle: 'Check In Information' ,
        subDescription: 'Know more about check-in',
        icon : <ImLocation />
      } ,
      {
        subTitle: 'Passenger Services ' ,
        subDescription: 'Find out about our passenger services' ,
        icon: <BsFillBriefcaseFill />
      },
      {
        subTitle: 'Baggage Info' ,
        subDescription: 'Excess Baggage, Lost & Found, and Restricted Items.' ,
      } ,
      {
        subTitle: 'Rafic Hariri International Airport of Beirut' ,
        subDescription: 'Check airport facilities and services' ,
        icon: <FaPlaneDeparture />
      } ,
      {
        subTitle: 'Onboard Experience' ,
        subDescription: 'Check in flight entertainment, cuisine and shopping' ,
      } ,
      {
        subTitle: 'SkyTeam Rebooking ' ,
        subDescription: 'The industry-first alliance technology',
      }
    ] ,
  }

] ;
