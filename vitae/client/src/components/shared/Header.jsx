import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header(props) {
  return (
    <header>
    
     {props.currentUser ?
      <React.Fragment>  
          <p className="welcome">Welcome {props.currentUser.username}!</p>
        <Link to="/"><button className="logout-button" onClick={props.handleLogout}>Logout</button></Link>
        </React.Fragment>   : (<>
      <Link className="signin" to="/signin">Sign In </Link>|
          <Link className="signin" to='/signup'> Signup</Link>
          
          </>
      )} 
      {/* <Link to='/'> <button onClick={props.handleLogout}>Logout</button></Link>  */}
      <Link to="/posts">
          <h1 className="hero-header">The Saint Albans Vitae</h1>
        </Link>
      </header>
  )
}
export default Header
