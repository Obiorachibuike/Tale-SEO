// import React from 'react'
import FaqsBanner from '../sections/banner-section/faqs-banner'
import HappySteps from '../sections/cleint_section/happy-steps'
// import Contact from '../sections/contact-section/contact'
import AboutContact from '../sections/contact-section/about-contact'
import Question from '../sections/info_section/question'

function Faqs() {
  return (
    <div>
    <FaqsBanner />
    <HappySteps />
        <Question />
    <AboutContact />
    </div>
  )
}

export default Faqs