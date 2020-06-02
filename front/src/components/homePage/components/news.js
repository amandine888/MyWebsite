import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

// import CSS : 
import './../../../css/Mystyle.css'; 

//Material UI : 
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const logStyle = {
    color : 'black',
    width : '70vw',
    height: '60px',
    backgroundColor: '#B75D69',
    marginBottom: '10vh', 
}

class News extends React.Component {
    render () {
        return (
            <div className="hello">
                <div className='newsContainer'>
                    <p>Les événements de la semaine</p>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>
                <div className="eventContainer">
                    <Button variant="contained" type="button" style={logStyle}>Découvrir tous les événements</Button>
                </div>
            </div>
        )
    }
}

export default withRouter (News)