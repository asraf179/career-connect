import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'

const SignUpform = () => {
  const [show,setShow]=useState(false);

 



// regular expression
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//showing password view

const handleShow = () => {
  setShow(!show);
};

  const handleSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    const isValidEmail=emailPattern.test(email);
    const isValidPassword=regex.test(password);
    if(!isValidEmail)
    {
      alert("please enter a valid email");
      return;
    }
    
     if(!regex.test(password))
    {
      console.log(isValidPassword);
      console.log("this")
      alert("Please enter a valid password");
      return;
    }
    
    const users={email,password};
  //console.log(users.email)

    axios.post(`http://localhost:5000/user/SignUp`,users)
    .then(res=>{
     
      
        Swal.fire({
          position: "top-end",
          text:res.data.message,
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      
    })
    .catch(err=>{
      console.log(err);
      if(err.response.status==409){
        Swal.fire( err.response.data.message);
      }
      else if(err.response.status===500){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    });



  }
        
  return (
   
    <div className=" ">
      <div className="hero min-h-screen min-w-full bg-base-100">
        <div className="hero-content flex-row-reverse">
          <div className="text-center lg:text-left">
          <img className="max-h-[400px] h-full max-w-[400px] w-full  "
                src="https://i.postimg.cc/K844jTZ3/login.png"
                alt="no pic"
              ></img>
          </div >
          <div className="w-[500px] h-[600px] ">
          <div className="card shrink-0  w-[400px] shadow-2xl bg-base-100 p-8 mx-auto my-4">
          <h1 className="text-3xl text-center font-bold">Register Now!</h1>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative ">
                  <input
                  type={show ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="w-full input input-bordered"
                    required
                  />
                 <span className="absolute right-6 top-4 ">
                    {show ? (
                      <FaEyeSlash onClick={handleShow}></FaEyeSlash>
                    ) : (
                      <FaEye onClick={handleShow}></FaEye>
                    )}
                  </span>
                </div>
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="text-center  mb-6 p-3">
              New to this Website?
              <NavLink className="text-blue-500 underline" to="/SignIn">
                SignIn
              </NavLink>
            </div> 
          </div>
          </div>
          
        </div>
      </div>
    </div>
   
    
   
  );
};

export default SignUpform;
