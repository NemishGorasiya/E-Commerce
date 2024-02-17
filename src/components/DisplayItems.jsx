import { useEffect, useState } from "react";
import DisplaySpecificCategory from "./DisplaySpecificCategory";
import axios from "axios";
import "./DisplayItems.css";

const DisplayItems = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredProductsList, setFilteredProductsList] = useState([]);
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

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
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
