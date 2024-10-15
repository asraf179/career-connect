import axios from "axios";
import AppliedJob from "./AppliedJob";
import Job from "./Job";
import TitleBar from "./TitleBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const { userProfile, profile } = useContext(AuthContext);
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    /**
   *   fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
   */
    if (userProfile) {
      console.log(profile._id);
      console.log(userProfile);
    }
    const params = {
      userID: userProfile ? profile._id : null,
    };
    console.log(params.userID);
    axios
      .get(
        "http://localhost:5000/job/appliedJob",
        { params },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.data.jobs);
        setJobs(res.data.data.jobs);
      })
      .then((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="flex mr-36">
        <div>
          <IoArrowBack
            className="font-bold flex justify-center items-center w-11 h-11  bg-gray-800  hover:bg-sky-700 rounded-full "
            size={30}
            onClick={handleBack}
          />
        </div>
        <div className="w-5/6 mx-auto"><TitleBar title="Applied Job"></TitleBar></div>
      </div>
      <div className="flex flex-col space-y-3 mx-40">
        {jobs.map((Job) => (
          <AppliedJob key={Job.id} job={Job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
