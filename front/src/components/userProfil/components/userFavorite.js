import React from 'react'; 
import { withRouter } from 'react-router-dom';

// import CSS : 
import '../../../css/Mystyle.css'; 
import '../css/styleUserprofil.css'; 


class Favorite extends React.Component {
    render() {
        return (
            <div>
                <p> je suis un favoris</p>
            </div>
        )
    }
}

export default withRouter (Favorite);