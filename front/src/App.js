import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'; 

import Home from './components/Home'; 
import Connexion from './components/Connexion'; 
import Useraccount from './components/userAccount';
import AllAsso from './components/associations/components/homeAsso'; 
import Associations from './components/associations/components/association'; 
import AllEvent from './components/eventsF/components/homeEvent'; 
import Events from './components/eventsF/components/events'; 
import LogAdmin from './components/backOffice/components/loginAdmin'; 
import OfficeAdmin from './components/backOffice/components/officeAdmin'; 

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>

          {/* Public route */}
          <Route exact path='/' component={Home}/>
          <Route exact path='/connexion' component={Connexion}/>
          <Route exact path='/associations' component={AllAsso}/>
          <Route exact path='/events' component={AllEvent}/>
          <Route exact path='/infoAsso' component={Associations}/>

          {/*  Route User with an account */}
          <Route exact path='/userAccount' component={Useraccount}/>

          {/* Route Admin */}
          <Route exact path='/logAdmin' component={LogAdmin}/>
          <Route exact path='/office' component={OfficeAdmin}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
