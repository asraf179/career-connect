import { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const [show, setShow] = useState(false);
  const emailref = useRef(null);
  const { setUser, setIsLoading, setUserProfile, setProfile } =
    useContext(AuthContext);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleForgetPassword = () => {
    const email = emailref.current.value;
    if (!email) {
      alert("Please enter a correct email");
    } else if (!emailPattern.test(email)) {
      alert("please enter e valid  email");
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };

    axios
      .post("http://localhost:5000/user/signin", user, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res?.data?.user?.email);
        setIsLoading(false);
        console.log(res.data.profile);
        res.data.profile ? setUserProfile(true) : setUserProfile(false);
        setProfile(res.data.profile);
        alert("You are successfully logged in")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-row-reverse">
          <div className="  ">
            <img
              className="max-h-[400px] h-full max-w-[400px] w-full "
              src="https://i.postimg.cc/K844jTZ3/login.png"
              alt="no pic"
            ></img>
          </div>
          <div className="w-[500px] h-[600px] ">
            <div className="card shrink-0  w-[400px] shadow-2xl bg-base-100 p-8 mx-auto my-4">
              <h1 className="text-3xl font-bold text-center">Login now!</h1>
              <form className="card-body" onSubmit={handleLoginSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    ref={emailref}
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
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover"
                      onClick={handleForgetPassword}
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="text-center mb-6 p-3">
                Have an account?
                <NavLink
                  className="text-blue-500 underline text-center"
                  to="/SignUp"
                >
                  SignUp
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
