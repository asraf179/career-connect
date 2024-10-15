import PropTypes from "prop-types";

import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
const navigate=useNavigate();
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  const gotodetails=()=>{
        navigate("/JobDetails",{state:job})
  }
  return (
    <div className="card shadow-lg  cursor-pointer border-sky-400 border-2">
      <div className=" card-compact w-11/12 bg-base-100 shadow-xl">
        <figure className="p-5">
          <img src={"http://localhost:5000/Images/" + logo} alt="Shoes" className="" />
        </figure>
        <div className="card-body justify-start">
          <h2 className="card-title ">{job_title}</h2>
          <p className="">{company_name}</p>
          <div className="flex justify-start">
            <button className="px-5 py-2 mr-4 border-[#7E90FE] border rounded text-[#7E90FE mx]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2  border-[#7E90FE] border rounded text-[#7E90FE mx]">
              {job_type}
            </button>
          </div>
          <div className="mt-4 flex justify-between">
          <h2 className="flex "><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h2>
          <h2 className="flex"><CiDollar className="text-2xl" />{salary}</h2>
          </div>
          <div className="card-actions justify-center">
            <button
             onClick={gotodetails}
              className="bg-[#7E90FE] text-[#FFFFFF] font-extrabold p-3 border rounded"
            >
              {" "}
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
