import React from 'react'
import Community from '../components/Community/Community';
import Hero from '../components/Hero/Hero'
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';
import Section6 from '../components/Section6/Section6';
import Partners from './../components/Partners/Partners';
import Faq from '../components/Faq/Faq';

function Home() {

    
  return (
    <>
      <Hero />
      <Partners/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Community/>
      <Faq/>
    </>
  )
}

export default Home
