import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserDetails = ({ userId, fetchUser, users }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  const renderUser = users.find((user) => user.id === userId);

  if (!renderUser) {
    return null;
  }
  return <div className="ui header">{renderUser.name}</div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserDetails);
