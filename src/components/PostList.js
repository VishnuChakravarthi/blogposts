import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserDetails from "./UserDetail";

const PostList = ({ fetchPosts, posts }) => {
  console.log(posts);
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedList = posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large edit middle aligned icon"></i>
        <div className="content">
          <div className="ui header">{post.title}</div>
          <div className="description">{post.body}</div>
          <UserDetails userId={post.userId} />
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPosts,
})(PostList);
