import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
// import Home from './pages/Home'
import Profile from './pages/Profile'
import Header from './components/layouts/Header'
import Register from './pages/Register'
import ProfileUpdate from './pages/ProfileUpdate'
import Logout from './pages/Logout'
import dashboard from './pages/Dashboard'
class App extends Component {
  render() {
    return (
      
      <div className="container">
      <Header/>
        <Switch>
          <PrivateRoute exact path='/' component={Profile}/>
          <PrivateRoute exact path='/profile' component={Profile}/>
          <PrivateRoute path="/dashboard" component ={dashboard}/>
          <PrivateRoute path="/profileUpdate" component ={ProfileUpdate}/>
          <PrivateRoute path="/logout" component ={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </div>
    );
  }
}

export default App;
