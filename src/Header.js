import React from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;

const middleEastUrl = 'https://www.mea.com.lb/images/mea-logo-new.png?v=20210531' ;
const mideastlogo = 'https://www.mea.com.lb/images/skyteam-logo.png';

const Header = () => {
  return (
    <nav className='header'>
      <RightHeader>
        <img src={middleEastUrl} alt='middle East Url' />
        <img src={mideastlogo} alt='middle East Url' />
      </RightHeader>
    </nav>
  ) ;
} ;


export default Header ;




const RightHeader = styled.div`
  display: flex ;
  align-items: center ;
  background-color: blue ;
  & > img {
    object-fit: contain ;
    max-width : 8vw ;
    max-height: 150px ;
  }
`
