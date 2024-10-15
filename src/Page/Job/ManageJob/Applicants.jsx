import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import ApplicantPerson from "./ApplicantPerson";

const Applicants = () => {
        const [applicants,setApplicants]=useState([]);
        const location=useLocation();
        const navigate=useNavigate();
        //console.log(location.state)
        const _id=location.state ;
        const params={
                jobId:_id
        }
        const handleBack = () => {
                navigate(-1);
              };
        //console.log(_id);
        useEffect(()=>{
                axios.get("http://localhost:5000/job/applicantsJob",{params},{
                        withCredentials:true
                }).then((res)=>{
                        console.log(res.data.data)
                        setApplicants(res.data.data);
                }).catch((err)=>console.log(err));
        },[])
        return (
                <div className="w-3/4 mx-auto">
                        length is{applicants.length}
                        <div className="grid grid-cols-5 p-11 shadow-inner shadow-indigo-500/50">
                        <div className=""><IoArrowBack className="font-bold justify-center items-center w-11 h-11  bg-gray-800  hover:bg-sky-700 rounded-full " size={30} onClick={handleBack} /></div>
                        <div className="text-center  col-span-4 font-bold text-lg ">Job Applicants</div>
                        </div>
                        <div className="mt-24">
                                {applicants.map(applicant=><ApplicantPerson key={applicant.user._id} person={applicant.user}></ApplicantPerson>)}
                        </div>
                </div>
        );
};

export default Applicants;