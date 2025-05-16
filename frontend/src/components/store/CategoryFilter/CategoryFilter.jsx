import React from "react";
import PropTypes from "prop-types";
import "./CategoryFilter.css";

const CategoryFilter = ({ categories = [], selectedCategory, onCategorySelect }) => {
  // Safety check in case onCategorySelect is not a function
const handleSelect = (category) => {
  if (typeof onCategorySelect === "function") {
    if (category === selectedCategory) {
      onCategorySelect(""); // Deselect
    } else {
      onCategorySelect(category);
    }
  } else {
    console.error("onCategorySelect is not a function");
  }
};

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-btn${category === selectedCategory ? " active" : ""}`}
          onClick={() => handleSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
