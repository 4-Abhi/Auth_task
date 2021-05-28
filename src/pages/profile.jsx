// import axios from "axios";

import style from "./profile.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ history }) => {
  const result = useSelector((state) => state.userLogin);
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    hobby: "",
  });

  const { userInfo } = result;

  useEffect(() => {
    async function callServer() {
      if (userInfo) {
        const result = await axios.get(
          `http://localhost:4004/api/user/${userInfo._id}`
        );
        const { data: userdata } = result.data;
        setUser(userdata);
      } else {
        history.push("/");
      }
    }
    callServer();
  }, [userInfo, history]);
  //   console.log("userrrrrr", user);
  return (
    <div className={style.profile}>
      <h2>Your Profile</h2>
      <div className={style.col}>
        <span>Name : </span> <span> {user.name}</span>
      </div>
      <div className={style.col}>
        <span>email : </span> <span>{user.email}</span>
      </div>
      <div className={style.col}>
        <span>hobby : </span> <span> {user.hobby}</span>
      </div>
      <div className={style.col}>
        <span>Gender : </span> <span>{user.gender} </span>
      </div>
    </div>
  );
};

export default Profile;
