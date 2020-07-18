import React, {PureComponent, createRef, RefObject} from 'react';
import {
  icon,
  map,
  tileLayer,
  marker,
  Map as LeafletMap,
  Icon,
  Marker,
  LatLngTuple,
  LatLngExpression
} from 'leaflet';
import {connect} from 'react-redux';

type MapProps = {
  coordinates: LatLngTuple[] | number[][];
  activeCard: number[];
  city: LatLngTuple | LatLngExpression;
  zoom: number;
};

class Map extends PureComponent<MapProps> {
  mapRef: RefObject<HTMLDivElement>;
  map: LeafletMap;
  _icon: Icon;
  _activeIcon: Icon;
  _markers: Marker[];

  constructor(props) {
    super(props);
    this.mapRef = createRef();
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

    coordinates.forEach((coords) => {
      const mrk = marker(coords, {
        icon: JSON.stringify(coords) === JSON.stringify(activeCard) ? this._activeIcon : this._icon
      });
      mrk.addTo(this.map);
      // @ts-ignore
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
      center: city,
      zoomControl: false,
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

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

export {Map};

export default connect(mapStateToProps, null)(Map);
