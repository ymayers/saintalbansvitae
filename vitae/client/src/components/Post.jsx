import React from "react";
import { Link } from "react-router-dom"

import "./Post.css"

function Post(props) {
  

  
  return (
    <div className="post-container">
      <h2 className="post-heading">Edit Post</h2>
      {props.post && (
        <>
        <img className="post-image" src={"https://66.media.tumblr.com/ba7f7d7db109cd3b8c81124194e6f675/tumblr_ooxr8h2mlX1qa8arko5_250.gif"
} />
       {/* <img src={props.post.image_url} /> */}
          <div className="post-content">{props.post.content}</div>

          {props.currentUser && props.currentUser.id === props.post.user_id && (
            <>
          
              <Link to={`/posts/${props.post.id}/edit`}><button className="submit-button">Edit</button></Link>
              <button className="submit-button" onClick={() => {
                props.deletePost(props.post.id)
                props.history.push('/posts')
              }}>Delete</button>
            </>
          )}
          {props.post.comments.map((comment) => (
            <p key={comment.id}>{comment.content}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default Post;
