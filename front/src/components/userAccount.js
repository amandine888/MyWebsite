// import React from 'react'; 
// import {withRouter} from 'react-router-dom';
// import decode from 'jwt-decode'; 
// import Nav from './navBar';

// const logStyle = {
//     fontSize: "40px",
// }

// const div = {
//     height: '40vh',
//     marginTop: '40vh',
// }

// class Useraccount extends  React.Component {
//     constructor (props) {
//         super (props); 

//     };

//     getToken (){
//         return localStorage.getItem("token"); 
//     }; 

//     componentDidMount (){
//         fetch('http://localhost:3050/userid')
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }

//     render (){

//         return (
//             <div>
//                 <Nav/>
//                 <div style={div}>
//                     <p style={logStyle}>Hello</p>
//                 </div>
//             </div>
//         )
//     }
// }
// export default withRouter (Useraccount);