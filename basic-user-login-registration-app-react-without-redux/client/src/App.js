import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/login/index'
import Register from './components/register/index'
import { routes } from '../src/routes/routes'
class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <Switch>
                <Route exact path="/" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                    {
                        routes.map(r=><Route key={r.path} path={r.path} exact={r.exact} component={r.component} name={r.name} />)
                    }
                    
                  
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
