import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import Main from "./Main";
import Header from "./shared/Header";
import Signin from "./Signin";
import Signup from "./Signup";
import ShowPosts from './ShowPosts'

import "./App.css";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  getAllPosts
} from "../services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.confirmUser();
    this.readAllPosts();
    // this.readAllComments();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser(); //where did verifyUser comefrom?
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null,
    });
    removeToken();
  };

  readAllPosts = async () => {
    const posts = await getAllPosts();
  this.setState({ posts});
  };
  
//   readAllComments = async () => {
//     const posts = await getAllComments();
//   this.setState({ commemts});
// };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Link to="/">
          <h1>The Saint Albans Vitae</h1>
        </Link>

        <Route
          path="/main"
          render={(props) => (
            <Main {...props} currentUser={this.state.currentUser} />
          )}
        />
        <Route
          path="/signin"
          render={(props) => (
            <Signin {...props} handleLogin={this.handleLogin} />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <Signup {...props} handleRegister={this.handleRegister} />
          )}
        />
       {/* <Route
          path=""
          render={() => ( <ShowPosts posts={this.state.posts}/>
            )}
            /> */}
      
      </div>
    );
  }
}

export default withRouter(App);
