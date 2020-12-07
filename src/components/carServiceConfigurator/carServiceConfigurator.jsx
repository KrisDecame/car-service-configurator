import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CarModelPicker } from "../carModelPicker/carModelPicker.jsx";
import { CarServicePicker } from "../carServicePicker/carServicePicker.jsx";
import { ContactForm } from "../contactForm/contactForm.jsx";
import { Summary } from "../summary/summary.jsx";
import { CompletionMessage } from "../completionMessage/completionMessage.jsx";
import { PrevButton } from "../prevButton/prevButton.jsx";
import { NextButton } from "../nextButton/nextButton.jsx";
import { CloseButton } from "../closeButton/closeButton.jsx";
import { keyEventListeners } from "../../js/eventListeners.js";
import './configurator.style.scss'

export const CarServiceConfigurator = props => {

    const [cars, setCars] = useState();
    const [services, setServices] = useState();
    const [coupons, setCoupons] = useState();
    const [allServicesChecked, setAllServicesChecked] = useState(false);
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [remark, setRemark] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [couponAdded, setCouponAdded] = useState(null);
    const [couponInput, setCouponInput] = useState('');
    const [couponFieldShown, setCouponFieldShown] = useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    const firstStep = 1;
    const lastStep = 5;

    // API Functions //

    const getCars = () => {
        fetch('http://localhost:5000/cars')
            .then(response => response.json())
            .then(data => setCars(data))
    }

    const getServices = () => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }

    const getCoupons = () => {
        fetch('http://localhost:5000/coupons')
            .then(response => response.json())
            .then(data => setCoupons(data))
    }

    // Steps generators //

    const prevStep = () => {
        step <= firstStep ? setStep(1) : setStep(step - 1)
    }

    const nextStep = () => {
        cars &&
            cars.some(car => car.checked === true) ?
                (step >= lastStep ? setStep(lastStep) : setStep(step + 1)) :
                setStep(step);
    }

    const onEditButtons = (step) => {
        setStep(step)
    }

    const updateButtonVisibility = () => {
        step === 3?
            setNextButtonDisabled(true) :
            step === 2 ?
                services &&
                    services.some(service => service.checked === true) ?
                        setNextButtonDisabled(false) :
                        setNextButtonDisabled(true)
                :
                cars &&
                    cars.some(car => car.checked === true) ?
                        setNextButtonDisabled(false) :
                        setNextButtonDisabled(true);
    }

    // Cars and Services generators //

    const onPickCarModel = e => {
        cars.forEach(car => car.checked = false);

        const pickedCar = cars.find(item => {
            return Number(item.id) === Number(e.target.id)});

        pickedCar.checked = !pickedCar.checked;

        const carsWithPickedCar = [...cars];
        setCars(carsWithPickedCar);
    }

    const onServicePick = (e) => {
        const checkedService = services.find(item => {
            return Number(item.id) === Number(e.target.id)});

        checkedService.checked = !checkedService.checked;

        const checkedServices = [...services];
        setServices(checkedServices);

        services.some(service => service.checked === false) ?
            setAllServicesChecked(false) :
            setAllServicesChecked(true);

        calcTotalPrice();
    }

    const pickAllServices = e => {
        services.forEach(service => {
            e.target.checked ?
                service.checked = true :
                service.checked = false
        });
        setAllServicesChecked(!allServicesChecked);

        const checkedServices = [...services];
        setServices(checkedServices);
        calcTotalPrice();
    }

    // Price generators //

    const calcTotalPrice = () => {
        let total = 0;
        if (services) {
            for (const service of services) {
                 if (service.checked === true) {
                     total += Number(service.price);
                 }
            }
            setTotalPrice(total);
        }

        if (couponAdded) {
            let discountTotal = 0;
            discountTotal = total - ((Number(couponAdded.value) / 100) * total);
            setDiscountPrice(discountTotal);
        }
    }

    const onCouponInput = e => {
        setCouponInput(e.target.value);
    }

    const onAddCoupon = e => {
        const checkedCoupon = coupons.find(coupon => coupon.code === couponInput);

        if (checkedCoupon) {
            setCouponAdded(checkedCoupon);
        } else {
            setCouponAdded(false)
        }
    }

    const updateCouponFieldVisibility = () => {
        setCouponFieldShown(true);
    }

    // Contact Data Generators

    const onFormInput = (e) => {
        switch (e.target.id) {
            case 'name':
                setName(e.target.value)
                break;

            case 'phone':
                setPhone(e.target.value)
                break;

            case 'email':
                setEmail(e.target.value)
                break;

            case 'remark':
                setRemark(e.target.value)
                break;

            default:
                break;
        }
    }

    keyEventListeners(nextStep, prevStep);

    useEffect(() => {
        getCars();
        getServices();
        getCoupons();
    }, [])

    useEffect(() => {
        calcTotalPrice();
        updateButtonVisibility();
    }, [couponAdded, cars, services, step])

    return (
        <div className="configurator">
            <h3>Konfigurator servisa</h3>
            <div className="configurator__container">
                <Link to={{pathname: '/'}}>
                    <CloseButton
                        onClick={props.onReturnToHomePage} />
                </Link>
                {
                    {
                        1: <CarModelPicker
                                cars={cars}
                                pickCarModel={onPickCarModel} />,

                        2: <CarServicePicker
                                services={services}
                                servicePick={onServicePick}
                                onCheckAll={pickAllServices}
                                allServicesChecked={allServicesChecked}
                                totalPrice={totalPrice}
                                discountPrice={discountPrice}
                                addCoupon={onAddCoupon}
                                couponInput={onCouponInput}
                                couponAdded={couponAdded}
                                calcTotalPrice={calcTotalPrice}
                                revealCouponField={updateCouponFieldVisibility}
                                couponFieldShown={couponFieldShown} />,

                        3: <ContactForm
                                formInput={onFormInput}
                                submit={() => setNextButtonDisabled(false)}
                                step={step}
                                name={name}
                                phone={phone}
                                email={email}
                                remark={remark}
                                calcTotalPrice={calcTotalPrice} />,

                        4: <Summary
                                cars={cars}
                                services={services}
                                name={name}
                                phone={phone}
                                email={email}
                                remark={remark}
                                totalPrice={totalPrice}
                                edit={onEditButtons}
                                couponAdded={couponAdded}
                                discountPrice={discountPrice} />,

                        5: <CompletionMessage />
                    }[step]
                }
                <div className="configurator__progress-buttons-block">
                    {
                        step > 1 && step < 5?
                            <PrevButton
                                onClick={prevStep}
                            /> : null
                    }
                    <NextButton
                        onClick={nextStep}
                        step={step}
                        disabledStatus={nextButtonDisabled}
                    />
                </div>
            </div>
        </div>
    );
}
