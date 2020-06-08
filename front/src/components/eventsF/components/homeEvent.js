import React from 'react'
import { withRouter } from 'react-router-dom'

// import child component : 
import Nav from '../../navBar/components/navBar'; 
import DialogSelectEvent from './searchEvent'; 
import Footer from '../../footer/components/Footer';  

// import css : 
import './../../../css/Mystyle.css'; 

class AllEvent extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="headerContainer">
                    <h2>Les événements</h2>
                    <DialogSelectEvent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (AllEvent); 
