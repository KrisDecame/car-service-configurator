import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CarServiceConfigurator } from "./components/carServiceConfigurator/carServiceConfigurator.jsx";
import { Home } from "./components/pages/home/home.jsx";
import { Services } from "./components/pages/services/services.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import './scss/main.scss';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                    <Route path='/' component={Navbar} />
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/usluge">
                            <Services></Services>
                        </Route>
                    </Switch>
                    <Route exact path="/service-configurator">
                        <CarServiceConfigurator/>
                    </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
