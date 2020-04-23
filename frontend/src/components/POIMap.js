import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class POIMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    let bounds = new this.props.google.maps.LatLngBounds();
    let points = [];
    for (let i = 0; i < this.props.poiList.length; i++)
      points.push(new this.props.google.maps.LatLng(50, 50));
    for (let i = 0; i < points.length; i++)
      bounds.extend(points[i]);

    return (
      <div className="map">
        <Map onClick={this.onMapClick} google={this.props.google} initialCenter={{lat: this.props.coords[0], lng: this.props.coords[1]}}
             ref={map => map && map.fitBounds(bounds)} bounds={bounds} containerStyle={{position: 'relative', width: "525px", height: "400px"}}>

          {this.props.poiList.map((poi, i) => {
            return (
              <Marker onClick={this.onMarkerClick} title={poi.name} position={{lat: poi.geometry.location.lat, lng: poi.geometry.location.lng}} name={poi.name}/>
            );
          })}

          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div>
              <p className="info-window">{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAY1pilCxM5qWgNJQCeiTPvqz5m2qiHE94')
})(POIMap)