import React, { Component } from "react";

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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.createPost(this.state)
        this.props.history.push('/posts');
      }}>
        <input
          id="image_url"
          name="image_url"
          type="text"
          onChange={this.handleChange}
          value={image_url}
        />
        <input
          id="content"
          name="content"
          type="text"
          onChange={this.handleChange}
          value={content} />
        
        <button>Submit</button>
      </form>

    );
  }
}

export default CreatePost;
