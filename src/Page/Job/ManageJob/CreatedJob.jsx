import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CreatedJob = ({ createdJob }) => {
  const navigate = useNavigate();

  const goJobApplicants = () => {
    navigate("/Applicants", { state: _id });
  };
  const {
    _id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = createdJob;
  const gotodetails = () => {
    navigate("/JobDetails", { state: createdJob });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      {/**
                         * <figure className="max-w-28 " >
                  <img className="w-full"
                    src={logo}
                    alt="Movie"
                  />
                </figure>
                         */}
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
        <div className="card-actions justify-end flex">
          <button className="btn btn-primary" onClick={goJobApplicants}>
            {" "}
            See Applicants
          </button>
          <button className="btn btn-primary " onClick={gotodetails}>View Details</button>
        </div>
      </div>
    </div>
  );
};
CreatedJob.propTypes = {
  createdJob: PropTypes.object,
};
export default CreatedJob;
