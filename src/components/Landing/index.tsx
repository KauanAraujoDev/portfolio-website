import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'

import './responsive.css'

export default function LandingComponents() {
    return (
        <React.Fragment>
            <Header />
                <Introduction/>
                <AboutMe />
                <Experience />
                <Projects />
            <Footer />
        </React.Fragment>
    )
}