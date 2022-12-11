import React from 'react';
import './style.css'

import { ReactComponent as Powered } from '../../assets/iuricode-logo.svg'

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='footer-container'>
                    <div>
                        <p><small>@ 2022 - Kauan Araujo</small></p>
                        <p><small>Powered By</small> <Powered id='svg'/></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}