import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Connexion from './components/Connexion'; 
import Home from './components/Home'; 
import AllAsso from './components/associations/components/homeAsso'; 
import Events from './components/events'; 
import LogAdmin from './components/backOffice/components/loginAdmin'; 
import OfficeAdmin from './components/backOffice/components/officeAdmin'; 
import Useraccount from './components/userAccount';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Connexion' component={Connexion}/>
          <Route exact path='/userAccount' component={Useraccount}/>
          <Route exact path='/associations' component={AllAsso}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/logAdmin' component={LogAdmin}/>
          <Route exact path='/office' component={OfficeAdmin}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
