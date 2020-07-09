import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {icon, map, tileLayer, marker} from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.map = null;
    this._icon = icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }

    const {city, zoom, coordinates} = this.props;
    const {_icon} = this;

    this.map = map(this.mapRef.current, {
      zoom,
      city,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(city, zoom);

    tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    coordinates.forEach((offer) => marker(offer, {_icon}).addTo(this.map));
  }

  componentDidUpdate(prevProps) {
    const {_icon} = this;
    const {city, coordinates} = this.props;
    if (city !== prevProps.city) {
      this.map.setView(this.props.city);
      coordinates.forEach((offer) => marker(offer, {_icon}).addTo(this.map));
    }
  }

  render() {
    return <div ref={this.mapRef} style={{height: `100%`}} />;
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Map;
