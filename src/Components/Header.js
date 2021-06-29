import React from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;

const middleEastUrl = 'https://www.mea.com.lb/images/mea-logo-new.png?v=20210531' ;
const mideastlogo = 'https://www.mea.com.lb/images/skyteam-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <HeaderChild className='right-header'>
        <img src={middleEastUrl} alt='middle East Url' />
        <img src={mideastlogo} alt='middle East Url' />
      </HeaderChild>

      <HeaderChild className='center-header'>

      </HeaderChild>
    </div>
  ) ;
} ;


export default Header ;


const HeaderChild = styled.div`
  display: flex ;
  align-items: center ;
`
const HeaderLinks = styled.a`
  display : block ;
  background: transparent ;
  color: white ;
  font-family: 'Roboto', sans-serif;
  font-weight: 400 ; 
`
