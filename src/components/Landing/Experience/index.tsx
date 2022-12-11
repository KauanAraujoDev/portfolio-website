import React, { useState } from 'react';
import './style.css';

import experiencesData from '../../../data/experiences.json';

interface IExperiences {
    id: number
    experienceCompany: string
    experienceDescription: string
    experienceDate: string
    experienceWork: string
}

import Tab from './Tab'

const experienceMapping: IExperiences[] = experiencesData;

export default function Experience() {
    const [experiences, setExperiences] = useState(experienceMapping)
    const [company, setCompany] = useState<number>(0)

    return (
        <React.Fragment>
            <div id='experience' className='experience-container'>
                <div className='experience-container-div'>
                    <div className='experience-tab'>
                        <h1 className='title'>EXPERIENCIA</h1>
                        <br />
                        <Tab
                            company={company}
                            onClick={(id: number) => setCompany(id)}
                        ></Tab>
                    </div>
                    <div className='experience-text'>
                        <div className='handler'>
                            <h3>{experiences[company].experienceWork}</h3>
                            <span>{experiences[company].experienceDate}</span>
                        </div>
                        <div className='project-name'>
                            <p>{experiences[company].experienceCompany}</p>
                        </div>
                        <div className='project-description'>
                            <span>
                                <small>
                                    {experiences[company].experienceDescription}
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}