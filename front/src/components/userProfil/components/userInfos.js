import React from 'react'; 
import { withRouter } from 'react-router-dom';

// import CSS : 
import '../../../css/Mystyle.css'; 
import '../css/styleUserprofil.css'; 


class UserInfos extends React.Component {
    render() {
        return (
            <div>
                <p>je suis une info</p>
            </div>
        )
    }
}

export default withRouter (UserInfos); 
