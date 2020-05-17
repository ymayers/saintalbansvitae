import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      
     {props.currentUser ?
      <React.Fragment>  
          <p>Welcome {props.currentUser.username}!</p>
        <Link to="/"><button onClick={props.handleLogout}>Logout</button></Link>
        </React.Fragment>   : (<>
      <Link to="/signin">Sign In </Link>|
          <Link to='/signup'> Signup</Link>
          
          </>
      )} 
      {/* <Link to='/'> <button onClick={props.handleLogout}>Logout</button></Link>  */}
      <Link to="/posts">
          <h1>The Saint Albans Vitae</h1>
        </Link>
      </header>
  )
}
export default Header
