import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts: PostReducer,
  users: UserReducer,
});
