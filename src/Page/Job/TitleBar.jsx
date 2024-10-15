import PropTypes from "prop-types";

const TitleBar = ({ title }) => {

  
  return (
    <div className="bg-gray-700 flex mb-7 w-full  h-44 relative ">
      
      <figure className="absolute w-64 h-48 overflow-hidden ">
        <img
          className="relative bottom-0 max-w-full max-h-full object-cover "
          src="../../../public/Images/bg1.png"
        ></img>
      </figure>
      <div className="text-center my-auto mx-auto text-3xl font-bold">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
TitleBar.propTypes = {
  title: PropTypes.string,
};
export default TitleBar;
