import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';



const AuthContext=createContext();


const AuthProvider = ({children}) => {
const [isLoading,setIsLoading]=useState(true);
const [user,setUser]=useState(null);
const [userProfile,setUserProfile]=useState(false);
const [profile,setProfile]=useState({});
useEffect(()=>{
        axios.get('http://localhost:5000/user/verify',{
                withCredentials:true,
        })
        .then(res=>
        {
               // console.log(user)
                const userData=res?.data?.data;
                console.log(userData)
                setUser(userData);
                console.log(user);
                setIsLoading(false);
                const Profile=res?.data?.profile;
                Profile?setUserProfile(true):setUserProfile(false);
               // setUserProfile(true);
                setProfile(Profile);
               // console.log(user);
        }
         )
        .catch(err=>{
                console.log(err);
                setIsLoading(false);
        });
        console.log(userProfile);
       
},[]);
function logout() {
        axios.post('http://localhost:5000/user/logout', {}, { withCredentials: true })
          .then(response => {
            console.log(response.data.message); 
            setUserProfile(false);
            setUser(null);
            window.location.href = '/SignIn'; 
          })
          .catch(error => {
            // Handle error response
            console.error('Error during logout:', error);
          });
      }



        const authInfo={
                user,
                setUser,
                isLoading,
                setIsLoading,
                userProfile,
                setUserProfile,
                profile,
                setProfile,
                logout

        }
       
        return (
                <div>
                        <AuthContext.Provider value={authInfo}>
                        {children}

                        </AuthContext.Provider>
                </div>
        );
};

AuthProvider.propTypes={
        children:PropTypes.node,
}

export {AuthContext,AuthProvider};