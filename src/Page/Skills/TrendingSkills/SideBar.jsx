import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popularSkills, setPopularSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skills/blog")
      .then((res) => res.json())
      .then((data) => setPopularSkills(data));
  });
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Popular Skills</h3>
        <div>
          {popularSkills.slice(0, 5).map((popularSkill) => (
            <div key={popularSkill.id} className="border-b-1 border-spacing-2 py-2">
              <h4 className="font-medium mb-2">{popularSkill.title}</h4>
              <Link to={`/SkillsDetails/${popularSkill.id}`} className=" text-base font-medium hover:text-sky-500 inline-flex items-center py-1">
              Read More <FaArrowRight className="mt-1 ml-2"></FaArrowRight>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
