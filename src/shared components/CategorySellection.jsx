import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CategorySellection = ({ activeCategory, onSelectedCategory ,categoryData}) => {
  const Sellection=categoryData.map(singleData=>singleData.category)
 //console.log(Sellection)
 // const catagories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center justify-center border-b-2 text-gray-600 font-semibold py-5">
      <button
        onClick={() => onSelectedCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "text-orange-500"}`}
      >
        ALL
      </button>
      {Sellection.map((category) => (
        <button
          key={category}
          onClick={() => onSelectedCategory(category)}
          className={`mr-2 space-x-16 border-1 border-gray-900 shadow-sm ${
            activeCategory === category ? 'text-orange-500' : ""
          }`}
        >{category}</button>
      ))}
    </div>
  );
};
CategorySellection.propTypes = {
      onSelectedCategory:PropTypes.func,
      activeCategory:PropTypes.string,
      categoryData:PropTypes.array
}
export default CategorySellection;
