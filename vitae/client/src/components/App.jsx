import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

// import Main from "./Main";
import Header from "./shared/Header"
import Signin from "./Signin"
import Signup from "./Signup"

import "./App.css";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "../services/api-helper";

class App extends Component {
  state = {
      currentUser: null,
  
  }

  componentDidMount() {
    this.confirmUser();
  };
  
  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData)
    this.setState({ currentUser })

  }

  handleRegister = async (registerData) => {
  const currentUser = await registerUser(registerData)
  this.setState({currentUser})
  }

  confirmUser = async () => {
    const currentUser = await verifyUser(); //where did verifyUser comefrom?
    this.setState({currentUser})
  }

  handleLogout = () => {
  localStorage.clear();
  this.setState({
    currentUser: null
  })
  removeToken();
  }

  render() {
    return (
      <div className="App">
        <Header handleLogout={this.handleLogout}/>
       <Link to="/"><h1>The Saint Albans Vitae</h1></Link>
         {/* <Main 
        currentUser={this.state.currentUser}
        
        />  */}
          <Route
          path="/signin"
          render={() => (
            <Signin handleLogin={this.handleLogin} />   )}
        />
        {/* <Signup handleRegister={this.handleRegister}/> */}
        <Route
          path="/signup"
          render={() => (
            <Signup handleRegister={this.handleRegister} />   )}
        />
      </div>
    );
  }
}

export default withRouter(App);
