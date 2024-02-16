import React, { useEffect, useState } from "react";
import DisplaySpecificCategory from "./DisplaySpecificCategory";
import axios from "axios";
import "./DisplayItems.css";

const DisplayItems = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredProductsList, setFilteredProductsList] = useState([]);
  function changeCategory(e) {
    // console.log(e.target.id);
    if (category === e.target.id) {
      return;
    }
    setCategory(e.target.id);
    if (e.target.id === "all") {
      setFilteredProductsList(products);
      return;
    }
    filterProducts(e.target.id);
  }

  function filterProducts(selectedCategory) {
    // filteredProductsList = products.filter((ele) => {
    //   return ele.category === selectedCategory;
    // });
    setFilteredProductsList(
      products.filter((ele) => {
        return ele.category === selectedCategory;
      })
    );
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProductsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <DisplaySpecificCategory products={filteredProductsList} />
    </div>
  );
};

export default DisplayItems;
