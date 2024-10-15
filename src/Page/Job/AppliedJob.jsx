import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const AppliedJob = ({job}) => {
        const navigate=useNavigate();

        const gotodetails=()=>{
                navigate("/JobDetails",{state:job})
        }
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
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-44 " >
          <img className="w-full  object-fit"
            src={"http://localhost:5000/Images/" + logo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="">{company_name}</p>
          <div className="flex justify-start">
            <button className="px-5 py-2 mr-4 border-[#7E90FE] border rounded text-[#7E90FE mx]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2  border-[#7E90FE] border rounded text-[#7E90FE mx]">
              {job_type}
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={gotodetails}>View Details</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
        job: PropTypes.object,
      };
export default AppliedJob;
