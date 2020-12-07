import React from 'react';
import './home.style.scss'

export const Home = () => {

    const headerBackgroundUrl = process.env.PUBLIC_URL + '/service-3.jpg';
    const logoUrl = process.env.PUBLIC_URL + '/tokic-logo.png';

    return (
        <section className="home">
            <div
                style={{backgroundImage: `url(${headerBackgroundUrl})`}}
                className="home__background">
            </div>
            <h1 className="home__title">Sigurnost u pokretu.</h1>
            <img className="home__logo" src={logoUrl} alt="tokić"/>
        </section>
    )
}
