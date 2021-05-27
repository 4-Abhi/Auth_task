import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { LoginReducer, RegisterReducer } from "./user/userReducer";

// 1 Make Reducer
const reducer = combineReducers({
  userLogin: LoginReducer,
  userRegister: RegisterReducer,
});

// 3 Middleware
const middleware = [thunk];

const userfromlocalstorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// 2 Institial State
const initialState = {
  userLogin: { userInfo: userfromlocalstorage },
};

// 4 Create Store
const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
