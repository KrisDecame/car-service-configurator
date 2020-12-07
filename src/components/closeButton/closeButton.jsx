import React from 'react';

export const CloseButton = props => {

    const closeButtonLogoUrl = process.env.PUBLIC_URL + '/exit.svg';

    return <button
        className="configurator__close-button"
        onClick={props.onClick}>
            <img src={closeButtonLogoUrl} alt="exit"/>
        </button>
}
