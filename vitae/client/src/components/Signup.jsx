import React, { Component } from 'react'



class Signup extends Component { 
 state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {

    const { username, password } = this.state;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        // this.props.history.push('/');
      }}>
        <h3>Sign up</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={this.username}
          onChange={this.handleRegister}
        />
        <br />
        <br />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={this.password}
          onChange={this.handleRegister}
        />
        <br />
        
        <button>Submit</button>
      </form>
    )
  }
}

export default Signup