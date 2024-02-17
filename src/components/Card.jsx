import "./Card.css";
import PropTypes from "prop-types";
import star from "../assets/star.png";

const Card = ({ product }) => {
  const { image, price, rating, title } = product ?? {};

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
            <div className="addToCartBtn">Add to cart</div>
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
