import React from 'react';
import './carModelPicker.style.scss'

export const CarModelPicker = props => {

    const { cars, pickCarModel } = props;

    return (
        <div className="cars">
            <h4 className="configurator__step-heading">Korak 1. Odaberite proizvođača Vašeg vozila</h4>
            {
                cars ?
                    cars.map(car => {
                        return (
                            <div key={car.id} className="cars__car">
                                <label htmlFor={car.id}>
                                    <input
                                        name="car"
                                        id={car.id}
                                        type="radio"
                                        value={car.model}
                                        checked={car.checked}
                                        onChange={pickCarModel}>
                                    </input>
                                    <p>{car.model}</p>
                                </label>
                            </div>
                        )
                    }) :
                    <div className="loading-spinner"></div>
            }
        </div>
    )
}
