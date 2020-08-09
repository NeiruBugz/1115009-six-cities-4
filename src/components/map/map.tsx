import * as React from 'react';
import {
  icon,
  map,
  tileLayer,
  marker,
  Map as LeafletMap,
  Icon,
  LatLngTuple,
  LatLngExpression
} from 'leaflet';
import {connect} from 'react-redux';
import {City} from "../../types/cities.types";

type MapProps = {
  coordinates: LatLngTuple[] | number[][];
  activeCard: number[];
  city: City;
  zoom: number;
};

class Map extends React.Component<MapProps> {
  mapRef: React.RefObject<HTMLDivElement>;
  map: LeafletMap;
  _icon: Icon;
  _activeIcon: Icon;
  _markers: any[];

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
    this._icon = icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this._activeIcon = icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39],
    });
    this._markers = [];
  }

  _createMarkers() {
    const {coordinates, activeCard} = this.props;

    coordinates.forEach((coords: LatLngExpression) => {
      const mrk = marker(coords, {
        icon: JSON.stringify(coords) === JSON.stringify(activeCard) ? this._activeIcon : this._icon
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

    const {location} = city;

    this.map = map(this.mapRef.current, {
      zoom,
      center: [location.latitude, location.longitude],
      zoomControl: false,
    });

    this.map.setView([location.latitude, location.longitude], zoom);

    tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this._createMarkers();
  }

  componentDidUpdate() {
    this._resetMarkers();
    this._createMarkers();
  }

  shouldComponentUpdate(nextProps: Readonly<MapProps>): boolean {
    return this.props.city.name !== nextProps.city.name;
  }

  render() {
    if (this.map) {
      const {city, zoom} = this.props;
      const {location} = city;
      
      this.map.setView([location.latitude, location.longitude], zoom);
    }
    return <div ref={this.mapRef} style={{height: `100%`}} />;
  }
}

const mapStateToProps = (state) => ({
  activeCard: state.offers.activeCard,
});

export {Map};

export default connect(mapStateToProps, null)(Map);
