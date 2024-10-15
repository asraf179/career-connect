import './DetailsProfile.css';
import PropTypes from 'prop-types';
import { useLocation,useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
const DetailsProfile = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const {Profile}=location.state || {};
  const {profile}=Profile;
  const handleBack = () => {
    navigate(-1);
  };
        return (
          <div className="container">
            <div>
            <IoArrowBack className="" size={30} onClick={handleBack} />
            </div>
          <div className="profile-picture">
              <img src={'http://localhost:5000/Images/'+profile.photo} alt="Profile Picture"/>
          </div>
  
          <div className="profile-info">
              <h1>John Doe</h1>
              <p><span className="highlight">Department:</span>{profile.department}</p>
              <p><span className="highlight">Email:</span> {profile.email}</p>
              <p><span className="highlight">User Type:</span> {profile.userType}</p>
          </div>
          {
            profile.userType=='Student' && 
            <div className="details">
                <h3>Interested Field:</h3>
                {profile.interested_field && <p>{profile.interested_field}</p>}
    
                <h3>Research Field:</h3>
                {profile.research_field && <p>{profile.research_field}</p>}
    
                <h3>Participation or Achievement:</h3>
                {profile.participation_or_achievement && <p>{profile.participation_or_achievement}</p>}
    
                <h3>Project:</h3>
               {profile.project &&<p>{profile.project}</p>} 
    
                <h3>Description:</h3>
                <p>{profile.description}</p>
            </div>

           
          }
          {
             profile.userType=='Alumni'&&  <div className="details">
             <h3>MSC:</h3>
             {profile.msc && <p>{profile.msc}</p>}
 
             <h3>Phd:</h3>
             {profile.phd &&  <p>{profile.phd}</p>}
 
             <h3>Current Job:</h3>
             {profile.current_job && <p>{profile.current_job}</p>}
 
             <h3>current_company:</h3>
             {profile.current_company && <p>{profile.current_company}</p> }
 
             <h3>Description:</h3>
             <p>{profile.description}</p>
         </div>
          }
      </div>
        );
};
DetailsProfile.propTypes={
  profile:PropTypes.object.isRequired,
}
export default DetailsProfile;