import React, { useState } from 'react';
import './carServicePicker.style.scss';

export const CarServicePicker = props => {

    const {
        services,
        servicePick,
        onCheckAll,
        allServicesChecked,
        totalPrice,
        addCoupon,
        couponAdded,
        couponInput,
        discountPrice,
        revealCouponField,
        couponFieldShown } = props;

    return (
        <div className="service-picker">
            <h4 className="configurator__step-heading">Korak 2. Odaberite jednu ili više usluga po Vašoj želji</h4>
            <div className="service-picker__container">
                {
                    services &&
                        services.map(service => {
                            return (
                                <div key={service.id} className="service-picker__service">
                                    <label htmlFor={service.id}>
                                        {service.service} ({service.price} kn)
                                        <input
                                            name={service.service}
                                            id={service.id}
                                            checked={service.checked}
                                            onChange={servicePick}
                                            type="checkbox">
                                        </input>
                                    </label>
                                </div>
                            )
                        })
                }
                <div className="service-picker__service">
                    <label htmlFor="all">
                        Odaberi sve
                        <input type="checkbox" id="all" checked={allServicesChecked} onChange={onCheckAll} />
                    </label>
                </div>
            </div>
            <div className="service-picker__coupon-block">
                {
                    couponFieldShown ?
                        (couponAdded ?
                            null :
                            <div>
                                <input onChange={couponInput} placeholder="unesi kupon"></input>
                                <button onClick={addCoupon}>Primijeni</button>
                            </div>) :
                        <button onClick={revealCouponField}>Imam kupon</button>
                }
            </div>
            <div className="car-service__total-price-block">
                {couponAdded ?
                    <p className="service-picker__coupon-message--true">Hvala Vam, unijeli ste ispravan kod kupona</p> :
                    (couponAdded === null ?
                    null : <p className="service-picker__coupon-message--false">Kod kupona nije ispravan</p>)
                }
                {
                    discountPrice ?
                        <div>
                            <div>Osnovica {totalPrice.toFixed(2)} kn</div>
                            <div>Popust ({couponAdded.value}%)
                                <h3>
                                    - {(totalPrice - discountPrice).toFixed(2)} kn
                                </h3>
                            </div>
                            <h3>Ukupno {discountPrice.toFixed(2)} kn</h3>
                        </div> :
                        <h3>{totalPrice} kn</h3>
                }
            </div>
        </div>
    )
}
