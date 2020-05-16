import React from "react";
import {Link} from "react-router-dom"

function Post(props) {
  

  
  return (
    <div>
      {props.post && (
        <>
          <img src={props.post.image_url} />
          <div>{props.post.content}</div>

          {props.currentUser && props.currentUser.id === props.post.user_id && (
            <>
          
              <Link to={`/posts/${props.post.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => {
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
