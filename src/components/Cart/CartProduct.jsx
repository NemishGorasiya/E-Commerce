import plus from "../../assets/plus.jpg";
import minus from "../../assets/minus.png";
import remove from "../../assets/remove.png";
const CartProduct = () => {
  return (
    <div className="cartProduct">
      <div className="productDetail">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="cart image"
        />
        <div className="productTitle">bag</div>
      </div>
      <div className="productPrice">
        <span>$32 x (5 item)</span>
        <span>
          <b>$160</b>
        </span>
      </div>
      <div className="cartFunctionBtns">
        <button>
          <img src={minus} alt="" />
        </button>
        <span className="productCount">5</span>
        <button>
          <img src={plus} alt="" />
        </button>
        <button className="productRemoveBtn">
          <img src={remove} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
