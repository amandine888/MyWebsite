import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYW1hMiIsImEiOiJjazk0OGRuMDAwMzM5M29wcHIzNWdrZ2g0In0.BHUKWsC6PDuoCmf6gSR9JQ' 
    });

export default withRouter (Map); 
