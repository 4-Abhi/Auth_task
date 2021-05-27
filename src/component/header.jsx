import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../state/user/userAction";

const Header = () => {
  const { userInfo: user } = useSelector((state) => state.userLogin);

  return (
    <div className="header_heading">
      <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              {user && (
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link profile" to="/profile">
                      {user.name}
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <a
                      className="nav-link logout"
                      href="/"
                      onClick={() => logout()}
                    >
                      Logout
                    </a>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link ">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
