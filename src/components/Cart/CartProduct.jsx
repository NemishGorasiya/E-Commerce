import plus from "../../assets/plus.jpg";
import minus from "../../assets/minus.png";
import remove from "../../assets/remove.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartProduct = ({ cartProductData }) => {
  const { id, image, price, rating, title, qty } = cartProductData ?? {};
  const cartProductsContext = useContext(CartContext);
  return (
    <div className="cartProduct">
      <div className="productDetail">
        <img src={image} alt="cart image" />
        <div className="productTitle">{title}</div>
      </div>
      <div className="cartFunctionBtns">
        <div className="productPrice">
          <span>
            ${price} x ({qty} item)
          </span>
          <span>
            <b>${(price * qty).toFixed(2)}</b>
          </span>
        </div>
        <div className="crudBtns">
          <button onClick={() => cartProductsContext.decreaseQuantity(id)}>
            <img src={minus} alt="" />
          </button>
          <span className="productCount">{qty}</span>
          <button onClick={() => cartProductsContext.increaseQuantity(id)}>
            <img src={plus} alt="" />
          </button>
          <button
            className="productRemoveBtn"
            onClick={() => cartProductsContext.removeFromCart(id)}
          >
            <img src={remove} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
