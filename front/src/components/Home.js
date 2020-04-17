import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './navBar'; 
import Footer from './Footer';
import News from './news'; 
import DialogSelect from './search';
import Map from './map'; 
import './../Mystyle.css';
import Button from '@material-ui/core/Button';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const logStyle = {
    color : 'black',
    width : '70vw',
    height: '50px',
    backgroundColor: '#B75D69',
}

const footerPosition = {
    margin : '0', 
}

class Home extends React.Component {
    
    render () {
        return (
            <div>
                <Nav/>
                <div className = 'headerContainer'>
                    <h2>Bienvenu chez Circé</h2>
                    <DialogSelect/>
                </div>
                <div className= 'sectionHome'>
                    <Button variant="contained" type="button" style={logStyle}>La liste des associations</Button>
                </div>
                <News/>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                    height: '50vh',
                    width: '50vw'
                    }}>
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                    </Layer>
                </Map>
                <Footer style = {footerPosition}/>
            </div>
        )
    }
}

export default withRouter (Home);