import axios from "axios";
import { useEffect, useState } from "react";
import SingleProfile from "./SingleProfile";
import './Profile.css';

const Profile = () => {
        const [profiles,setProfiles]=useState([]);
        useEffect(()=>{
                axios.get('http://localhost:5000/user/userprofile',{
                        withCredentials:true,
                }).then((res)=>{
                        setProfiles(res.data.data);
                        
                }).catch((err)=>alert(err));
        },[])
        return (
                <div className="mx-24" >
                        <div className="text-center font-semibold">
                          All Profiles
                        </div>
                       <div className="profiles " >
                        {
                        profiles.map((profile)=><SingleProfile key={profile._id} profile={profile}></SingleProfile>)
                        }
                       </div>
                </div>
        );
};

export default Profile;