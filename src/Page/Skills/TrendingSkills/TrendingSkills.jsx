import { useEffect, useState } from "react";
import SkillsCards from "./SkillsCards";
import Pagination from "../../../shared components/Pagination";
import CategorySellection from "../../../shared components/CategorySellection";
import SideBar from "./SideBar";
import PieChartComponent from "./PieChartComponent ";

const TrendingSkills = () => {
  const [skills, setSkills] = useState([]);
  const [categoryData,setCategoryData]=useState([]);
  const [currentPage, setCurrentPage ]  = useState(1);
 

  const pageSize = 12;
  const [selectedCategory, setSelectedCategory ] = useState(null);

  const [activeCategory, setActiveCategory ] = useState(null);

  useEffect(() => {
    async function fetchSkills() {
      let url = `http://localhost:5000/skills/blog?pages=${currentPage}&limit=${pageSize}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setSkills(data);
      fetch("http://localhost:5000/skills/category")
      .then(res=>res.json())
      .then(data=>{
 
            setCategoryData(data)
      });
     

    }
    fetchSkills();
  }, [currentPage, selectedCategory, pageSize]);

  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };


  return (
    <div>
      <div className="mb-16 flex items-center justify-center mt-4"><PieChartComponent categoryData={categoryData} ></PieChartComponent></div>
      <div><CategorySellection  onSelectedCategory={handleCategoryChange} activeCategory={activeCategory}  categoryData={categoryData}></CategorySellection></div>
      <div className="flex  gap-12 md:flex-row">
      <div className="">
        
        {
          <SkillsCards
            skills={skills}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          ></SkillsCards>
        }
      </div>
      <div className="">
                <SideBar></SideBar>
        </div>
      </div>
      <div className="my-14">
        {
          <Pagination
            onPageChange={handlePageChange}
            skills={skills}
            pageSize={pageSize}
            currentPage={currentPage}
          ></Pagination>
        }
      </div>
    </div>
  );
};

export default TrendingSkills;
