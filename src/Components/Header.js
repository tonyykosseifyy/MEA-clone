import React, { useState } from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import { BiWorld , BiSearch} from 'react-icons/bi' ;
import { AiOutlineUser } from 'react-icons/ai' ;
import Menu from './Menu' ;

const middleEastUrl = 'https://www.mea.com.lb/images/mea-logo-new.png?v=20210531' ;
const mideastlogo = 'https://www.mea.com.lb/images/skyteam-logo.png';
const stickyMEA = 'https://www.mea.com.lb/images/mea-colored-1.png' ;
const stickyLogo = 'https://www.mea.com.lb/images/skyteam-colored.png' ;

const links = [
  'Plan & Book' , 'Traveler Info' , 'Cedar Miles' , 'About Us'
]

const Header = () => {
  const [ hover , setHover ] = useState(false) ;
  const [ indexHover , setIndexHover ] = useState(0) ;
  const [ navOpen , setNavOpen ] = useState(false) ;
  const [ scroll , setScroll ] = useState(0) ;
  const [ up , setUp ] = useState(false) ;
  window.addEventListener('resize' , () => {
    if (window.innerWidth > 1130) {
        setNavOpen(false)
      }
  })
  window.addEventListener('scroll' , (e) => {
    console.log('prev' , scroll , 'curnt' , window.scrollY )
    if (window.scrollY == 0) {
      setUp(false)
    } else if ( scroll > window.scrollY ) {
      setUp(true) ;
      setScroll(window.scrollY)
    } else if (scroll < window.scrollY) {
      up && setUp(false) ;
      setScroll(window.scrollY)
    }
  })
  console.log(up)
  const hoverFunction = (index) => {
    setHover(true) ;
    setIndexHover(index) ;
  }
  const propsA = {
    onMouseLeave: () => setHover(false),
    up,
    hover
  }
  return (
    <div className={`header ${up ? 'header-sticky' : ''}`} style={{background: hover && !up ? '#1F1F1F' : ''}}>
      <MobileNavbar navOpen={navOpen} onClick={() => setNavOpen(false)}>
        <HeaderChild className='left-header' style={{height: 'auto'}}>
            <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
            <img src={middleEastUrl} alt='middle East Url' />
            <img src={mideastlogo} alt='middle East Url' />
          </HeaderChild>
        { links.map((item , index) => (
          <MobileLinks key={index}>{item}</MobileLinks>
        ))}
      </MobileNavbar>
      <MoreDetails hoverState={hover} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}><h1>{indexHover}</h1></MoreDetails>
      <HeaderChild className='left-header' up={up}>
        <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
        <img src={up ? stickyMEA : middleEastUrl } alt='middle East Url' />
        <img src={up ? stickyLogo : mideastlogo} alt='middle East Url' />
      </HeaderChild>

      <HeaderChild className='center-header' up={up}>
        { links.map((item , index) => (
          <HeaderLinks
            {...propsA}
            onMouseOver={() => hoverFunction(index)}
            key={index}
            >
            {item}
          </HeaderLinks>
        ))}
      </HeaderChild>

      <HeaderChild className='right-header' up={up}>
        <LanguageSelectButton>
          <AiOutlineUser />
          <p style={{marginLeft: '7px'}}>Login Or Register</p>
        </LanguageSelectButton>
        <LanguageSelectButton>
          <BiWorld />
          <p style={{margin: '0 7px'}}>English-Lebanon</p>
          <BiSearch />
      </LanguageSelectButton>
      <BiSearch className='search-svg'/>
      </HeaderChild>
    </div>
  ) ;
} ;


export default Header ;


const HeaderChild = styled.div`
  display: flex ;
  align-items: center ;
  height: 100% ;
  color: ${(props) => props.up ? "black" : 'white' } ;
`
const HeaderLinks = styled.a`
  display : block ;
  background: transparent ;
  color: ${(props) => props.up ? "black" : 'white' } ;
  font-family: 'Roboto', sans-serif;
  font-weight: 500 ;
  cursor: pointer ;
  padding: 27px 11px ;
  transition: .3s ease-out ;
  &:hover {
    background-color: ${(props) => props.up ? "white" : 'white' };
    color: ${(props) => props.up ? "black" : '#0873B9' };
  }
  @media (max-width: 1130px) {
    display: none ;
  }
`
const ModifiedButton = styled(HeaderLinks)`
  padding: 12px 20px ;
`
const LanguageSelectButton = styled(ModifiedButton)`
  display: flex ;
  align-items: center ;
  font-weight: 200 ;
  font-size: 18px ;
  color : inherit ;
  & > svg {
    width: 20px ;
    height: 20px ;
  }
  @media (max-width: 1130px) {
    display: none ;
  }
`
const MoreDetails = styled.div`
  position: absolute ;
  bottom: -400px ;
  right: 0 ;
  left: 0 ;
  width: 100vw ;
  height: 400px ;
  background-color: white ;
  transition: .3s ease-out ;
  opacity: ${(props) => props.hoverState ? '1' : '0'} ;
  z-index: ${(props) => props.hoverState ? '105' : '-1'} ;
`
const MobileNavbar = styled.div`
  position: fixed ;
  top: 0 ;
  left: 0 ;
  width: 45vw ;
  height: 100vh ;
  bottom: 0 ;
  background-color: #2B343A ;
  opacity: ${(props) => props.navOpen ? '1' : '0'} ;
z-index: ${(props) => props.navOpen ? '200' : '-4'} ;
  transition: .3s ease-in-out ;
  display: flex ;
  flex-direction: column ;
  padding: 30px 5px ;
  justify-content: flex-start ;
  & button.menu {
    margin-left: 17px ;
  }
  &::before {
    content: '' ;
    position: absolute ;
    height: 100vh ;
    width: 55vw ;
    top: 0 ;
    bottom: 0 ;
    right: 0 ;
    left: 45vw ;
    z-index: -1 ;
    background-color: rgba(0,0,0,0.8)
  }
`
const MobileLinks = styled(HeaderLinks)`
  border-bottom: 2px solid #3D454A ;
  display: block ;
`
const MobileHeaderContainer = styled.div`
  display: flex ;
`
