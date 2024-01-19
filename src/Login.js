import React, { useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
const Login = () => {
  
  const [state, setState] = useState({
    txt1: "",
    txt2: "",
  });

  const nametxt = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const namebtn = () => {
    localStorage.setItem("Username", state.txt1);
    localStorage.setItem("Password", state.txt2);
    alert("Registered Successfully")
  };

  
  var nav=useNavigate()
  const getData = () => {
    let Username = localStorage.getItem("Username");
    let Password = localStorage.getItem("Password");

    if (state.txt1 === Username && state.txt2 === Password) {
      alert("Login successfully");
      nav("/Home")
    } else if (state.txt1 !== Username && state.txt2 !== Password) {
      alert("Both are invalid & Signup.......");
    } else if (state.txt1 !== Username) {
      alert("Username is incorrect");
    } else {
      alert("Password is incorrect");
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Application
            <br /> Login Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className="main" style={{ paddingLeft: "5%" }}>
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  name="txt1"
                  onChange={nametxt}
                  className="form-control"
                  placeholder="User Name"
                />
              </div>{" "}
              <br />
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="txt2"
                  onChange={nametxt}
                  className="form-control"
                  placeholder="Password"
                />
              </div>{" "}
              <br />
              <button
                type="submit"
                className="btn btn-black"
                onClick={getData}
              >
                Login
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={namebtn}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
