import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";


const SkillsDetails = () => {
  const [skill, setSkill] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/skills/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setSkill(data[0]));
  }, []);
  const {
    title,
    image,

    author,
    published_date,
    reading_time,
    content,
  } = skill;
 console.log(skill)
 console.log(skill.image)
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          SkillDetails
        </h2>
      </div>

      {/**blog Details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-14">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt=" " className="w-full mx-auto rounded"></img>
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2"></FaUser>
            {author}|{published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2"></FaClock>
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500 mb-6">
            <p>
              Welcome back to Found, where we get the stories behind the
              startups. This week, our old friend Darrell Etherington joins
              Becca Szkutak to talk with Professor Esther Rodriguez-Villegas
              from Acurable,{" "}
            </p>
            <br></br>
            <p>
              Welcome back to Found, where we get the stories behind the
              startups. This week, our old friend Darrell Etherington joins
              Becca Szkutak to talk with Professor Esther Rodriguez-Villegas
              from Acurable,{" "}
            </p>
            <br></br>
            <p>
              Welcome back to Found, where we get the stories behind the
              startups. This week, our old friend Darrell Etherington joins
              Becca Szkutak to talk with Professor Esther Rodriguez-Villegas
              from Acurable,{" "}
            </p>
            <br></br>
          </div>
        </div>
        <div className="lg:w-1/2">
        <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
