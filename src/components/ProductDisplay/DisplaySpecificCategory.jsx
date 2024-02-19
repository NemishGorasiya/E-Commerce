import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./DisplaySpecificCategory.css";
const DisplaySpecificCategory = ({ products }) => {
  return (
    <div className="cardsWrapper">
      {products &&
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
    </div>
  );
};

DisplaySpecificCategory.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

DisplaySpecificCategory.defaultProps = {
  products: [],
};

export default DisplaySpecificCategory;
