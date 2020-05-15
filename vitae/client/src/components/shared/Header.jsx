import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      
     {/* {props.currentUser ?
      <React.Fragment>  
          <p>{props.currentUser.username}</p>
          <button onClick={this.props.handleLogout}>Logout</button>
        </React.Fragment>   : ( */}
      <Link to="/signin">Sign In </Link>|
      <Link to='/signup'> Signup</Link>
      {/* )} */}
      <button onClick={props.handleLogout}>Logout</button>
      </header>
  )
}
export default Header
