import React from 'react'

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.map = null;

        this.setMap = this.setMap.bind(this);
    }

    componentDidMount() {
        /**
         * inicializar LEAFLET aqui para evitar errores del lado del servidor
         * initiate LEAFLET here to avoid server side errors
         */
        require('leaflet');
        require('leaflet-providers');

        if (!this.map) {
            this.setMap();
        }

    }

    componentWillUnmount() {
        // code to run just before unmounting the component
        // this destroys the Leaflet map object & related event listeners
        if (this.map) {
            this.map.remove();
        }
    }

    setMap() {
        if (!this.props.lat || !this.props.lon) {
            return;
        }

        var lat = parseFloat(this.props.lat);
        var lon = parseFloat(this.props.lon);

        var latlng = new L.LatLng(lat, lon);

        var div = this.refs.map;

        this.map = new L.Map(div, {
            center: latlng,
            zoom: this.props.zoom || 13,
            maxZoom: 18,
            minZoom: 2,
            noWrap: false,
            worldCopyJump: true,
            attributionControl: false,
            zoomControl: false,
        });

        L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(this.map);

        L.control.zoom({
            position: 'topright'
        }).addTo(this.map);

        this.map.invalidateSize();

    }

    render() {
        return (
            <div style={{ width: '100%', height: '400px' }}>
                <div id="map" ref="map" className="map" ></div>
            </div>
        );
    }
}

export default Map;
