
import { useLocation } from "react-router-dom";

const AddProfile = () => {

  const location = useLocation();
 const{type}=location.state || {};
  return (
    <div className="bg-[#F4F3F0]">
      <h1 className="text-center p-14 font-rancho text-4xl">
        <span className=" text-[#374151]">Add new {type} Profile</span>
      </h1>
      {/*Form */}
      <div className="mx-24 p-5 ">
        <form className="">
          {/*Row for name and chef */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee Name"
                  name="name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">{type==="company"?"Type of Company":"department"}</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee Chef"
                  className="input input-bordered w-full "
                  name={type==="company"?"type_of_company":"department"}
                />
              </label>
            </div>
          </div>
          {/*Row for supplier and taste */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"></span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee Supplier"
                  name="roll"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Interested field</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee Taste"
                  className="input input-bordered w-full "
                  name="interested_field"
                />
              </label>
            </div>
          </div>
          {/*Row for category and details */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
          <div className="w-full ">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-bold">Research Field</span>
          </div>
          <input
            type="text"
            placeholder="Enter coffee Category"
            name="research_field"
            className="input input-bordered w-full "
          />
        </label>
      </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Have you any project?
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Please press the github link of your project"
                  className="input input-bordered w-full "
                  name="details"
                />
              </label>
            </div>
          </div>
          {/**Row for Description */}
          <div className="mx-w-2/3 w-full  my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Description</span>
                </div>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  cols="30"
                />
              </label>
            </div>
          </div>
          {/*Row for image */}
          <div className="mx-w-2/3 w-full  my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Photo</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Photo URL"
                  name="photo"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div className="my-4">
            <button className="btn btn-wide w-full bg-[#D2B48C] font-rancho">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
