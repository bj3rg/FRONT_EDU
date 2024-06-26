import React from "react";
import img1 from "../../assets/techno1.png";
import style from "../css/Home.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mt-15 lg:mt-24">
      <div className="flex flex-col w-[80%] lg:w-[80%] lg:flex-row justify-center">
        <div className="flex flex-col gap-2">
          <div className="mt-10">
            <h1 className="text-5xl sm:text-7xl text-center lg:text-start text-blue-800 mb-6">
              Your next
            </h1>
            <h1 className="text-5xl sm:text-7xl text-center text-blue-800">
              Navi-Gateway
            </h1>
          </div>
          <p className="mt-5 mb-6 text-justify ml-5 mr-5 lg:ml-0 lg:mr-0 leading-7">
            Discover your ideal school with EduKumpas, the ultimate platform for
            students and parents. Find detailed information, compare schools,
            and simplify your school search, all in one place!
          </p>
          <div className="flex flex-col justify-center items-center md:flex-row  gap-5 md:gap-10">
            <NavLink to="/search">
              <button className={style.searchButton}>FIND SCHOOL</button>
            </NavLink>
            <button
              className={style.addButton}
              onClick={() => navigate("/login")}
            >
              ADD YOUR SCHOOL
            </button>
          </div>
        </div>

        <img src={img1} alt="" className="w-full lg:w-2/4  p-5" />
      </div>
    </div>
  );
};

export default Home;
1;
