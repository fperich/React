import React from 'react'
import _ from 'lodash';

class Destinations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            destinations: {
                southamerica: [
                    { tag: 'argentina', name: 'Argentina' },
                    { tag: 'brazil', name: 'Brazil' },
                    { tag: 'chile', name: 'Chile' },
                    { tag: 'ecuador', name: 'Ecuador' },
                    { tag: 'peru', name: 'Peru' },
                ],
                centralamerica: [
                    { tag: 'caribe', name: 'Caribe' },
                    { tag: 'panama', name: 'Panama' },
                ],
                northamerica: [
                    { tag: 'eeuu', name: 'United States' },
                    { tag: 'mexico', name: 'Mexico' },
                    { tag: 'canada', name: 'Canada' },
                ]
            }
        };

        this.show_destination = this.show_destination.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    showMenu() {
        this.setState({
            show: true
        });
    }

    hideMenu() {
        this.setState({
            show: false
        });
    }

    show_destination(data) {
        console.log('data', data);
    }

    render() {
        // console.log('%c Destinations RENDER', 'background: black; color: white');

        var open = this.state.show ? 'open' : '';

        var destinations = this.state.destinations;

        return (
            <div className="Destinations col-md-12">            
                <ul className="nav navbar-nav nav-help">
                    <li className={"dropdown " + open}>
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle" onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu} >Destinations</a>

                        <ul className="dropdown-menu" onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
                            <div className="col-md-12">
                                <ul className="col-md-4 list-unstyled">
                                    <li className="dropdown-header disabled">South America</li>

                                    {
                                        destinations.southamerica.map((d, i) => {
                                            return <a key={i} href={'#'}><li>{d.name}</li></a>
                                        })
                                    }
                                </ul>

                                <ul className="col-md-4 list-unstyled">
                                    <li className="dropdown-header disabled">Central America</li>

                                    {
                                        destinations.centralamerica.map((d, i) => {
                                            return <a key={i} href={'#'}><li>{d.name}</li></a>
                                        })
                                    }
                                </ul>

                                <ul className="col-md-4 list-unstyled">
                                    <li className="dropdown-header disabled">North America</li>

                                    {
                                        destinations.northamerica.map((d, i) => {
                                            return <a key={i} href={'#'}><li>{d.name}</li></a>
                                        })
                                    }
                                </ul>

                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Destinations;
