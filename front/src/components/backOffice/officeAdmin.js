import React from 'react';
import { withRouter } from 'react-router-dom'; 
import AssoOffice from './assoOffice'; 
import EventOffice from './eventOffice'; 
import CrudAsso from './crudAsso'; 

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 


class OfficeAdmin extends React.Component {

    render () {
        
        return (
            <div>
                <AssoOffice/>
                <CrudAsso/>
                <EventOffice/>
            </div>
        )
    }
}

export default withRouter (OfficeAdmin); 