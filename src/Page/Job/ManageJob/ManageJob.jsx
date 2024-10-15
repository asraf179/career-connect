import { useNavigate } from "react-router-dom";
import PostJob from "./PostJob";
import { useEffect, useState } from "react";
import axios from "axios";
import CreatedJob from "./CreatedJob";
import { IoArrowBack } from "react-icons/io5";


const ManageJob = () => {
  const [createdJob, setCreatedJob] = useState([]);
  const navigate = useNavigate();
  const goPostJob = () => {
    navigate("/PostJob");
  };
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/job/postJob", {
        withCredentials: true,
      })
      .then((res) => {
        setCreatedJob(res?.data?.data);
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="my-6 w-3/4 mx-auto">
      <div>

        <div className="grid grid-cols-5 gap-5   shadow-lg shadow-cyan-500/50  p-5">
        <div className=""><IoArrowBack className="font-bold justify-center items-center w-11 h-11  bg-gray-800  hover:bg-sky-700 rounded-full " size={30} onClick={handleBack} /></div>

          <div className="col-span-3 font-bold flex justify-center items-center ">
            Manage Job
          </div>
          <div className="flex justify-end">
            <button className="btn btn-outline btn-accent" onClick={goPostJob}>
              Post A Job
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-36">
        {createdJob.map((createdjob) => (
          <CreatedJob key={createdjob._id} createdJob={createdjob}></CreatedJob>
        ))}
      </div>
    </div>
  );
};

export default ManageJob;
