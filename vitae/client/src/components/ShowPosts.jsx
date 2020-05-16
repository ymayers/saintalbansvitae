import React, { Component } from "react";
import {  getAllPosts} from "../services/api-helper"

class ShowPosts extends Component {
  constructor(props) {
    super(props);
 

  }
  // componentDidMount(){
  
    readAllPosts = async (currentUser_id) => {
      const posts = await getAllPosts(currentUser_id);
    this.setState({ posts});
    };
  // }
  
  render(){
    return (
      <div>
        <h3>Posts</h3>
        {this.state.posts.map((post) => (
          <p key={this.post.id}>{this.post.content}</p>
        ))}
      </div>
    );
  }
  }


export default ShowPosts;
