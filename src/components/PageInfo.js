import React from "react";

export default () => {
  return (
    <div className="ui container" style={{ padding: "20px" }}>
      <div className="ui icon message">
        <i className="info circle icon"></i>
        <div className="content">
          <div className="ui header">About</div>
          <p className="header">
            This app uses redux-thunk to fetch and displays blog posts with fake
            data from{" "}
            <a
              href="https://jsonplaceholder.typicode.com/posts"
              target="_blank"
            >
              https://jsonplaceholder.typicode.com/posts
            </a>
            .
            <br /> The user id from each post value is used to fetch the user
            data from{" "}
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
            >
              https://jsonplaceholder.typicode.com/users
            </a>
            .<br /> It also uses Lodash memoize function to fetch unique user
            data for each posts in the blog.
          </p>
        </div>
      </div>
    </div>
  );
};
