import styled from 'styled-components'

interface IntroductionProps {
    github: boolean
}

interface IntroductionTextProps {
    aling: boolean
}

export const IntroductionButton = styled.div<IntroductionProps>`
    width: 9.5625rem;
    height: 2.8125rem;
    border-radius: .25rem;
    ${props => props.github ? 
        'background: linear-gradient(90deg, rgba(210,64,116,1) 34%, rgba(101,24,180,1) 100%);' : 
        'background: linear-gradient(90deg, rgba(16,215,226,1) 50%, rgba(147,88,247,1) 100%);'
    }
`

export const IntroductionSubText = styled.h3<IntroductionTextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    ${props => props.aling ? 'text-align: justify;' : ''}
    text-transform: uppercase;

    color: #FFFFFF;
    background: none;
`