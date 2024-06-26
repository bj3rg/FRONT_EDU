import React, { useState } from "react";
import imgTest from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Admin from "./AdminUpdate";
export const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(false);
  const [invalid, setInvalid] = useState("");
  const [unauthorized, setUnauthorized] = useState("");
  const navigate = useNavigate();

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleUser = (e) => {
    setIdentifier(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let data;
    if (identifier && password) {
      // console.log({ identifier, password });
      data = {
        identifier: identifier,
        password: password,
      };
    }

    try {
      const response = await axios.post(
        "https://bjerg.pythonanywhere.com/api/login",
        data
      );

      if (response.data !== "Incorrect user or password") {
        console.log(response);
        const email = response.data.email;
        const school = response.data.school;
        const token = response.data.token;
        sessionStorage.setItem("token", token);
        setCorrect(false);
        navigate(`/representative/school-profile/${email}/${school}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 403) {
        setUnauthorized("Wait until the admin verifies your account");
        setInvalid("");
        setCorrect(true);
      } else {
        setInvalid("Invalid user or password");
        setUnauthorized("");
        setCorrect(true);
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full md:w-3/5 flex flex-col xl:flex-row items-center  justify-center gap-10 bg-white p-8 rounded-lg">
        <div className="flex flex-col w-80">
          <NavLink to="/home">
            <img src={imgTest} alt="" />
          </NavLink>
          <h1 className="leading-7">
            Welcome back to EduKumpas! Log in to your account to explore a world
            of educational opportunities. Stay connected with the latest updates
            and discover the perfect educational path for you. Join EduKumpas
            today!{" "}
            <NavLink to="/home">
              <span className="underline text-sm">
                Click here to visit page
              </span>
            </NavLink>
          </h1>
        </div>
        <div className="flex items-center w-[100%]  lg:w-[60%]  flex-col rounded-md p-2 gap-2">
          <form action="" className="flex flex-col items-end border gap-2 p-8">
            <div className="flex items-center gap-2">
              <label htmlFor="email">Username</label>

              <input
                type="text"
                placeholder="Enter email or username:"
                className="form-control border-2 border rounded-md w-60 p-2"
                onChange={handleUser}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password:"
                className="form-control border-2 border w-60 p-2 rounded-md"
                onChange={handlePass}
              />
            </div>
            {correct && (
              <div className="bg-[#F5656561] text-sm border-[1px] border-[#FF000061] px-[20px] py-[5px] rounded-md">
                <h1>
                  {unauthorized}
                  {invalid}
                </h1>
              </div>
            )}
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded "
                formAction=""
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-xs">Don't have an account?</p>
            <NavLink to="/sign-up">
              <button className="underline flex-end text-xs">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
