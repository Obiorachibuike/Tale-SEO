// import React from 'react'
import Aboutbanner from '../sections/banner-section/about_banner'
import AboutContact from '../sections/contact-section/about-contact';
import VideoInfo from '../sections/info_section/video-info'
import Client from './../sections/cleint_section/client';

function About() {
  return (
    <div>
      <Aboutbanner />
      <VideoInfo />
      <Client />
      <AboutContact />
    </div>
  )
}

export default About
