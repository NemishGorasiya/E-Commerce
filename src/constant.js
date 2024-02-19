import axios from "axios";

export const navLinksLeft = ["Home"];
export const navLinksRight = ["Cart"];

export const sliderImages = {
  img1: "src/assets/sliderimg1.jpg",
  img2: "src/assets/sliderimg2.jpg",
  img3: "src/assets/sliderimg3.jpg",
  img4: "src/assets/sliderimg4.jpg",
  img5: "src/assets/sliderimg5.jpg",
};

// async function fetchData() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   return response.data;
// }

// export const productData = fetchData();

export const shippingMode = {
  standard: {
    data: "Standard delivery $5",
    charges: 5, // default
  },
  superFast: {
    data: "Super Fast Delivery $10",
    charges: 10,
  },
};

export const discounts = {
  NEMISH10: {
    discountPercentage: 10,
    uptoAmount: 500,
    onOrderAbove: 1000,
  },
  NEMISH20: {
    discountPercentage: 20,
    uptoAmount: 800,
    onOrderAbove: 1500,
  },
};
