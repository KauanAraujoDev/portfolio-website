import styled from 'styled-components';

interface AboutMeProps {
    curriculum: boolean
}

const AboutMeButton = styled.div<AboutMeProps>`
    background: ${props => props.curriculum ? 
        'linear-gradient(90deg, rgba(16,215,226,1) 50%, rgba(147,88,247,1) 100%);' :
        'linear-gradient(90deg, rgba(210,64,116,1) 34%, rgba(101,24,180,1) 100%);'  
    };
`

export { AboutMeButton }
