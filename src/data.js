import axios from "axios";

export const navLinksLeft = ["Home", "Men", "Women"];
export const navLinksRight = ["Contact", "About us", "Cart"];

export const sliderImages = {
  img1: "src/assets/sliderimg1.jpg",
  img2: "src/assets/sliderimg2.jpg",
  img3: "src/assets/sliderimg3.jpg",
  img4: "src/assets/sliderimg4.jpg",
  img5: "src/assets/sliderimg5.jpg",
};

async function fetchData() {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

export const productData = fetchData();
