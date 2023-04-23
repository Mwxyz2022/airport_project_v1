import React from 'react'

import './header.scss'

const Header = () => (
    <header className="header">
        <a href="/" className="logo">
            <img
                className="logo-img"
                src="https://github.com/Mwxyz2022/airport_project_v2/blob/main/src/image/logo.png?raw=true"
                alt="logo"
            ></img>
        </a>

        <button className="navbar__btn">
            <i className="fa-solid fa-bars"></i>
        </button>

        <nav className="navbar">
            <a href="#" className="navbar__link">
                For passengers
            </a>
            <a href="#" className="navbar__link">
                IEV Services
            </a>
            <a href="#" className="navbar__link">
                VIP
            </a>
            <a href="#" className="navbar__link">
                Corporate
            </a>
            <a href="#" className="navbar__link">
                Press Room
            </a>
            <button className="navbar__lang-btn">en</button>
        </nav>
    </header>
)

export default Header
