import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Connexion from './components/connexion'; 
import Home from './components/home'; 

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/connexion' component={Connexion}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
