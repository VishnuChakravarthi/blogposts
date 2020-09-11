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
  return (
    <div>
      <div className="header">
        <i className="small user middle aligned icon"></i>
        {renderUser.name}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserDetails);
