import React from 'react';
import { Route, Switch, BrowserRouter as router, Redirect } from 'react-router-dom';
import Login from './component/Pages/Login';
import PrivateRoute from '../src/PrivateRoute';
import Dashboard from './component/Pages/Dashboard';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <router>
          <switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </switch>
        </router>
      </div>
    );
  }
}
export default App;
