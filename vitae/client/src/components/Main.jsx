import React, { Component } from "react";
import { Route } from "react-router-dom";

import Signin from "./Sigin";
import Signup from "./Signup";

class Main extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     posts: [],
  //     comments: [],
  //   };
  // }

  // readAllPosts = async () => {
  //   const posts = await getAllPosts();
  //   this.setState({ posts });
  // };
  // readAllComments = async () => {
  //   const flavors = await getAllComments();
  //   this.setState({ foods });
  // };

  render() {
    return (
      <main>
      
            
       
        {/* <Route
          path="/signup"
          render={() => (
            <Signup {...props} handleRegister={this.props.handleRegister} />
            // <Login {...props} />
          )}
        /> */}
        {/* <Route
          path="/flavors"
          render={() => (
            <ShowFlavors flavors={this.state.flavors} />
            // <Login {...props} />
          )}
        />
        <Route
          path="/foods"
          render={() => (
            <ShowFoods foods={this.state.foods} />
            // <Login {...props} />
          )}
        /> */}
      </main>
    );
  }
}

export default Main;
