import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import SignUp from "../Authentication/SignUP/SignUp";
import Login from "../Authentication/Login/Login";

import PrivateRoutes from "./PrivateRoutes";
import AddStudentProfile from "../Page/usersProfile/AddStudentProfile";

import AddAlumniProfile from "../Page/usersProfile/AddAlumniProfile";
import Profile from "../Page/Profile/Profile";
import DetailsProfile from "../Page/Profile/DetailsProfile";



import ErrorPage from "../shared components/ErrorPage";
import JobHome from "../Page/Job/JobHome";
import Job from "../Page/Job/Job";
import JobDetails from "../Page/Job/JobDetails";
import AppliedJobs from "../Page/Job/AppliedJobs";
import ManageJob from "../Page/Job/ManageJob/ManageJob";
import PostJob from "../Page/Job/ManageJob/PostJob";
import Applicants from "../Page/Job/ManageJob/Applicants";
import TrendingSkills from "../Page/Skills/TrendingSkills/TrendingSkills";
import SkillsDetails from "../Page/Skills/TrendingSkills/SkillsDetails";

const router=createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
                {
                        path:"/",
                        element:<PrivateRoutes><Home></Home></PrivateRoutes>
                },
                {
                        path:"/SignUp",
                        element:<SignUp></SignUp>
                },
                {
                        path:"/SignIn",
                        element:<Login></Login>
                },
                {
                        path:"/Profile",
                        element:<Profile></Profile>
                }
                ,
                {
                        path:"/DetailsProfile",
                        element:<PrivateRoutes><DetailsProfile></DetailsProfile></PrivateRoutes>
                },
                {
                        path:"/ManageJob",
                        element:<PrivateRoutes><ManageJob></ManageJob></PrivateRoutes>
                },
                {
                        path:"/Job",
                        element:<PrivateRoutes><Job></Job></PrivateRoutes>
                },
                {
                        path:"/JobHome",
                        element:<PrivateRoutes><JobHome></JobHome></PrivateRoutes>
                },
                {
                        path:"/AppliedJob",
                        element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
                },
                {
                        path:"/JobDetails",
                        element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>
                },
                {
                        path:"/Applicants",
                        element:<Applicants></Applicants>
                },
                {
                        path:"/TrendingSkills",
                        element:<PrivateRoutes><TrendingSkills></TrendingSkills></PrivateRoutes>
                },
                {
                        path:"/SkillsDetails/:id",
                        element:<PrivateRoutes><SkillsDetails></SkillsDetails></PrivateRoutes>,
                     
                        
                }

          ]
        },
        {
                path:"/AddStudentProfile",
                element:<AddStudentProfile></AddStudentProfile>
        },
        {
                path:"/AddAlumniProfile",
                element:<AddAlumniProfile></AddAlumniProfile>
        },
        {
                path:"/PostJob",
                element:<PrivateRoutes><PostJob></PostJob></PrivateRoutes>
        }
      ])

export default router;