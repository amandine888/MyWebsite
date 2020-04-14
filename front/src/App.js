import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Connexion from './components/connexion'; 
import Home from './components/home'; 
import Associations from './components/associations'; 
import Events from './components/events'; 
import LogAdmin from './components/backOffice/loginAdmin'; 
import OfficeAdmin from './components/backOffice/officeAdmin'; 
import Useraccount from './components/userAccount';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/connexion' component={Connexion}/>
          <Route exact path='/userAccount' component={Useraccount}/>
          <Route exact path='/associations' component={Associations}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/logAdmin' component={LogAdmin}/>
          <Route exact path='/office' component={OfficeAdmin}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
