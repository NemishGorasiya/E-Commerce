import "./Card.css";
import PropTypes from "prop-types";
import star from "../assets/star.png";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Card = ({ product }) => {
  const { id, image, price, rating, title } = product ?? {};
  const cartContext = useContext(CartContext);
  // console.log("add", cartContext);
  return (
    <div className="cardWrapper">
      <div className="card">
        <div className="cardImage">
          <img src={image} alt={image} />
        </div>
        <div className="cardDetails">
          <div className="titleWrapper">
            <div className="cardTitle">{title}</div>
            <div className="ratings">
              <span className="ratingRate">{rating.rate}</span>
              <div className="stars">
                <img src={star} alt="sdfd" />
                <img src={star} alt="sdfd" />
                <img src={star} alt="sdfd" />
                <img src={star} alt="sdfd" />
                <img src={star} alt="sdfd" />
                <div
                  className="starBackground"
                  style={{ width: `${rating.rate * 20}%` }}
                ></div>
              </div>
              <div className="ratingCount">({rating.count})</div>
            </div>
          </div>
          <div className="checkOut">
            <div className="price">$ {price}</div>
            <div
              className="addToCartBtn"
              onClick={() => cartContext.addToCart(id)}
            >
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.PropTypes.shape({}),
};

Card.defaultProps = {
  product: [],
};

export default Card;
