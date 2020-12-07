import React from 'react';
import './contactForm.style.scss';

export const ContactForm = props => {
    const {
        submit,
        formInput,
        name,
        phone,
        email,
        remark,
        calcTotalPrice } = props;

    return (
        <div className="contact-form-wrapper">
            <h4 className="configurator__step-heading">Korak 3. Vaši kontakt podaci</h4>
            <form className="contact-form" onSubmit={
                e => {
                    e.preventDefault();
                    calcTotalPrice();
                    submit();
                }}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        onChange={formInput}
                        required
                        placeholder="Ime i prezime*"
                        value={name}
                    />
                    <label htmlFor="phone"></label>
                    <input
                        type="text"
                        id="phone"
                        onChange={formInput}
                        required
                        placeholder="Broj telefona*"
                        value={phone}
                    />
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        id="email"
                        onChange={formInput}
                        required
                        placeholder="Email adresa*"
                        value={email}
                    />
                    <label htmlFor="remark"></label>
                    <textarea
                        name="remark"
                        id="remark"
                        cols="30"
                        rows="10"
                        onChange={formInput}
                        placeholder="Napomena (opcionalno)"
                        value={remark}
                    />
                    <button type="submit">Potvrdi podatke</button>
            </form>
        </div>
    )
}
