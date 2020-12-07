import React from 'react';
import './summary.style.scss';

export const Summary = props => {

    const {
        cars,
        services,
        name,
        phone,
        email,
        remark,
        totalPrice,
        edit,
        couponAdded,
        discountPrice } = props;

    const car = cars.find(car => car.checked === true);

    return (
        <section className="summary">
            <section>
                <h4 className="configurator__step-heading">Korak 4. Pregled i potvrda Vašeg vozila</h4>
                <h5>Molimo Vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb "pošalji" na dnu, za slanje upita za servis.</h5>
            </section>
            <section className="summary__car-services-block">
                <div className="summary__car-block">
                    <div className="summary__block-heading">
                        <h3>Model vozila</h3>
                        <button
                            className="summary__edit-button"
                            onClick={() => edit(1)}>
                                Uredi
                        </button>
                    </div>
                    <p>
                        { car ? car.model : null }
                    </p>
                </div>
                <div className="summary__services-block">
                    <div>
                        <div className="summary__block-heading">
                            <h3>Odabrane usluge</h3>
                            <button
                                onClick={() => edit(2)}
                                className="summary__edit-button">
                                    Uredi
                            </button>
                        </div>
                        <div>
                            {
                                services &&
                                    services
                                        .filter(service => service.checked === true)
                                        .map(service => {
                                            return (
                                                <div
                                                    className="summary__single-service"
                                                    key={service.id}>
                                                        <span>{service.service}</span>
                                                        <span>{service.price.toFixed(2)} kn</span>
                                                </div>)
                                        })
                            }
                        </div>
                    </div>
                        {
                            discountPrice ?
                            <div className="summary__discount-price-block">
                                <div>Popust ({couponAdded.value}%)
                                    <h4>
                                        - {(totalPrice - discountPrice).toFixed(2)} kn
                                    </h4>
                                </div>
                                <h3>Ukupno {discountPrice.toFixed(2)} kn</h3>
                            </div> :
                            <div className="summary__price-block">
                                <h2>{totalPrice.toFixed(2)} kn</h2>
                            </div>
                        }
                </div>
            </section>
            <section className="summary__personal-info-block">
                <div className="summary__block-heading">
                    <h3>Kontakt podaci</h3>
                    <button
                        className="summary__edit-button"
                        onClick={() => edit(3)}>
                            Uredi
                    </button>
                </div>
                <div>
                    <div>
                        <div className="summary__name-block">
                            <h4>Ime i prezime</h4>
                            <p>{name}</p>
                        </div>
                        <div className="summary__email-block">
                            <h4>Email adresa</h4>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div>
                        <div className="summary__phone-block">
                            <h4>Broj telefona</h4>
                            <p>{phone}</p>
                        </div>
                        {
                            remark &&
                                <div className="summary__remark-block">
                                    <h4>Napomena</h4>
                                    <p>{remark}</p>
                                </div>

                        }
                    </div>
                </div>
            </section>
        </section>
    )
}
