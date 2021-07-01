import React from 'react' ;
import './About.css' ;
import styled from 'styled-components' ;

export const Button = styled.button`
  cursor: pointer ;
  background-color: ${(props) => props.bg || '#0873BA'} ;
  color: ${(props) => props.co || 'white'} ;
  outline: none ;
  border-width: 1px ;
  border-style: solid ;
  border-color: ${(props) => props.bc || '#0873BA'} ;
  transition: .3s ease-out ;
  text-transform: uppercase;
  width: ${props => props.w};
  height: ${props => props.h} ;
  font-weight: 400 ;
  font-size: 13px ;
  font-family: 'Roboto', sans-serif;
  &:hover {
      background-color: ${props => props.c || 'white'} ;
      color: ${props => props.bg || '#0873BA'}
  }
`

const covidImage = 'https://www.mea.com.lb/images/covid_hp.jpg'

const About = () => {
  return (
    <div className='about'>
        <h1>Covid-19 and Travel</h1>
        <p>
          We continue to discover the world together.
          <br/>
          MEA has put into effect special measures to protect your next journey!
        </p>
        <Button
          w='140px'
          h='50px'
        >Read More</Button>
    </div>
  ) ;
} ;


export default About ;
