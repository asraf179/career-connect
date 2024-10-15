import PropTypes from "prop-types";
const ApplicantPerson = ({person}) => {
        console.log(person);
        const{userType,department,photo}=person;
        return (
                <div className="card card-side bg-base-100 shadow-xl">
                <figure className="max-h-48 max-w-44">
                  <img
                  className="h-full w-full box-content"
                    src={"http://localhost:5000/Images/" +photo}
                    alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">{userType}</h2>
                  <h2 className="card-title justify-center">{department}</h2>
                  <p className="mt-5 font-semibold">Experience:</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary  mt-0">View Details</button>
                  </div>
                </div>
              </div>
        );
};

ApplicantPerson.propTypes = {

person:PropTypes.object,
      };
export default ApplicantPerson;