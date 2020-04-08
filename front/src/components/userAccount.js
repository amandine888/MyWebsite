import React from 'react'; 
import {withRouter} from 'react-router-dom';
import jwtDecode from 'jwt-decode'; 

class Useraccount extends  React.Component {
    constructor (props) {
        super (props); 

        // let token = localStorage.getItem("token"); 
        // if (!token)
        //     this.props.history.push('/')

        // else {
        //     let decoded = jwtDecode(token); 
        //     if (!token.user)
        //         this.props.history.push('/')
        // }

        // this.state = {
        //     pseudo:  ""
        //     token: token
        // }; 
    }

    // componentDidMount() {
    //     let token = localStorage.getItem("token"); 
    //     let decoded = jwtDecode(token); 
    //     if (!token)
    //         this.props.history.push('/')
    //     else{
    //     let token = localStorage.getItem("token");
    //     fetch("http://localhost:3050/userid", {
    //         method: "GET",
    //         headers:
    //         {
    //             Accept : "application/json", 
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + token},
    //     }) 
    //     .then(res => {
    //         if (res.status == 200) {
    //             res.json().then(res => {
    //                 this.setState({pseudo: res})
    //             })
    //         }
    //         else {
    //             res.json().then(res => {
    //                 console.log(res);
    //             })
    //         }
    //     })
    //     .catch(error => console.log(error));
    // }}

    render (){
        return (
            <div>
                <div>
                    {/* <p>{this.state.pseudo}</p> */}
                </div>
            </div>
        )
    }
}

export default withRouter (Useraccount);