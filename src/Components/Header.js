import React, { useState , useEffect } from 'react' ;
import './Header.css' ;
import styled from 'styled-components' ;
import { BiWorld , BiSearch} from 'react-icons/bi' ;
import { AiOutlineUser } from 'react-icons/ai' ;
import Menu from './Menu' ;
import { flightsData } from './data.js' ;

const middleEastUrl = 'https://www.mea.com.lb/images/mea-logo-new.png?v=20210531' ;
const mideastlogo = 'https://www.mea.com.lb/images/skyteam-logo.png';
const stickyMEA = 'https://www.mea.com.lb/images/mea-colored-1.png' ;
const stickyLogo = 'https://www.mea.com.lb/images/skyteam-colored.png' ;

const links = [
  'Plan & Book' , 'Traveler Info' , 'Cedar Miles' , 'About Us'
]

const Header = ({setHover , hover , navOpen , setNavOpen }) => {
  const [ indexHover , setIndexHover ] = useState(0) ;
  const [ scroll , setScroll ] = useState(0) ;
  const [ prevScroll , setPrevScroll ] = useState(0) ;
  const [ up , setUp ] = useState(false) ;
  window.addEventListener('resize' , () => {
    if (window.innerWidth > 1130) {
        setNavOpen(false)
      }
  })
  window.addEventListener('scroll', () => setScroll(window.scrollY)) ;

  useEffect(() => {
    if (scroll == 0) {
      setUp(false) ;
    } else if ( prevScroll > scroll ) {
      !up && setUp(true) ;
    } else if ( prevScroll < scroll ) {
      up && setUp(false) ;
    }
    setPrevScroll(scroll)
  }, [scroll])
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
    <div className={`header ${up ? 'header-sticky' : ''}`} style={{background: hover && !up ? '#1F1F1F' : '', zIndex: hover || navOpen ? '400' : ''}}>
      <MobileNavbar navOpen={navOpen} onClick={() => setNavOpen(false)}>
        { links.map((item , index) => (
          <MobileLinks key={index}>{item}</MobileLinks>
        ))}
      </MobileNavbar>
      <MoreDetails
        hoverState={hover}
        onMouseLeave={() => setHover(false)}
      >
        <div className='details-top' onMouseOver={() => setHover(true)}>
          <div className='details-left'>
            { flightsData[indexHover]['description'].map((item, index) => (
              <DetailsComponents key={index}>
                <span>{item.hasOwnProperty('icon') && item.icon}</span><h4>{item.subTitle}</h4>
                <p>{item.subDescription}</p>
              </DetailsComponents>
            )) }
          </div>
          <div className='details-right'>
            {flightsData[indexHover].hasOwnProperty('features') && flightsData[indexHover]['features'].map((item , index) => (
              <DetailsComponents key={index}>
                { item }
              </DetailsComponents>
            ))}
          </div>
        </div>
        <div className='details-bottom' onMouseOver={() => setHover(false)}></div>
      </MoreDetails>
      <HeaderChild className='left-header' up={up}>
        <Menu navOpen={navOpen} setNavOpen={setNavOpen} up={up} />
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
      <BiSearch className='search-svg' style={{color: up ? 'black' : 'white'}}/>
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
  & > img:nth-child(2) {
    border-bottom: 2px solid transparent ;
    transition: .3s ease-out ;
  }
  & > img:nth-child(2):hover {
    border-color:  ${(props) => props.up ? "green" : 'white' }
  }
`
const HeaderLinks = styled.a`
  display : block ;
  background: transparent ;
  color: ${(props) => props.up ? "black" : 'white' } ;
  font-family: 'Roboto', sans-serif;
  font-weight: 500 ;
  cursor: pointer ;
  padding: 25px 11px ;
  transition: .3s ease-out ;
  &:hover {
    background-color: ${(props) => props.up ? "white" : 'white' };
    color: #0873B9  ;
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
  top: 70px ;
  right: 0 ;
  left: 0 ;
  width: 100% ;
  height: calc(100vh - 70px) ;
  opacity: ${(props) => props.hoverState ? '1' : '0'} ;
  display: ${(props) => props.hoverState ? 'flex' : 'none'} ;
  flex-direction: column ;
`
const MobileNavbar = styled.div`
  position: fixed ;
  top: 0 ;
  left: 0 ;
  width: 65vw ;
  height: 100vh ;
  bottom: 0 ;
  background-color: #2B343A ;
  opacity: ${(props) => props.navOpen ? '1' : '0'} ;
  z-index: ${(props) => props.navOpen ? '-5' : '-5'} ;
  display: ${(props) => props.navOpen ? 'flex' : 'none'} ;
  transition: .3s ease-in-out ;
  flex-direction: column ;
  padding: 0 5px ;
  padding-top: 100px ;
  justify-content: flex-start ;
  & button.menu {
    margin-left: 17px ;
  }
  &::before {
    content: '' ;
    position: absolute ;
    height: 100vh ;
    width: 35vw ;
    top: 0 ;
    bottom: 0 ;
    right: 0 ;
    left: 65vw ;
    background-color: rgba(0,0,0,0.8) ;
    z-index: ${(props) => props.navOpen ? '400' : '-5'} ;
    display: ${(props) => props.navOpen ? 'block' : 'none'} ;
  }
`
const MobileLinks = styled(HeaderLinks)`
  border-bottom: 2px solid #3D454A ;
  display: block ;
`
const MobileHeaderContainer = styled.div`
  display: flex ;
`
const DetailsComponents = styled.div`
  display: flex ;
  flex-direction: column ;
  margin: 20px 40px ;
`
