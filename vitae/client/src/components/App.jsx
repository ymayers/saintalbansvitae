import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import Landing from "./Landing";
import Header from "./shared/Header";
import Signin from "./Signin";
import Signup from "./Signup";
import ShowPosts from "./ShowPosts";
import Post from "./Post"
import CreatePost from "./CreatePost"
import EditPost from "./EditPost"

import "./App.css";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  getAllPosts,
  makePost,
  putPost,
  destroyPost,
} from "../services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
    posts: [],
    comments: [],
  };

  componentDidMount() {
    this.confirmUser();
    this.readAllPosts();
    // this.readAllComments();
  }

//***************************************************************
//*******************************POSTS***************************
//***************************************************************

  readAllPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  };

  createPost = async (postData) => {

    const newPost = await makePost(postData);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  updatePost = async (id, postData) => {

    const updatedPost = await putPost(id, postData);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        return post.id === parseInt(id) ? updatedPost : post 
      })
    }))
  }

  deletePost = async (id) => {

    const removePost = await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => {
      return post.id !== id
    })}))
  }

//***************************************************************
//*******************************AUTH****************************
//***************************************************************
  
  
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


        <Route
          exact path="/"
          render={() => (
            <Landing/>
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
        <Route
          exact path="/posts"
          render={(props) => <ShowPosts {...props} posts={this.state.posts} />}
        />

        <Route
          exact path="/posts/:id"
          render={(props) => {
            const post = this.state.posts.find((post) => {
              return post.id === parseInt(props.match.params.id)
            })
           return <Post
             {...props}
             currentUser={this.state.currentUser}
             post={post}
             deletePost={this.deletePost}
            />
          }}
        />

        <Route path="/createpost" render={(props) => (
          <CreatePost {...props} createPost={this.createPost}/>
        )} />
        
        <Route
          path="/posts/:id/edit"
          render={(props) => {
            const post = this.state.posts.find((post) => {
              return post.id === parseInt(props.match.params.id)
            })
           return <EditPost
             {...props}
             post={post}
             updatePost={this.updatePost}
            />
          }}
        />


      </div>


    );
  }
}

export default withRouter(App);
