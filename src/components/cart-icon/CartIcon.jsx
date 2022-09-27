import "./CartIcon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"
import { ShoppingBagIcon } from "../../assets/assets.index/index";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={ShoppingBagIcon} alt="cartIcon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
