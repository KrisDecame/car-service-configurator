import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './navbar.style.scss'

export const Navbar = props => {

    const location = useLocation()

    if(location.pathname === '/service-configurator') {
        return null;
    } else {
        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link className="navbar__link" to={{pathname:"/"}}>Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to={{pathname:"/usluge"}}>Usluge</Link>
                    </li>
                </ul>
            </nav>
        )
    };

}
