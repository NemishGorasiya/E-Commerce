import { useState } from "react";
import DisplaySpecificCategory from "./DisplaySpecificCategory";
import "./DisplayItems.css";

const DisplayItems = ({ products }) => {
  console.log("after", products);
  const [category, setCategory] = useState("all");
  const [filteredProductsList, setFilteredProductsList] = useState(products);
  console.log("after filter", filteredProductsList);
  function changeCategory({ target: { id } }) {
    if (category === id) {
      return;
    }
    setCategory(id);
    if (id === "all") {
      setFilteredProductsList(products);
      return;
    }
    filterProducts(id);
  }

  function filterProducts(selectedCategory) {
    setFilteredProductsList(
      products.filter((ele) => ele.category === selectedCategory)
    );
  }

  return (
    <div>
      <div className="categories">
        <ul>
          <li onClick={changeCategory} key={"all"} id={"all"}>
            All
          </li>
          <li
            onClick={changeCategory}
            key={"men's clothing"}
            id={"men's clothing"}
          >
            Men
          </li>
          <li
            onClick={changeCategory}
            key={"women's clothing"}
            id={"women's clothing"}
          >
            Women
          </li>
          <li onClick={changeCategory} key={"electronics"} id={"electronics"}>
            Electronics
          </li>
          <li onClick={changeCategory} key={"jewelery"} id={"jewelery"}>
            Jewelery
          </li>
        </ul>
      </div>
      <DisplaySpecificCategory
        products={
          filteredProductsList.length === 0 ? products : filteredProductsList
        }
      />
    </div>
  );
};

export default DisplayItems;
