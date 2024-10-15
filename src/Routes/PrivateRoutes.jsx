import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';



const PrivateRoutes = ({children}) => {
        const {user,isLoading}=useContext(AuthContext)
        if(isLoading){
             return   <span className="loading loading-dots loading-lg"></span>
        }
        else if(user){
                return children;
        }
        console.log("navigate")
        return (
        <Navigate to="/SignIn"></Navigate>
        );
};
PrivateRoutes.propTypes={
        children:PropTypes.node,
}

export default PrivateRoutes;