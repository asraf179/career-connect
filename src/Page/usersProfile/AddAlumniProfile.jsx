import axios from "axios";
import { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddAlumniProfile = () => {
  const [image, setImage] = useState(null);
  const [imageSrc,setImageSrc]=useState(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const imageUpload = (e) => {
    e.preventDefault();
    console.log("yes")
    setImage(e.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    //reader.onerror = (error) => {
      //console.log(error);
    //};
  };
  const handleImage = (e) => {
    e.preventDefault();
    console.log(imageRef.current.value);
    setImage(imageRef.current.value);
  };
  const handleBack = () => {
    navigate(-1);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Tab" || event.key == "Enter") {
      event.preventDefault();

      // Insert a tab character ('\t') at the current cursor position
      const { selectionStart, selectionEnd } = event.target;
      const newText =
        text.substring(0, selectionStart) + "\t" + text.substring(selectionEnd);

      setText(newText);

      // Optionally, move the cursor to the position after the inserted tab
      event.target.selectionStart = event.target.selectionEnd =
        selectionStart + 1;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const department = form.department.value;
    const msc = form.msc?.value;
    const phd = form.phd?.value;
    const current_job = form.current_job?.value;
    const current_company = form.current_company?.value;
    const research_field = form.research_field?.value;
    const experience = form.experience?.value;
    const description = form.description.value;
    if (!image) {
      alert("you must upload a pic");
    }
    const formData=new FormData();
    formData.append("name",name);
    formData.append("department",department);
    formData.append("msc",msc);
    formData.append("phd",phd);
    formData.append("current_job",current_job);
    formData.append("current_company",current_company);
    formData.append("research_field",research_field);
    formData.append("experience",experience);
    formData.append("description",description);
    formData.append("image",image);
    formData.append("type","alumni");
    
    console.log(formData)
    
      const userProfile = {
      name,
      department,
      msc,
      phd,
      current_job,
      current_company,
      research_field,
      experience,
      description,
      image:image,
    };
     
   // console.log(userProfile);
    axios.post("http://localhost:5000/user/userprofile", formData, {
      withCredentials:true
    },{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  ).then((res)=>setImageSrc(res.data.photo))
  .catch((err)=>console.log(err));
  };
  return (
    <div className="bg-[#F4F3F0]">
      <div className="my-5 p-7  shadow-sm rounded">
        <IoArrowBack className="" size={30} onClick={handleBack} />
        <p className="text-center font-bold font-serif text-2xl">
          Career Connect
        </p>
      </div>
      <h1 className="text-center p-14 font-rancho text-4xl">
        <span className=" text-[#374151]">Add new alumni Profile</span>
      </h1>
      {/*Form */}
      <div className="mx-24 p-5 ">
        <form
          className=""
          onSubmit={handleSubmit}
         // encType="multipart/form-data"
        >
          {/*Row for name and chef */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter  Name"
                  name="name"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Department</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Department"
                  className="input input-bordered w-full "
                  name="department"
                  required
                />
              </label>
            </div>
          </div>
          {/**Row for MSc and Phd */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Msc</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="msc"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Phd</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full "
                  name="phd"
                />
              </label>
            </div>
          </div>
          {/*Row for supplier and taste */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Current Job</span>
                </div>
                <input
                  type="text"
                  placeholder="About your current job"
                  name="current_job"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Current Company</span>
                </div>
                <input
                  type="text"
                  placeholder="Your current company information"
                  className="input input-bordered w-full "
                  name="current_company"
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
                  placeholder="About Your Research field"
                  name="research_field"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Experience</span>
                </div>
                <input
                  type="text"
                  placeholder="share your experience"
                  className="input input-bordered w-full "
                  name="experience"
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
                  onKeyDown={handleKeyDown}
                  rows="5"
                  cols="30"
                  style={{ resize: "vertical" }}
                  required
                />
              </label>
            </div>
          </div>
          {/*Row for image */}
          <div className="mx-w-2/3 flex gap-4 w-full  my-2">
            <div className="w-2/3 ">
              <label className="form-control w-full ">
                <div className="label w-52 h-52 relative">
                  <span className="label-text font-bold absolute bottom-2">
                    Photo
                  </span>
                </div>
                <input
                  type="text"
                  onChange={handleImage}
                  placeholder="Enter Photo URL"
                  name="photo"
                  ref={imageRef}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-1/3">
              <label className="form-control w-full ">
                <div className="label w-52 h-52 border-2 rounded bg-slate-400">
                  {
                    <img
                      className="max-w-48 max-h-48 w-full h-full"
                      src={
                        imageSrc
                          ? imageSrc
                          : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                      }
                    ></img>
                  }
                </div>
                <input
                  type="file"
                  name="image"
                  className="mt-5"
                  onChange={imageUpload}
                />
              </label>
            </div>
          </div>
          <div className="my-4">
            <button className="btn btn-wide w-full bg-slate-900 font-rancho">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAlumniProfile;
