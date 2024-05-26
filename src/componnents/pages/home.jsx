import React from 'react'
import Banner from '../sections/banner-section/banner'
import Service from '../sections/service-section/service'
import Project from './../sections/project_section/project';
import Info from '../sections/info_section/info';
import Contact from '../sections/contact-section/contact';
import About from './about';
import Faqs from './faqs';

function Home() {
  return (
    <div>
        <Banner />
        <Service />
        <Project />
        <Info />
        <Contact />
        <About />
        <Faqs />
    </div>
  )
}

export default Home