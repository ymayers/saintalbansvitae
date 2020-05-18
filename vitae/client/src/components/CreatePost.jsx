import React, { Component } from "react";

import "./CreatePost.css"

class CreatePost extends Component {
  state = {
    image_url: "",
    content: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }



  render() {
    const { image_url, content } = this.state;

    return (
      <div className="create-post">
        
        <section className="post-form-holder">
          
          <div></div>
          <section className="post-form-container">
          <h2 className="create-post-heading">Create Post</h2>
      <form className="create-post-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.createPost(this.state)
        this.props.history.push('/posts');
            }}>

        <label className="sign" htmlFor="image_url">Image URL:</label>      
        <input
          id="image_url"
          name="image_url"
          type="text"
          onChange={this.handleChange}
          value={image_url}
              />

        <label className="sign" htmlFor="content">Content:</label>    
        <textarea
          id="content"
          name="content"
                type="text"
                rows={5}
                value={content}
          onChange={this.handleChange}
                
              />
        
        <button className="submit-button">Submit</button>
            </form>
            
          </section>
          </section>
        </div>

    );
  }
}

export default CreatePost;
