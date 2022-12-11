import React from 'react'

import './style.css'
import { AboutMeButton } from './style'
import curriculum from '../../../assets/curriculum.pdf'

import { ReactComponent as Twitter } from '../../../assets/twitter.svg'
import { ReactComponent as Twitch } from '../../../assets/twitch.svg'
import { ReactComponent as Youtube } from '../../../assets/youtube.svg'
import { ReactComponent as Figma } from '../../../assets/figma.svg'
import { ReactComponent as CodePen } from '../../../assets/codePen.svg'
import { ReactComponent as Facebook } from '../../../assets/facebook.svg'

import { ReactComponent as Download } from '../../../assets/download-cloud.svg'
import { ReactComponent as Email } from '../../../assets/email.svg'

export default function AboutMe() {
    return (
        <React.Fragment>
            <div id='aboutme' className='aboutme-container'>
                <div className='aboutme-container-div'>
                    <div className='aboutme-photo'>
                        <div className='aboutme-photo-bar'></div>
                        <div className='aboutme-photo-image'></div>
                    </div>
                    <div className='aboutme-text'>
                        <div className='text'>
                            <h3>SOBRE MIM</h3>
                            <h4>São Paulo, Brasil</h4>
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.</small></p>
                        </div>
                        <div className='aboutme-svg-list'>
                            <Twitch id='svg' onClick={() => {window.open('https://www.twitch.tv/purpledevx', '_blank')}}/>
                        </div>
                        <div className='aboutme-button'>
                            <AboutMeButton curriculum={true} className='btn' onClick={() => {window.open(curriculum, '_black')}}>
                                <Download id='svg'/>
                                <h3>Currículo</h3>
                            </AboutMeButton>
                            <AboutMeButton curriculum={false} className='btn' onClick={() => {window.open('mailto:kauanaraujo.dev@gmail.com', '_blank')}}>
                                <Email id='svg'/>
                                <h3>E-mail</h3>
                            </AboutMeButton>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}