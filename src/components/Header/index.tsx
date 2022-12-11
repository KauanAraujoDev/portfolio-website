import React from 'react'

import './style.css'

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <div>
                    <h1>Portfólio</h1>
                    <ul>
                        <li><a href='#introduction'>Home</a></li>
                        <li><a href='#aboutme'>Sobre mim</a></li>
                        <li><a href='#experience'>Experiência</a></li>
                        <li><a href='#projects'>Projetos</a></li>
                    </ul>
                </div>
                <div className='header-separation'></div>
            </header>
        </React.Fragment>
    )
}