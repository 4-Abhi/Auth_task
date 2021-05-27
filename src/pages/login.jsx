import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/user/userAction";
import "./login.css";

const Login = ({ history }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const result = useSelector((state) => state.userLogin);

  const { userInfo } = result;

  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);
  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <div>
      <h1>Login Here</h1>
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Email is Required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is Required</p>}
        </div>
        <button type="btn" className="login_submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
