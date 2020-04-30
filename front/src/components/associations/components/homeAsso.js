import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

// import child component : 
import Nav from './../../navBar'; 
import SelectTags from './selectTags';
import Footer from './../../Footer';  

// import css : 
import './../../../css/Mystyle.css'; 
import './../css/styleAsso.css'; 

import Link from '@material-ui/core/Link';

class AllAsso extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="headerContainerBis">
                    <h2>Les associations</h2>
                </div>
                <SelectTags/>
                <div className= 'displayAsso'>
                    <div className="fakeContainer"></div>
                    <div className='line'>
                            <Link to= '#'>A</Link>
                            <Link to= '#'>B</Link>
                            <Link to= '#'>C</Link>
                            <Link to= '#'>D</Link>
                            <Link to= '#'>E</Link>
                            <Link to= '#'>F</Link>
                            <Link to= '#'>G</Link>
                            <Link to= '#'>H</Link>
                            <Link to= '#'>I</Link>
                            <Link to= '#'>J</Link>
                            <Link to= '#'>K</Link>
                            <Link to= '#'>L</Link>
                            <Link to= '#'>M</Link>
                            <Link to= '#'>N</Link>
                            <Link to= '#'>O</Link>
                            <Link to= '#'>P</Link>
                            <Link to= '#'>Q</Link>
                            <Link to= '#'>R</Link>
                            <Link to= '#'>S</Link>
                            <Link to= '#'>T</Link>
                            <Link to= '#'>U</Link>
                            <Link to= '#'>V</Link>
                            <Link to= '#'>W</Link>
                            <Link to= '#'>X</Link>
                            <Link to= '#'>Y</Link>
                            <Link to= '#'>Z</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (AllAsso); 
