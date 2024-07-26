import React, { useState } from "react";
import Modals from "../../components/modal/Modal";
import Toast from "../../utilities/Extend/Toast/Toast";
import Loader from "../../utilities/Extend/loading/Loader";
import SkeletonLoader from "../../utilities/Extend/skeleton/Skeleton";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import style from "./Login.module.css";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [skeleton, SetSkeleton] = useState(false);
  const handleLoader = () => {
    setLoader(true);
  };
  return (
    <>
      <div className="container">
        <div className={`row ${style.row}`}>
          <div className="col-lg-6">
            <form>
              <h1 onClick={handleLoader}>Login</h1>
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
