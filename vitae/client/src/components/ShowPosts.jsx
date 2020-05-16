import React from "react";
function ShowPosts(props) {
  return (
    <div>
      <h3>Posts</h3>

      {props.posts.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
    </div>
  );
}
export default ShowPosts;
