import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Connexion from './components/Connexion'; 

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/Connexion' component={Connexion}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
