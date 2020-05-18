import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <section className="sign-up-container">
        <div className="sign-up-images">
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
        </div>

        <form
          className="sign-up-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleRegister(this.state);
            this.props.history.push("/posts");
          }}
        >
          <h3 className="sign-up-header">Sign up</h3>
          <label className="sign" htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label className="sign" htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          <button className="sign-up-button">Submit</button>
        </form>
        <div className="sign-up-images">
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
          <img
            src="https://imgur.com/UuZebXW.png"
            height="225"
            width="250"
            alt=""
          />
        </div>
      </section>
    );
  }
}

export default Signup;
