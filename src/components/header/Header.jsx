import React from 'react'

import './header.scss'

const Header = () => (
    <header className="header">
        <a href="/" className="logo">
            <img
                className="logo-img"
                src="https://raw.githubusercontent.com/Mwxyz2022/Project-airport/main/src/image/logo.png"
                alt="logo"
            ></img>
        </a>
        {/* 
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
        </nav> */}
    </header>
)

export default Header

// const Header = () => (
//     <header className="header">
//         <section className="header__container">
//             <a href="/" className="logo">
//                 <img
//                     className="logo-img"
//                     src="https://raw.githubusercontent.com/Mwxyz2022/Project-airport/main/src/image/logo.png"
//                     alt="logo"
//                 ></img>
//             </a>

//             <nav className="navbar">
//                 <a href="#" className="navbar__link">
//                     For passengers
//                 </a>
//                 <a href="#" className="navbar__link">
//                     IEV Services
//                 </a>
//                 <a href="#" className="navbar__link">
//                     VIP
//                 </a>
//                 <a href="#" className="navbar__link">
//                     Corporate
//                 </a>
//                 <a href="#" className="navbar__link">
//                     Press Room
//                 </a>
//                 <button className="navbar__lang__btn">en</button>
//             </nav>
//         </section>
//     </header>
// )
