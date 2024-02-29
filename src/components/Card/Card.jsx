import "./Card.css";
import PropTypes from "prop-types";
import star from "../../assets/star.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { id, image, price, rating, title } = product ?? {};
  const cartContext = useContext(CartContext);
  useEffect(() => {
    cartContext.cartProductsList.forEach((ele) => {
      if (ele.id === id) {
        setInCart(true);
      }
    });
  }, [inCart]);
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
              <span className="ratingRate">{rating.rate.toFixed(1)}</span>
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
              className={inCart ? "addToCartBtn goToCart" : "addToCartBtn"}
              onClick={() => {
                cartContext.addToCart(id);
                setInCart(true);
              }}
            >
              {inCart ? <Link to="/cart">Go To Cart</Link> : "Add To Cart"}
              <div className="btnBackground"></div>
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
