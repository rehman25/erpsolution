import React, { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import {appBarBackgroundColorGlobal } from '../../utilities/Colors'

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
          <div className={`col-lg-12 ${style.col}`}>
            <form className={style.form}>
              <h5 onClick={handleLoader}>Login</h5>
              <div>
                <div className="form-group mt-2">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                  <Link to={'/AddSuppliers'} type="submit" className="btn btn-primary mt-2" style={{background:appBarBackgroundColorGlobal}}>
                    Login
                 </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
