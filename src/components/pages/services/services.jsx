import React from 'react';
import { Link } from 'react-router-dom';
import './services.style.scss'

export const Services = () => {

    const servicesBackgroundUrl = process.env.PUBLIC_URL + '/service-2.jpg';

    return (
        <section className="services">
            <div className="services__container">
                <div
                    style={{backgroundImage: `url(${servicesBackgroundUrl})`}}
                    className="services__background">
                </div>
                <button className="services__configurator-button">
                    <Link className="services__link" to={{pathname: '/service-configurator'}}>
                        Konfigurator servisa
                    </Link>
                </button>
            </div>
            <main>
            </main>
        </section>
    )
}
