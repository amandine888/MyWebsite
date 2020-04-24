import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

class Button extends Component {

    constructor (props) {
        super (props); 
        
    }
    render() {

        const{onDelete}= this.props; 
        const{assoID} = this.props; 

        return (
            <div>
                <IconButton>
                    <CreateIcon/>
                </IconButton>
                <IconButton onClick={()=> onDelete(assoID)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        )
    }
}

export default withRouter (Button); 
