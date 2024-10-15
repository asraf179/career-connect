import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const SingleProfile = ({ profile }) => {
  const navigate = useNavigate();
  const gotoDetails = () => {
    navigate("/DetailsProfile", { state: { Profile: { profile } } });
  };
  const truncateTextByWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..." // If text has more words than limit, truncate and add ellipsis
      : text; // If text is within limit, return as is
  };
  const { name, department, photo, userType, description } = profile;
  const truncatedDescription = truncateTextByWords(description, 6);
  return (
    <div className="card bg-base-100 w-80  shadow-xl">
      <figure className="px-10  h-60 w-80 m-auto ">
        <img
          src={"http://localhost:5000/Images/" + photo}
          alt="Shoes"
          className="rounded-xl h-full w-full object-cover  "
        />
      </figure>
      <div className="card-body  gap-0">
        <h2 className="card-title  mx-auto">{userType}</h2>
        <p className=" text-stone-700 font-semibold">Name:{name}</p>
        <p className="mx-0">
          <span className="text-sm font-semibold  ">Department</span>:{department}
        </p>
        <p className="mt-2">{truncatedDescription}</p>
        <div className="card-actions mt-2">
          <button className="btn btn-primary mx-auto" onClick={gotoDetails}>See Details</button>
        </div>
      </div>
    </div>
  );
};

SingleProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default SingleProfile;
