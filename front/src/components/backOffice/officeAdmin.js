import React from 'react';
import { withRouter } from 'react-router-dom'; 
import FormAsso from './formAsso'; 
import FormEvent from './formEvent';

class OfficeAdmin extends React.Component {

    render () {
        return (
            <div>
                <FormAsso/>
                <FormEvent/>
            </div>
        )
    }
}

export default withRouter (OfficeAdmin); 