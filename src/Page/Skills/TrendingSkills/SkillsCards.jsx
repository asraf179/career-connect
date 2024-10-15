import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const SkillsCards = ({ skills, currentPage, pageSize, selectedCategory }) => {
        console.log(currentPage);

  const filteredSkills = skills.filter(
    (skill) => !selectedCategory || skill.category === selectedCategory
  ).slice((currentPage-1)*pageSize ,currentPage*pageSize);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredSkills.map((skill) => (
        <Link to={`/SkillsDetails/${skill.id}`}
          key={skill.id}
          className="p-5 shadow-lg rounded-lg cursor-pointer"
        >
          <div>
            <img src={skill.image} alt="" className="w-full"></img>
          </div>
          <h3 className="mt-4 mb-2  font-bold hover:text-blue-600 cursor-pointer">
            {skill.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2"></FaUser>
            {skill.author}
          </p>
          <p className="text-sm text-gray-500">
            {" "}
            Published:{skill.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};
SkillsCards.propTypes = {
  skills: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  selectedCategory: PropTypes.string,
};
export default SkillsCards;
