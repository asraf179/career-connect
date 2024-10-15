import { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";
const AddStudentProfile = () => {
  const [image,setImage]=useState(null);
  const [imageSrc,setImageSrc]=useState(null);
  const imageRef=useRef(null);
  const navigate=useNavigate();

  const imageUpload=e=>{
    e.preventDefault();
    setImage(e.target.files[0]);
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      
      setImageSrc(reader.result);
    };
    reader.onerror=error=>{
      console.log(error);
    }
  }
  const handleImage=e=>{
    e.preventDefault();
    console.log(imageRef.current.value);
    setImage(imageRef.current.value);
   
  }
  const handleBack=()=>{
    navigate(-1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const department = form.department.value;
    const interested_field = form.interested_field?.value;
    const research_field = form.research_field?.value;
    const participation_or_achievement = form.participation_or_achievement?.value;
    const project = form.project?.value;
    const description = form.description.value;
    if (!image) {
      alert("you must upload a pic");
    }
    const formData=new FormData();
    formData.append("name",name);
    formData.append("department",department);
    formData.append("interested_field",interested_field);
    formData.append("participation_or_achievement",participation_or_achievement);
    formData.append("research_field",research_field);
    formData.append("project",project);
    formData.append("description",description);
    formData.append("image",image);
    formData.append("type","student");
    
     
   // console.log(userProfile);
    axios.post("http://localhost:5000/user/userprofile", formData, {
      withCredentials:true
    },{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  ).then((res)=>swal("Good job!",res.data.message))
  .catch((err)=>console.log(err));
  };
  return (
    <div>
      <div className="bg-[#F4F3F0]">
        <div className="my-5 p-7  shadow-sm rounded">
        <IoArrowBack className="" size={30} onClick={handleBack}/>
        <p className="text-center font-bold font-serif text-2xl">Career Connect</p>
        </div>
        <h1 className="text-center p-14 font-rancho text-4xl">
          <span className=" text-[#374151] font-bold">Add new  Student Profile</span>
        </h1>
        {/*Form */}
        <div className="mx-24 p-5 ">
          <form className="" onSubmit={handleSubmit}>
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
                    placeholder="Enter Your Department Name"
                    className="input input-bordered w-full "
                    name="department"
                  />
                </label>
              </div>
            </div>
            {/*Row for supplier and taste */}
            <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
              <div className="w-full ">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text font-bold">
                      Interested Field
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="About your interest field"
                    name="interested_field"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text font-bold">Research field</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter  Your research field if any
                    "
                    className="input input-bordered w-full "
                    name="research_field"
                  />
                </label>
              </div>
            </div>
            {/*Row for category and details */}
            <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
              <div className="w-full ">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text font-bold">
                      Participation /Achivement
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="if you have any achivement please share"
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
                    name="project"
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
            <div className="mx-w-2/3 flex gap-4 w-full  my-2">
              <div className="w-2/3 ">
                <label className="form-control w-full ">
                  <div className="label w-52 h-52 relative">
                    <span className="label-text font-bold absolute bottom-2">Photo</span>
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
                   {<img className="max-w-48 max-h-48 w-full h-full"
                    src={imageSrc?imageSrc:"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"}></img>}
                  </div>
                  <input
                    type="file"
                    name="research_field"
                    className="mt-5"
                    onChange={imageUpload}
                  />
                </label>
              </div>
            </div>
            <div className="my-4">
              <button className="btn btn-wide w-full bg-blue-300 font-extrabold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudentProfile;
