import React, { useState } from 'react';
import styled from 'styled-components';

import './style.css';

import { ReactComponent as Link } from '../../../assets/link.svg';
import projectTable from '../../../data/projects.json';

interface IProjects {
    id: number
    projectName: string
    projectDescription: string
    projectUrl: string
    technology: string
    imageUrl: string
};

const loaderProjects: IProjects[] = projectTable;

export default function Projects () {
    const [projects, setProject] = useState(loaderProjects);

    return (
        <React.Fragment>
            <div id='projects' className='project-components'>
                <div className='project-components-list'>
                    {
                        projects.map((project, key) => {
                            const BackgroundProjectImage = styled.div`
                                width: 100%;
                                border-radius: .25rem;
                                background: url(${project.imageUrl});
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                            `
                            return (
                                <div className='project-components-item' key={key}>
                                    <div className='image'>
                                        <div className='bar'></div>
                                        <BackgroundProjectImage/>
                                    </div>
                                    <div className='text'>
                                        <h3>{project.projectName}</h3>
                                        <p><small>{project.projectDescription}</small></p>
                                        <span><small>Tecnologias usadas no projeto: <b>{project.technology}</b></small></span>
                                    </div>
                                    <div className='button' onClick={() => project.projectUrl ? window.open(project.projectUrl, '_blank') : null}>
                                        <Link id='svg'/>
                                        <h3>Visualizar</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}