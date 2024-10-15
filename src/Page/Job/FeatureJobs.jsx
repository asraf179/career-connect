
import { useEffect, useState } from "react";
import Job from "../Job/Job";
import axios from "axios";
const FeatureJobs = () => {
        const[jobs,setJobs]=useState([]);
        const [jobsLength,setJobsLength]=useState(4);
        useEffect(()=>
                {
                        axios.get("http://localhost:5000/job/jobs",{
                                withCredentials:true
                        })
                       .then((res)=>{
                        console.log(res.data.data)
                        setJobs(res.data.data)
                       })
                       .catch(err=>console.log(err))
                },[])
        return (
                <div className="m-4 max-w-6xl mx-auto">
                <h1 className="text-5xl font-extrabold text-center p-2">Featured Jobs</h1>
                <p className="text-1xl text-center p-2 m-2">Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-6 text-center">
                        {
                                jobs.slice(0,jobsLength).map(job=><Job key={job.id} job={job}></Job>)
                        }
                </div>
                <div  className={`${jobsLength === jobs.length && "hidden" } text-center`}>
                        <button  onClick={()=>setJobsLength(jobs.length)} className="border rounded bg-[#7E90FE] p-3 text-[#FFFFFF] font-extrabold">See more</button>
                </div>
        </div>
        );
};

export default FeatureJobs;