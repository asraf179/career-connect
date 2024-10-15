import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { MdPersonAddAlt1 } from "react-icons/md";
import "./Navbar.css";
import { useContext, useState } from "react";
const Navbar = () => {
  const { user, userProfile,profile ,logout} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Function to close the dropdown when a link is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const navItem = (
    <>
      <li className="mr-3  hover:text-orange-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-3  hover:text-orange-400">
        <NavLink to="/Profile">Profile</NavLink>
      </li>
      <li>
      <details  open={isOpen}  >
        <summary onClick={toggleDropdown} >Job</summary>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li className=" hover:text-orange-400"><NavLink to="/ManageJob" onClick={closeDropdown} >Manage Job</NavLink></li>
          <li className=" hover:text-orange-400"><NavLink to="/JobHome" onClick={closeDropdown}>Job List</NavLink></li>
          <li className=" hover:text-orange-400"><NavLink to="/AppliedJob" onClick={closeDropdown}>Applied Job</NavLink></li>
        </ul>
      </details>
      </li>
      <li className="mr-3  hover:text-orange-400">
        <NavLink to="/HandlePost">Handle Post</NavLink>
      </li>
      <li className="mr-3  hover:text-orange-400">
        <NavLink to="/TrendingSkills">Trending Skills</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-2 border-b-slate-900  rounded-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow"
          >
            {navItem}
            
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold ">Carrer Connect</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}
     
        </ul>
      </div>

      <div className="navbar-end">
      
        <div className="dropdown dropdown-end mr-6">
          {userProfile && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={'http://localhost:5000/Images/'+profile?.photo}
                />
              </div>
            </div>
          )}
          {
            userProfile || (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full relative cursor-pointer">
                  <MdPersonAddAlt1
                    className="addIcon   left-2 top-2"
                    size={30}
                  />
                  <div className="icon-tooltip">Add Profile</div>
                </div>
              </div>
            )

            /*<div className="addProfile relative  cursor-pointer w-12 h-12 bg-slate-400 rounded-full">
          <MdPersonAddAlt1 className="addIcon absolute  left-2 top-2" size={30}/>
          <div className="icon-tooltip">Add Profile</div>
          </div> */
          }

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {
                /**
               *  <a className="justify-between">
              <span className="badge">New</span>
            </a>
               */
                userProfile ? (
                  <a className="justify-between">
                    <NavLink>Profile</NavLink>
                    <span className="badge">New</span>
                  </a>
                ) : (
                  <NavLink to="/AddStudentProfile">
                    <span>Student Profile</span>
                    <span className="badge">New</span>
                  </NavLink>
                )
              }
            </li>
            <li>
              {userProfile ? (
                <a>
                  <NavLink>Update Profile</NavLink>
                </a>
              ) : (
                <NavLink to="/AddAlumniProfile"> Alumni Profile</NavLink>
              )}
            </li>
            <li>
              {userProfile ? (
                <a>
                  <NavLink>Delete Profile</NavLink>
                </a>
              ) : (
                <NavLink to="/AddProfile" state={{ type: "company" }}>
                  {" "}
                  Company Profile
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        {user ? (
        <button   className="btn hover:text-orange-300 " onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/SignIn">
            <a className="btn">LogIn</a>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
