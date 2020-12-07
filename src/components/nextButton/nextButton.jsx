import React from 'react';

export const NextButton = props => {

    const { step } = props;

    return (
        step === 5 ?
            null :
            <button
                onClick={props.onClick}
                disabled={props.disabledStatus}
                onKeyDown={props.onClick}
                className='next-button'>
                    {
                        step === 4 ?
                            'Pošalji' :
                            'Dalje'
                    }
            </button>
    )
}
