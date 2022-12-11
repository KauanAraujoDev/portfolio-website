import React from 'react';
import styled from 'styled-components';

import './style.css'
import { IntroductionSubText, IntroductionButton } from './style';

import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../../assets/github.svg';
import looper from '../../../assets/looper.png';

export default function Header() {

    const ImageLopper = styled.div`
        width: 63.875rem;
        height: 39.0625rem;
        background-image: url(${looper});
        background-repeat: no-repeat;
        background-size: cover;
    `

    return (
        <React.Fragment>
            <div id='introduction' className='introduction-container'>
                <div className='introduction-container-div'>
                    <div className='introduction-introduct'>
                        <div className='introduction-text'>
                            <IntroductionSubText aling={false}>Olá, eu sou</IntroductionSubText>
                            <h1>Kauan Araujo</h1>
                            <IntroductionSubText aling={true}>Desenvolvedor Back-End & Front-End.</IntroductionSubText>
                            <div className='buttons'>
                                <IntroductionButton className='btn' github={false} onClick={() => {window.open('https://www.linkedin.com/in/kauan-araujo-do-carmo-6460a1241/', '_blank')}}>
                                    <Linkedin id='svg' />
                                    <h3>LinkedIn</h3>
                                </IntroductionButton>
                                <IntroductionButton className='btn' github={true} onClick={() => {window.open('https://github.com/KauanAraujoDev/', '_blank')}}>
                                    <Github id='svg'/>
                                    <h3>Github</h3>
                                </IntroductionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}