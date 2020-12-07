import React from 'react';

export const PrevButton = props => {

    return <button
        disabled={props.disabledStatus}
        onClick={props.onClick}
        className="prev-button">
            Nazad
        </button>
}
