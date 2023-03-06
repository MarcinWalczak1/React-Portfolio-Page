import React, { useState } from "react";
import "./header.scss"

 

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo"></a>

                <div className={Toggle ? "nav_menu show-menu": "nav__menu" }>
                    <ul className="nav__list">
                  
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                Skills
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="/#" className="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={ () => showMenu(!Toggle
                    )}></i>
                </div>
                <div className="nav__toggle" onClick={ () => showMenu(!Toggle
                    )}>
                    <p className="menu">Menu</p>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header