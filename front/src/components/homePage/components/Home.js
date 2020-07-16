import React from 'react';
import {withRouter} from 'react-router-dom';

//import child components :
import Nav from '../../navBar/components/navBar'; 
import Footer from '../../footer/components/Footer';
import DialogSelect from './search';
import Map from '../../map/components/map'; 
import News from './news'; 

// import CSS : 
import './../../../css/Mystyle.css'; 
import './../css/styleHome.css'; 

// Material UI : 
import Button from '@material-ui/core/Button';

// CSS : 
const logStyle = {
    color : 'black',
    width : '70vw',
    height: '50px',
    backgroundColor: '#B75D69',
}

const footerPosition = {
    margin : '0', 
}

// Class component : 

class Home extends React.Component {

    constructor (props) {
        super(props)
    }

    // componentDidMount () {
    //     const url = 'http://localhost:3050/assoall'

    //     fetch (url)
    //     .then (res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 asso: result
    //             }); 
    //             console.log("asso:", this.state.asso)
    //         }, 
    //         (error) =>{
    //             this.setState({
    //                 error
    //             }); 
    //             console.log("error:", this.state.error)
    //         }
    //     )
    // }

    
    render () {
        return (
            <div>
                <Nav/>
                <div className = 'headerContainer'>
                    <h2>Bienvenu chez Circé</h2>
                    <DialogSelect/>
                </div>
                <Map/>
                <div className= 'sectionHome'>
                    <Button variant="contained" type="button" style={logStyle}>Découvrir les associations</Button>
                </div>
                <News/>
                <Footer style = {footerPosition}/>
            </div>
        )
    }
}

export default withRouter (Home);