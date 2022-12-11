import React, { useEffect, useState } from 'react';
import './style.css'

import experiencesData from '../../../../data/experiences.json';
import Experiences from './Experiences';

interface IExperiences {
    id: number
    experienceCompany: string
    experienceDescription: string
    experienceDate: string
    experienceWork: string
}

interface IProps {
    company: number
    onClick: (id: number) => void
}

const experienceMapping: IExperiences[] = experiencesData;

export default function Tab(props: IProps) {
    const [experiences, setExperiences] = useState(experienceMapping);
    const [active, setActive] = useState<number>(experiences[0].id);

    console.log(props.company)

    return (
        <React.Fragment>
            {
                experiences.map((experience, key) => {
                    return (
                        <div onClick={() => props.onClick(experience.id)}>
                            <Experiences
                                id={experience.id}
                                active={active === experience.id}
                                company={experience.experienceCompany}
                                onClick={() => setActive(experience.id)}
                            />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}