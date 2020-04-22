import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

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
                {this.state.asso.map(function(item, index){
                    let display = "http://localhost:3050/" + item; 
                    return <ul key={index}>
                        <li>{item.nameAsso}</li>
                        <li>{item.contact}</li>
                        <li>{item.address}</li>
                        <li>{item.category}</li>
                        <li>{item.description}</li></ul>
                })}
            </div>
        )
    }
}

export default withRouter (CrudAsso); 
