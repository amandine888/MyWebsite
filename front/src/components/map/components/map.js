import React from 'react'; 

// Packages to integrate map : 
import ReactMapGL, {GeolocateControl, NavigationControl} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'; 

// CSS
import 'mapbox-gl/dist/mapbox-gl.css';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./../../map/css/map.css"; 

// Mapbox API Token : 
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW1hMiIsImEiOiJjazk0OGRuMDAwMzM5M29wcHIzNWdrZ2g0In0.BHUKWsC6PDuoCmf6gSR9JQ'; 

// Class Component : 

class Map extends React.Component {

    constructor (props) {
        super (props)

        this.state = {

            asso : [], 

            viewport: {
                height: '100%',
                width: '100%',
                latitude: 48.866667,
                longitude: 2.333333,
                zoom: 12
            }
        }
    }

    myMap = React.createRef(); 

        componentDidMount () {
        const url = 'http://localhost:3050/assoall'

        fetch (url)
        .then (res => res.json())
        .then(
            (result) => {
                this.setState({
                    asso: result
                }); 
                console.log("asso:", this.state.asso)
            }, 
            (error) =>{
                this.setState({
                    error
                }); 
                console.log("error:", this.state.error)
            }
        )
        }

    handleViewportChange = viewport => {
        this.setState({
            viewport: {
                ...this.state.viewport, ...viewport
            }
        })
    }



    render () {
        console.log(this.state.viewport); 

        return (
            
            <div id='map'>
                <div id='mapContainer'style={{ height: "100vh" }}>
                    <ReactMapGL
                        ref={this.myMap}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        {...this.state.viewport}>
                        <Geocoder
                            mapRef={this.myMap}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            onViewportChange={this.handleViewportChange}/>
                        <GeolocateControl/>
                        <NavigationControl/>
                    </ReactMapGL>
                </div>
            </div>
        )
    }
}

export default Map; 

