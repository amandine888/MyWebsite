import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import Button from './crudButton'; 

// Material UI : 

import Checkbox from '@material-ui/core/Checkbox';

// import CSS : 

import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

class CrudAsso extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {
            assos: [],
        }

        console.log(this.state.assos)

        // this.removeAsso = this.removeAsso.bind (this); 
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
                    this.setState({assos: res})
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

    // removeAsso (id) {

    //     if (window.confirm('Are ou sure ? ')); 

    //     let token = localStorage.getItem('token'); 
    
    //     fetch ("http://localhost:3050/deleteasso/" + id, {
    //         method: "DELETE", 

    //         headers: {  
    //         "Authorization": 'Bearer ' + token,},  
    //     })
    //     .then( res=>{
    //         if(res.status ==200){
    //             res.json().then(res=>{
    //                     console.log('supprimé'); 
    //             })
    //         }
    //     })
    // }; 

    render() {
        return (
            <div>
                <div className='displayInfo'>
                    <div className='infoBarRes'>
                        <Checkbox  size='small' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                        <p>Nom</p>
                        <p>Contact</p>
                        <p>Adresse</p>
                        <p>Catégorie</p>
                        <p>Description</p>
                        <p>Actions</p>
                    </div>
                    
                    {this.state.assos.map((assos, index) =>{
                        
                        return (<div className='listContainer' key={index._id} dataId='id'>
                                    <Button dataId='id' onDelete={this.removeAsso }/>
                                    <div className="displayAsso">
                                        <div className='infoBar'>
                                            <p>Nom</p>
                                            <p>Contact</p>
                                            <p>Adresse</p>
                                            <p>Catégorie</p>
                                            <p>Description</p>
                                        </div>
                                        {/* <Checkbox size='small' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}/> */}
                                        <div className="asso">
                                            <div><li>{assos.nameAsso}</li></div>
                                            <div><li>{assos.contact}</li></div>
                                            <div><li>{assos.address}</li></div>
                                            <div><li>{assos.category}</li></div>
                                            <div><li>{assos.description}</li></div>
                                        </div>
                                    </div>
                                </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter (CrudAsso); 


// An other way : 

    // componentDidMount = () => {
    //     this.getAsso(); 
    // }

    // getAsso = () => {
    //     let token = localStorage.getItem('token'); 
    //     fetch ("http://localhost:3050/assoall", {
    //         method: "GET", 
    //         headers: {"Authorization": 'Bearer ' + token,
    //         Accept : "application/json", 
    //         "Content-Type": "application/json"}
    //     })
    //     .then((response)=>{
    //         const data = response.data; 
    //         this.setState({asso: data})
    //         console.log ('All asso are here !')
    //     })
    //     .catch (error => console.log (error))
    // }

    // displayAsso = (asso) => {
    //     if (!this.state.asso) return null; 

    //     return this.state.asso.map((asso, index)=>(
    //         <div>
    //             <ul key={index}>
    //                 <li>{asso.assoName}</li>
    //             </ul>
    //         </div>
    //     ))
    // }

    // render(){
    //     return(
    //         <div>
    //             {this.displayAsso(this.state.asso)}
    //         </div>
    //     )
    // }