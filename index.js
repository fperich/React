import React from 'react';
import { render } from 'react-dom';

/**
 * Components
 */

import CountrySelector from './components/countryselector/CountrySelector';
import Destinations from './components/Destinations/Destinations';
import Map from './components/Map/Map';


const app = (
    <div className="container">

        <div className="h1">React Components</div>

        <div className="row">
            <div className="col-md-3 h3">Country Selector</div>
            <div className="col-md-9">
                <CountrySelector selected="cl" />
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-3 h3">Destinations Menu</div>
            <div className="col-md-9">
                <Destinations />
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 h3">Map</div>
            <div className="col-md-9">
                <Map lat={-33.0158695} lon={-71.5503288} zoom={2} />
            </div>
        </div>
    </div>
)

render(app, document.getElementById('root'));
