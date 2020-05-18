import React, { Component } from "react";
import "./EditPost.css"

class EditPost extends Component {
  state = {
    image_url: "",
    content: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    if (this.props.post) {
      this.setForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      this.setForm();
    }
  }

  setForm = () => {
    this.setState({
      image_url: this.props.post.image_url,
      content: this.props.post.content,
    });
  };

  render() {
    const { image_url, content } = this.state;

    return (

      <div className="edit-post">
        <h2 className="post-heading">Edit Post</h2>
        <section className="edit-post-form-holder">

          <div></div>
        <section className="edit-post-form-holder2">
      <form className="create-post-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePost(this.props.post.id, this.state)
          this.props.history.push(`/posts/${this.props.post.id}`);
        }}
            >
        <label className="sign" htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          name="image_url"
          type="text"
          onChange={this.handleChange}
                value={image_url}
                className="post-image"
              />
              
      <label className="sign" htmlFor="content">Content:</label> 
        <input
          id="content"
          name="content"
          type="text"
          onChange={this.handleChange}
          value={content}
        />

        <button className="submit-button">Submit</button>
        </form>
          </section>
          </section>
        </div>
    );
  }
}

export default EditPost;
