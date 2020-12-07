import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './completionMessage.style.scss'

export const CompletionMessage = props => {
    const history = useHistory();

    return (
        <div className="completion-message-block">
            <h4>
                Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo Vas u najkraćem mogućem roku.
            </h4>
            <h4>Hvala Vam!</h4>
            <Link to={{pathname: '/'}}>
                <button
                    className="completion-message__return-button">
                        Povratak na početnu stranicu
                </button>
            </Link>
            <Link to={{pathname: '/service-configurator'}}>
                <button
                onClick={() => history.go(0)}
                    className="completion-message__repeat-button">
                        Ponovno pokreni konfigurator
                </button>
            </Link>
        </div>
    )
}
