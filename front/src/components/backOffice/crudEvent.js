import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import Button from './crudButton'; 

// Material UI : 

import Checkbox from '@material-ui/core/Checkbox';

// import CSS : 

import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

class CrudEvent extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {
            events: [],
        }

        console.log(this.state.events)

        this.removeEvent = this.removeEvent.bind (this); 
    }


    componentDidMount () {
        let token = localStorage.getItem('token'); 
        fetch ("http://localhost:3050/eventall", {
            method: "GET", 
            headers: {"Authorization": 'Bearer ' + token,}
        })
        .then (res => {
            if (res.status == 200){
                res.json().then(res=>{
                    this.setState({events: res})
                    console.log(res);
                }) 
            }
            else {
                res.json().then(res=>{
                    console.log(res); 
                })
            }
        })
        .catch(error =>console.log(error)); 
    }; 

    removeEvent = (_id) => {
        if (window.confirm('Are ou sure ? ')); 
        let token = localStorage.getItem('token'); 
    
        fetch ("http://localhost:3050/deletevent/:id" + _id,  {
            method: "DELETE", 
            headers: { 
            "Content-Type": "application/json", 
            "Authorization": 'Bearer ' + token,},  
        })
        .then( res=>{
            if(res.status ==200){
                res.json().then(res=>{
                    const delevent = this.state.events.filter(events => events.id !== events._id); 
                    this.setState({delevent}); 
                        console.log('supprimé'); 
                        console.log(delevent)
                })
            }
        })
    }; 

    render() {
        return (
            <div>
                <div className='displayInfo'>
                    <div className='infoBarRes'>
                        <Checkbox  size='small' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                        <p>Nom</p>
                        <p>Date</p>
                        <p>Adresse</p>
                        <p>Description</p>
                        <p>Actions</p>
                    </div>
                    
                    {this.state.events.map((events, index) =>{
                        
                        return (<ul className='listContainer' key={index.id}>
                                    <Button eventID={index.id} onDelete={this.removeEvent }/>
                                    <div className="displayAsso">
                                        <div className='infoBar'>
                                            <p>Nom</p>
                                            <p>Date</p>
                                            <p>Adresse</p>
                                            <p>Description</p>
                                        </div>
                                        {/* <Checkbox size='small' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}/> */}
                                        <div className="asso">
                                            <div><li>{events.nameEvent}</li></div>
                                            <div><li>{events.dateEvent}</li></div>
                                            <div><li>{events.address}</li></div>
                                            <div><li>{events.description}</li></div>
                                        </div>
                                    </div>
                                </ul>)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter (CrudEvent); 