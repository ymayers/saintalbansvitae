import React from "react";
import { Link } from 'react-router-dom'

function ShowPosts(props) {
  return (
    <div>
      <h3>Posts</h3>

      {props.posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}><img src={post.image_url}/></Link>
          <p>{post.content}</p>
          {/* <p >{post.comments.content}</p> */}
          </div>
      ))}
      <Link to="/createpost"><button>Create Post</button></Link>
    </div>
  );
}
export default ShowPosts;
