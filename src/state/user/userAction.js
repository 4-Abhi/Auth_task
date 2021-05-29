import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./userConstranst";
import axios from "axios";

export const login = (userdata) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const { data } = await axios.post("http://localhost:4004/api/user/login", {
      email: userdata.email,
      password: userdata.password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
  } catch (er) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location = "/";
};

export const Signup = (userdata) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post("http://localhost:4004/api/user/signup", {
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
      confirmPassword: userdata.confirmPassword,
      hobby: userdata.hobby,
      gender: userdata.gender,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });
  } catch (er) {
    console.log("errrr", er.response.data.message);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
