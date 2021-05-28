import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Signup } from "../state/user/userAction";
import "./register.css";

const Register = ({ history }) => {
  const result = useSelector((state) => state.userRegister);

  const { userInfo, error } = result;

  const dispatch = useDispatch();
  const {
    register,

    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Check Password
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    if (userInfo) {
      return history.push("/");
    }
  }, [history, userInfo]);
  const onSubmit = (data) => {
    dispatch(Signup(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{error && <p className="alert alert-danger">{error}</p>}</h2>
      <div className="register_form">
        <h2>Register Here</h2>
        <div className="form_group">
          <label htmlFor="Name">Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="pasword">Password</label>
          <input {...register("password", { required: true })} />
          {errors.password && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="confirmPassword">confirmPassword</label>
          <input
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div className="form_group">
          <label htmlFor="hobby">Select Hobby</label>
          <select {...register("hobby")}>
            <option value="Cricket">Cricket</option>
            <option value="Football">FOOTBALL</option>
            <option value="other">OTHER</option>
          </select>
        </div>

        <div className="form_group ">
          <label htmlFor="gender"> Select Gender</label>
          <div className="gender" {...register("gender", { required: true })}>
            Male <input type="radio" name="gender" value="male" />
            Female <input type="radio" name="gender" value="female" />
            Other <input type="radio" name="gender" value="other" />
          </div>
          {errors.gender && <p>gender is Required</p>}
        </div>

        <button className="register_submit">Submit</button>
      </div>
    </form>
  );
};
export default Register;
