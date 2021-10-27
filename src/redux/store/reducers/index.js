import { combineReducers } from "redux";

import filmReducer from "./film.reducer";

export default combineReducers({
  film: filmReducer,
});
