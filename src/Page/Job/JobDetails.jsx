import { useLocation, useNavigate } from "react-router-dom";
import TitleBar from "./TitleBar";
import { CiDollar } from "react-icons/ci";
import { PiSubtitles } from "react-icons/pi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { IoArrowBack } from "react-icons/io5";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import axios from "axios";


const JobDetails = () => {
  const {  userProfile,profile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    _id,
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
  } = location.state || {};
  const { phone, email, address } = contact_information;
 
  const handleBack = () => {
    navigate(-1);
  };
  console.log(profile);
  console.log(_id);
  const handleAppliedJob=()=>{
    if(userProfile==true )
    {
      const information={
        userId:profile._id,
        jobId:_id,
      }
      axios.post('http://localhost:5000/job/appliedJob',information,{
        withCredentials:true
      }).then((res)=>{
        alert('Applied for this Job')
      }).catch((err)=>console.log(err))
    }
    else{
      alert("You should create a profile first.Then can applied a job")
    }
  }
 
 
 

  return (
    <div>
      <div className="flex">
        <div><IoArrowBack className="font-bold justify-center items-center " size={30} onClick={handleBack} /></div>
      <TitleBar title="Job Details"></TitleBar>
      </div>
      <div className="grid grid-cols-3 my-5 gap-3 w-5/6 mx-auto">
        <div className="col-span-2 ">
          <p className="">
            {" "}
            <span className="font-bold">Job Description:</span>{" "}
            {job_description}{" "}
          </p>
          <p className="mt-3">
            <span className="font-bold"> job Responsibility:</span>{" "}
            {job_responsibility}{" "}
          </p>
          <h1 className="font-bold mt-3">Educational Requirements:</h1>
          <p className="mt-2">{educational_requirements}</p>
          <h1 className="font-bold mt-3">Experiences:</h1>
          <p className="mt-2">{experiences}</p>
        </div>
        <div>
          <div className="bg-slate-900 border-zinc-500 border-2 rounded">
            <h1 className="text-md border-neutral-300 border-b-2 font-bold  p-2 mx-2">
              Job details
            </h1>
            <div className="mb-4">
              <div className="mx-2 p-3 flex ">
                <p className=" mt-1 mr-1">
                  <CiDollar></CiDollar>
                </p>
                <p className="mt">
                  <span className="font-semibold">Salary:</span>
                  {salary}
                </p>
              </div>
              <div className="mx-2 p-3 flex">
                <p className="mt-1 mr-1">
                  <PiSubtitles></PiSubtitles>
                </p>
                <p>
                  <span className="font-semibold">Job title:</span>
                  {job_title}
                </p>
              </div>
            </div>
            <h1 className="text-md border-neutral-300 border-b-2  font-bold p-2 mx-2">
              {" "}
              Contact Information
            </h1>
            <div className="mb-4">
              <div className="mx-2 p-3 flex ">
                <p className=" mt-1 mr-1">
                  <MdOutlineLocalPhone></MdOutlineLocalPhone>
                </p>
                <p className="mt">
                  <span className="font-semibold">Phone:</span>
                  {phone}
                </p>
              </div>
              <div className="mx-2 p-3 flex">
                <p className="mt-1 mr-1">
                  <MdEmail></MdEmail>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>
                  {email}
                </p>
              </div>
              <div className="mx-2 p-3 flex">
                <p className="mt-1 mr-1">
                  <CiLocationOn></CiLocationOn>
                </p>
                <p>
                  <span className="font-semibold">Address:</span>
                  {address}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#7E90FE] text-[#FFFFFF] font-extrabold p-3 border rounded mt-2">
            <button  className="w-full" onClick={handleAppliedJob}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
