import React from 'react'
import Hero from '../components/Hero/Hero'
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';
import Partners from './../components/Partners/Partners';

function Home() {

    
  return (
    <>
      <Hero />
      <Partners/>
      <Section3/>
      <Section4/>
      <Section5/>
    </>
  )
}

export default Home
