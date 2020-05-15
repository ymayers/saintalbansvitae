import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Signin extends Component {
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
        this.props.handleLogin(this.state);
        this.props.history.push('/main');
      }}>
        <h3>Sign In</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        
        {/*<Link to="/main"> <button>Submit</button> </Link>*/}
      <button>Submit</button>
      </form>
    )
  }
}

export default Signin;