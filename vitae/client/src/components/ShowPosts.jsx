import React from "react";
import { Link } from "react-router-dom";
// import Ella2 from "../assets/images/ellaf2.jpg"

import "./ShowPosts.css";

function ShowPosts(props) {
  return (
    <div className="posts">
      <h3 className="posts-heading">Posts</h3>
      <div className="posts-cont-2">
        <React.Fragment className="my-posts">"My Posts"</React.Fragment>
        <div className="posts-cont">
          
          {props.posts.map((post) => (
            <div className="inner-post-cont" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <img
                  className="post-image"
                  src={
                    "https://66.media.tumblr.com/ba7f7d7db109cd3b8c81124194e6f675/tumblr_ooxr8h2mlX1qa8arko5_250.gif"
                  }
                />
              </Link>

              <div className="post-content">{post.content}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="create-post-link">
        <Link to="/createpost">
          <button>Create Post</button>
        </Link>
      </section>
    </div>
  );
}
export default ShowPosts;
