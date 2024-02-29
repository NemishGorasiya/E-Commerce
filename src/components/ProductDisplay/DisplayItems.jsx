import { useContext, useState, useEffect } from "react";
import DisplaySpecificCategory from "./DisplaySpecificCategory";
import "./DisplayItems.css";

import { productCategories } from "../../constant.js";

const DisplayItems = ({ products }) => {
  const [category, setCategory] = useState("all");
  const [filteredProductsList, setFilteredProductsList] = useState(products);
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredProductsList(products);
  }, [products]);

  useEffect(() => {
    searchAndSort();
  }, [sortValue, searchValue, category]);

  function searchAndSort() {
    let arr = [...products];
    if (category === "all") {
      arr = arr.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else {
      arr = arr.filter((product) => {
        return (
          product.category === category &&
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    switch (sortValue) {
      case "topRatedFirst":
        arr = arr.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "priceHighToLow":
        arr = arr.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        arr = arr.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setFilteredProductsList(arr);
  }
  function clearFilter() {
    setSearchValue("");
    setSortValue("");
  }
  return (
    <div>
      <div className="categories">
        <ul>
          {productCategories.map((category) => (
            <li
              onClick={() => {
                setCategory(category);
              }}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="filters">
        <input
          type="search"
          name="searchProduct"
          id="searchProduct"
          className="searchProduct"
          placeholder="Search here ..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <div className="sortProductWrapper">
          <select
            name="sortProduct"
            id="sortProduct"
            className="sortProduct"
            value={sortValue}
            onChange={(event) => setSortValue(event.target.value)}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="topRatedFirst">Top rated first</option>
            <option value="priceHighToLow">Price-High to Low</option>
            <option value="priceLowToHigh">Price-Low to High</option>
          </select>
        </div>
        <div className="clearFilter" onClick={clearFilter}>
          Clear Filter
        </div>
      </div>

      {filteredProductsList.length === 0 ? (
        <h1 className="noMatchFound">No match found </h1>
      ) : (
        <DisplaySpecificCategory products={filteredProductsList} />
      )}
    </div>
  );
};

export default DisplayItems;
