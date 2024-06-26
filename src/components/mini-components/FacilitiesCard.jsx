import React from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import sampleLogo from "../../assets/test.jpg";
export const FacilitiesCard = ({ schoolID }) => {
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bjerg.pythonanywhere.com/api/schools-facilities",
          {
            params: { school: schoolID },
          }
        );
        console.log("SchoolID:" + schoolID);
        console.log(response.data); // Log the fetched data to the console
        setSchoolsData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty depen
  return (
    <div className="flex gap-10 w-[100%] grid grid-cols-1 md:grid-cols-2">
      {schoolsData.map((info, index) => (
        <div className="flex flex-col gap-10 items-center">
          <div
            key={index}
            className="flex flex-col border border-2 border-black rounded-xl p-5 gap-3 w-[100%] md:w-[80%] items-center"
          >
            <div className="w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] relative">
              <img
                className="w-full h-full object-cover object-center rounded-xl"
                src={`https://bjerg.pythonanywhere.com/media/${info.facility_image}`}
                alt=""
              />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold text-center ">{info.facility_name}</h1>
              <p className="text-justify">{info.facility_description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilitiesCard;
