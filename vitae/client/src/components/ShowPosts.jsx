import React from "react";
import { Link } from "react-router-dom";
// import Ella2 from "../assets/images/ellaf2.jpg"

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
                  src={
                    "https://66.media.tumblr.com/ba7f7d7db109cd3b8c81124194e6f675/tumblr_ooxr8h2mlX1qa8arko5_250.gif"
                  }
                />
              </Link>

              <div className="post-content">{post.content}</div>
            </div>
          ))}
        </div>
        {/* <div className="show-post-space"></div> */}
        {/* <Link className="create-post-link" to="/createpost">
          <button className="create-post-button">Create Post</button>
        </Link> */}
      </div>

    </div>
  );
}
export default ShowPosts;
