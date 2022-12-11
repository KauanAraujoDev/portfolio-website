import React from 'react';

interface PExperiences {
    id: string | number
    active: boolean
    company: string
    onClick: () => void
}

export default function Experiences(props: PExperiences) {
    return (
        <div 
            onClick={props.onClick}
            key={props.id} 
            className='item' 
            id={props.active ? 'active' : 'deactive'}
        >
            <div className='bar'></div>
            <label htmlFor='item'>{props.company}</label>
        </div>
    )
}