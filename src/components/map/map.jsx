import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {icon, map, tileLayer, marker} from 'leaflet';
import {connect} from 'react-redux';
import {offerShape} from '../../prop-types/offer.types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.map = null;
    this._icon = icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._activeIcon = icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });
    this._markers = [];
  }

  _createMarkers() {
    const {coordinates, activeCard} = this.props;

    coordinates.forEach((coords) => {
      const mrk = marker(coords, {
        icon: JSON.stringify(coords) === JSON.stringify(activeCard.coordinates) ? this._activeIcon : this._icon
      });
      mrk.addTo(this.map);
      this._markers.push(marker);
    });
  }

  _resetMarkers() {
    this._markers = [];
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }

    const {city, zoom} = this.props;

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

    this._createMarkers();
  }

  componentDidUpdate() {
    this._resetMarkers();
    this._createMarkers();
  }

  render() {
    return <div ref={this.mapRef} style={{height: `100%`}} />;
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  activeCard: PropTypes.shape({}),
};

Map.defaultProps = {
  activeCard: {},
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

export {Map};

export default connect(mapStateToProps, null)(Map);
