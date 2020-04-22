import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

class CrudAsso extends React.Component {

    constructor (props) {
        super (props); 

        let token = localStorage.getItem ('token'); 
        if (!token) {
            this.props.history.push('/'); 
        }

        this.state = {
            asso: [],
        }
    }

    componentDidMount () {
        let token = localStorage.getItem('token'); 
        fetch ("http://localhost:3050/assoall", {
            method: "GET", 
            headers: {"Authorization": 'Bearer ' + token,}
        })
        .then (res => {
            if (res.status == 200){
                res.json().then(res=>{
                    this.setState({asso: res})
                })
            }
            else {
                res.json().then(res=>{
                    console.log(res); 
                })
            }
        })
        .catch(error =>console.log(error)); 
    }

    render() {
        return (
            <div>
                <div className='displayInfo'>
                    <div className='infoBar'>
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                        <p>Nom</p>
                        <p>Contact</p>
                        <p>Adresse</p>
                        <p>Catégorie</p>
                        <p>Description</p>
                        <p>Actions</p>
                    </div>

                    {this.state.asso.map(function(item, index){
                        let display = "http://localhost:3050/" + item; 

                        return <ul className='listContainer' key={index}>
                                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                <div><li>{item.nameAsso}</li></div>
                                <div><li>{item.contact}</li></div>
                                <div><li>{item.address}</li></div>
                                <div><li>{item.category}</li></div>
                                <div><li>{item.description}</li></div>
                                <IconButton>
                                    <CreateIcon/>
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon/>
                                </IconButton>
                            </ul>
                })}
                </div>
            </div>
        )
    }
}

export default withRouter (CrudAsso); 
