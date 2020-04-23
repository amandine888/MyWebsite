import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import Button from './crudButton'; 

import Checkbox from '@material-ui/core/Checkbox';

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

        this.removeAsso = this.removeAsso.bind (this); 
    }

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
    }; 

    removeAsso = (assoId) => {
        if (window.confirm('Are ou sure ? ')); 
        let token = localStorage.getItem('token'); 
    
        fetch ("http://localhost:3050/deleteasso/:id" + assoId,  {
            method: "DELETE", 
            headers: {Accept : "application/json", 
            "Content-Type": "application/json", 
            "Authorization": 'Bearer ' + token,}, 
        })
        .then( res=>{
            if(res.status ==200){
                res.json().then(res=>{
                    const assos = this.state.asso.filter(asso =>asso.id !==assoId);
                    this.setState({assos}); 
                        console.log('supprimé'); 
                })
            }
        })
    }; 

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
                    
                    {this.state.asso.map((item, index)=>{
                        
                        return ( <ul className='listContainer' key={index}>
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}/>
                                    {/* <div><li assoId={item.id}></li></div> */}
                                    <div><li>{item.nameAsso}</li></div>
                                    <div><li>{item.contact}</li></div>
                                    <div><li>{item.address}</li></div>
                                    <div><li>{item.category}</li></div>
                                    <div><li>{item.description}</li></div>
                                    <Button assoId={item.id} assoDelete={this.removeAsso }/>
                            </ul>
                        )
                })}
                </div>
            </div>
        )
    }
}

export default withRouter (CrudAsso); 
