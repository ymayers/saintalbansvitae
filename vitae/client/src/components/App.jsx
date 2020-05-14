import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Main from './Main';

import './App.css';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from '../services/api-helper';



class App extends Component {

  state = {
  
    currentUser: null
}

  
  // handleLogin = async (loginData) => {
  //   const currentUser = await loginUser(loginData);
  //   this.setState({currentUser})
  // }

  // handleRegister = async (registerData) => {
  //   const currentUser = await registerUser(registerData);
  //   this.setState({currentUser})
  // }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }
  handleLogout = () => {   
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
     
        <Main
          // handleRegister={this.handleRegister}
          // handleLogin={this.handleLogin}
        />
      </div>
    )
  }
}

export default withRouter(App);
