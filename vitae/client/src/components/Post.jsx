import React from "react";
import { Link } from "react-router-dom"

import "./Post.css"

function Post(props) {
  

  
  return (
    <div className="post-container">
      <h2 className="post-heading">Post Detail</h2>
      {props.post && (
        <>
        <img className="post-image" src={props.post.image_url} height="350px" width="475px"alt=""/>
  
          <div className="post-content">{props.post.content}</div>

          {props.currentUser && props.currentUser.id === props.post.user_id && (
            <>
          
              <Link to={`/posts/${props.post.id}/edit`}><button className="submit-button">Edit</button></Link>
              <button className="submit-button" onClick={() => {
                props.deletePost(props.post.id)
                props.history.push('/posts')
              }}>Delete</button>
            </>
          )}{<h2 className="comments">Comments</h2>}
          {props.post.comments.map((comment) => (
            <p className="comment-content" key={comment.id}>{comment.content}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default Post;
