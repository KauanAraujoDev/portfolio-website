import React from 'react';
import styled from 'styled-components';

import './style.css'
import { AboutMeButton } from './style';
import curriculum from '../../../assets/curriculum.pdf';
import UserPortfolio from '../../../assets/userportfolio.png'

import { ReactComponent as Twitch } from '../../../assets/twitch.svg';

import { ReactComponent as Download } from '../../../assets/download-cloud.svg';
import { ReactComponent as Email } from '../../../assets/email.svg';

export default function AboutMe() {
    const ImageClient = styled.div`
        width: 100%;
        height: 100%;
        border-radius: .25rem;
        background: url(${UserPortfolio});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `

    return (
        <React.Fragment>
            <div id='aboutme' className='aboutme-container'>
                <div className='aboutme-container-div'>
                    <div className='aboutme-photo'>
                        <div className='aboutme-photo-bar'></div>
                        <div className='aboutme-photo-image'>
                            <ImageClient />
                        </div>
                    </div>
                    <div className='aboutme-text'>
                        <div className='text'>
                            <h3>SOBRE MIM</h3>
                            <h4>São Geraldo Do Araguaia, Brasil</h4>
                            <p><small>Working with website (back-end and front-end) development since the beginning of the year 2021, I have co-founded and developed multiple websites which impact 15.000 consumers in more than 6 states. Always concerned with the User Experience and using data-metrics to reach high retention rates.</small></p>
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
