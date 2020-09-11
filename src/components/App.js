import React from "react";
import PageInfo from "./PageInfo";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <PageInfo />
      <PostList />
    </div>
  );
};

export default App;
