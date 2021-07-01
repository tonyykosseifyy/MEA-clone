import React, { useState } from 'react' ;
import './App.css';
import Home from './Components/Home'
import Header from './Components/Header' ;
import styled from 'styled-components' ;
const mainImageUrl = 'https://www.mea.com.lb/images/mainBanner.jpg?w=1663&h=936&mode=crop' ;

function App() {
  const [ hover , setHover ] = useState(false) ;
  const [ background , setBackground ] = useState(mainImageUrl) ;
  const [ navOpen , setNavOpen ] = useState(false) ;
  return (
    <div
      className="app"
      style={{
        height: navOpen ? '100vh' : 'auto' ,
        overflowY: navOpen ? 'hidden' : ''
      }}>
        <MainBackground background={background} hover={hover}></MainBackground>
        <Header hover={hover} setHover={setHover} navOpen={navOpen} setNavOpen={setNavOpen} />
        <Home hover={hover} setBackground={setBackground} />
    </div>
  );
} ;

export default App;


const MainBackground = styled.div`
  z-index: 0 ;
  position: absolute ;
  top: 0 ;
  right: 0 ;
  left: 0 ;
  height: 100vh ;
  width: 100%  ;
  background-position: left;
  background-repeat: no-repeat;
  transition:  .34s ease-in ;
  transition-delay: .09s ;
  background-size: cover;
  max-width: 100% ;
  max-height: 100vh ;
  background-image: url(${(props) => props.background}) ;
  &::before {
    content: '' ;
    position: absolute;
    top: -0px ;
    right: 0 ;
    left: 0 ;
    width: 100% ;
    bottom: 0 ;
    height: 100vh  ;
    background-color: ${(props) => props.hover ? 'rgba(0, 0, 0, 0.8)': 'rgba(0, 0, 0, 0.2)'}
  }
`
