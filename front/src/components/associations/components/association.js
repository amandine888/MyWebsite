import React from 'react'; 
import {withRouter, Link} from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

// import child components : 
import Nav from './../../navBar'; 
import Footer from './../../Footer'; 
import Map from './../../map'; 

// import CSS : 
import './../../../css/Mystyle.css'; 

// Material UI : 
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';

// Style Material UI : 
import { styled } from '@material-ui/core/styles';

const ButtonEvent = styled( Button)({
    marginTop: '5vh', 
    marginBottom: '5vh',
    width: '70vw', 
    backgroundColor: '#B75D69',
    color : 'black',
}); 

class Associations extends  React.Component {

    render (){
        return (
            <div>
                <Nav/>
                <div className="headerContainerBis">
                    <h2>Titre asso ici</h2>
                </div>
                <div className='descriptionAsso'>
                    <img></img>
                    <p> Ici description</p>
                    <FavoriteBorderIcon/>
                    <Link>Lien</Link>
                    <p>Ici adresse</p>
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{ height: '50vh', width: '80vw'}}
                        center={[2.3522219, 48.856614]}>
                        {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer> */}
                    </Map>
                    <ButtonEvent variant="contained" type="button">Consulter les événements de l' association</ButtonEvent>
                    <FavoriteBorderIcon/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (Associations);