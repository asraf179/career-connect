import axios from "axios";
import { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  
         /**
          *  {
      "id": 1,
      "logo": "https://i.postimg.cc/XJvz9WnW/google.png",
      "job_title": "Technical Database Engineer",
      "company_name": "Google LLC",
      "remote_or_onsite": "Remote",
      "location": "Dhaka, Bangladesh",
      "job_type": "Full Time",
      "salary": "100k-150k",
      "job_description": " A UI/UX (User Interface/User ) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
      "educational_requirements": "Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
      "educational_requirements": "Bachelor degree to complete any reputational university.",
      "experience": "2-3 Years in this field.",
      "contact_information": {
        "phone": "01750-00 00 00",
        "email": "info@gmail.com",
        "address": "Dhanmondi 32, Sukrabad Dhaka, Bangladesh",
        "job_seeker":[]
      }
    },
          */
         
  const [logo, setLogo] = useState(null);
  const [logoSrc,setLogoSrc]=useState(null);
  const logoRef = useRef(null);
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const imageUpload = (e) => {
    e.preventDefault();
    console.log("yes");
    setLogo(e.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setLogoSrc(reader.result);
    };
    //reader.onerror = (error) => {
    //console.log(error);
    //};
  };
  const handleLogo = (e) => {
    e.preventDefault();
    console.log(logoRef.current.value);
    setLogo(logoRef.current.value);
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
    const job_title = form.job_title.value;
    const company_name = form.company_name.value;
    const remote_or_onsite = form.remote_or_onsite.value;
    const location  = form.location.value;
    const job_type = form.job_type.value;
    const salary = form.salary.value;
    const job_description = form.job_description.value;
    const educational_requirements = form.educational_requirements?.value;
    const job_responsibility = form.job_responsibility.value;
    const experience=form.experience.value;
    const phone =form.phone.value;
    const email=form.email.value;
    const address=form.address.value;
    console.log(job_title)
    if (!logo) {
      alert("you must upload a pic");
    }
    const formData = new FormData();
    const contact_information={
        phone:phone,
        email:email,
        address:address
    }
    formData.append("job_title", job_title);
    formData.append("company_name", company_name);
    formData.append("remote_or_onsite", remote_or_onsite);
     
    formData.append("location",location );
    formData.append("job_type", job_type);
    formData.append("salary", salary);
    formData.append("job_description", job_description);
    formData.append("job_responsibility", job_responsibility);
    formData.append("experience",experience );


    formData.append("educational_requirements", educational_requirements);
    formData.append("logo", logo);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);

    console.log(formData);
    

    // console.log(userProfile);
    axios
      .post(
        "http://localhost:5000/job/postJob",
        formData,
        {
          withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => setLogoSrc(res.data.photo))
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <div className="my-5 p-7  shadow-lg shadow-indigo-500/50 ">
        <IoArrowBack
          className="shadow-xl border-radius hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          size={30}
          onClick={handleBack}
        />
        <p className="text-center font-bold font-serif text-2xl">
          POST A NEW JOB
        </p>
      </div>

      {/*Form */}
      <div className="mx-24 p-5  w-3/4 mx-auto">
        <form
          className=""
          onSubmit={handleSubmit}
          // encType="multipart/form-data"
        >
          {/*Row for Title and Company Name */}
          <div className="mx-w-2/3 w-full md:flex gap-4 my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> Job Title</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="job_title"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Company Name</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="company_name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/**Row for remote or Onsite and  Job type and location */}
          <div className="mx-w-2/3 w-full md:grid grid-cols-3 gap-4 my-9">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Work Preference</span>
                </div>
                <select
                  id="workPreference"
                  name="remote_or_onsite"
                  className="block appearance-none w-full border  border-sky-600 hover:border-r-emerald-600  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Remote">Remote</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Hybrid">Hybrid</option>

                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Job Type</span>
                </div>
                <select
                  id="jobType"
                  name="job_type"
                  className="block appearance-none w-full  border border-sky-600 hover:border-r-emerald-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Location</span>
                </div>
                <input
                  type="text"
                  placeholder=''
                  name="location"
                  className="block appearance-none w-full  border border-sky-600 hover:border-r-emerald-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
          </div>
          {/*Row for Salary and Educational Requirements and s */}
          <div className="mx-w-2/3 w-full md:grid grid-cols-6 gap-4 my-6">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Salary</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="salary"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-full col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Educational Requirements
                  </span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full "
                  name="educational_requirements"
                />
              </label>
            </div>
            <div className="w-full col-span-2">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">experience</span>
                </div>
                <input
                  type="text"
                  placeholder=""
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
                  <span className="label-text font-bold">Job Description</span>
                </div>
                <textarea
                  id="description"
                  name="job_description"
                  onKeyDown={handleKeyDown}
                  rows="5"
                  cols="30"
                  style={{ resize: "vertical" }}
                  required
                />
              </label>
            </div>
          </div>
          {/* JOb responsibility */}
          <div className="mx-w-2/3 w-full  my-2">
            <div className="w-full ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Job Responsibility
                  </span>
                </div>
                <textarea
                  id="description"
                  name="job_responsibility"
                  onKeyDown={handleKeyDown}
                  rows="2"
                  cols="30"
                  style={{ resize: "vertical" }}
                  required
                />
              </label>
            </div>
          </div>
          {/*Row for contact information image */}
          <div className="mx-w-2/3 flex gap-4 w-full  my-2 font-light">
          <div className="w-3/4 ">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> Phone</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="phone"
                  className="input input-bordered w-full "
                  required
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> Email</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="email"
                  className="input input-bordered w-full "
                  required
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold"> address</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="address"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="w-1/3 mx-a ">
              <label className="form-control w-full ">
                <div className="label w-52 h-52 border-2 rounded bg-slate-400">
                  {
                    <img
                      className="max-w-48 max-h-48 w-full h-full"
                      src={
                        logoSrc
                          ? logoSrc
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

export default PostJob;
