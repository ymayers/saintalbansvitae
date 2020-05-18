import React from "react";
import { Link } from "react-router-dom";
import "./assets/images/mural4.jpeg"

import "./ShowPosts.css";

function ShowPosts(props) {
  return (
    <div className="posts">
      <h3 className="posts-heading">Latest Posts</h3>
      <div className="posts-cont-2">
        <div className="my-posts">
        
          <h3>My Posts</h3>
          
          <Link className="create-post-link" to="/createpost">
          <button className="create-post-button">Create Post</button>
        </Link>

          </div>
        <div className="posts-cont">
          
          {props.posts.map((post) => (
            <div className="inner-post-cont" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <img
                  className="post-image"
                  height="225px"
                  width="250px"
                  src={post.image_url}
                  alt="SA VITAE"
                />
              </Link>

              <div className="post-content">{post.content}</div>
            </div>
          ))}
        </div>
    
      </div>

    </div>
  );
}
export default ShowPosts;
