import React, { Component } from "react";
import { getAllPosts } from "../services/api-helper";

import { Route } from "react-router-dom"

import ShowPosts from './ShowPosts'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentUser: {
      posts: [],
    // }
    }
  }
  
  componentDidMount() {

    

    const {currentUser} = this.props
    if (currentUser) {
      this.readAllPosts()  
      
    }
  }

readAllPosts = async () => {
    const posts = await getAllPosts();
  this.setState({ posts });
};
  
  
render(){
    return (
      <main>
     
        {/* <p>{this.state.currentUser.id}</p> */}
     
          {/* <p>{this.props.currentUser}</p> */}
          {/* <ShowPosts posts={this.props.posts} /> */}
        
        {/* <Route
          path="/posts"
          render={(props) => (
            <ShowPosts {...props} posts={this.props.posts} />
  
          )}
        /> */}
          
      {/* {this.props.posts.map(post => (
        <p key={this.id}>{this.posts.content}</p> &&
        <img key={this.posts.id}src={this.posts.image_url}/>
     )
      )} */}
        <div>hello</div>
        {/* {props.id} */}
        
      </main>
    );
  }
}

export default Main;
