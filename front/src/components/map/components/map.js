import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'; 

// CSS
import 'mapbox-gl/dist/mapbox-gl.css';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";


// Mapbox API Token : 
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW1hMiIsImEiOiJjazk0OGRuMDAwMzM5M29wcHIzNWdrZ2g0In0.BHUKWsC6PDuoCmf6gSR9JQ'; 

class Map extends React.Component {
    // constructor (props) {
    //     super (props)

        state = {
            viewport: {
                latitude: 48.8534, 
                longitude: 2.3488, 
                zoom: 8, 
            }
        }

    mapRef= React.createRef();

    handleViewportChange = viewport => {
        this.setState({ viewport: { ...this.state.viewport, ...viewport }
        });
    };
    // }

    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    render () {

        const { viewport } = this.state;

        return (
            <div id='map' style={{ height: "100vh" }}>
                <ReactMapGL ref={this.mapRef}
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={this.handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}>
                    <Geocoder
                        mapRef={this.mapRef}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        position="top-left"/>
                </ReactMapGL>
            </div>
        )
    }

}

export default Map; 

