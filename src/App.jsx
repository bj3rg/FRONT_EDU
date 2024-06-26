import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Admin_Navbar from "./components/mini-components/AdminNavbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Search from "./components/pages/Search";
import Schools from "./components/pages/Schools";
import School_List_College from "./components/pages/Schools-List-College";
import School_List_Senior from "./components/pages/Schools-List-Senior";
import School_List_Junior from "./components/pages/Schools-List-Junior";
import School_List_Elementary from "./components/pages/Schools-List-Elementary";
import School_List_Preschool from "./components/pages/Schools-List-Preschool";
import Main_School from "./components/pages/Main-School";
import Sign_Up from "./components/pages/Sign-Up";
import Login from "./components/pages/Login";
import AdminUpdate from "./components/pages/AdminUpdate";
import AdminAddData from "./components/pages/AdminAddData";
import AdminDelete from "./components/pages/AdminDelete";
import AdminSchool from "./components/pages/AdminSchool";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Navbar />
              <Search />
            </>
          }
        />
        <Route
          path="/schools"
          element={
            <>
              <Navbar />
              <Schools />
            </>
          }
        />
        <Route
          path="/schools/list-college"
          element={
            <>
              <Navbar />
              <School_List_College />
            </>
          }
        />
        <Route
          path="/schools/list-junior"
          element={
            <>
              <Navbar />
              <School_List_Junior />
            </>
          }
        />
        <Route
          path="/schools/list-senior"
          element={
            <>
              <Navbar />
              <School_List_Senior />
            </>
          }
        />
        <Route
          path="/schools/list-elementary"
          element={
            <>
              <Navbar />
              <School_List_Elementary />
            </>
          }
        />
        <Route
          path="/schools/list-preschool"
          element={
            <>
              <Navbar />
              <School_List_Preschool />
            </>
          }
        />
        <Route
          path="/schools/:schoolName/:id/:school_location/:public_private/:school_image/:school_website"
          element={
            <>
              <Navbar />
              <Main_School />
            </>
          }
        />
        <Route
          path="/representative/update-data/:email/:school"
          element={<AdminUpdate />}
        />
        <Route
          path="/representative/add-data/:email/:school_id/:school_name"
          element={<AdminAddData />}
        />
        <Route
          path="/representative/delete-data/:email/:school"
          element={<AdminDelete />}
        />
        <Route
          path="/representative/school-profile/:email/:school"
          element={<AdminSchool />}
        ></Route>
        {/* Route without Navbar */}
        <Route path="/sign-up" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
