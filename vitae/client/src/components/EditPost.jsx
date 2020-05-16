import React, { Component } from "react";

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePost(this.props.post.id, this.state)
          this.props.history.push(`/posts/${this.props.post.id}`);
        }}
      >
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
          value={content}
        />

        <button>Submit</button>
      </form>
    );
  }
}

export default EditPost;
