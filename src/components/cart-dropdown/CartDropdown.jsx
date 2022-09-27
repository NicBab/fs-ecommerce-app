import "./CartDropdown.scss"
import { Button } from ".././components.index/index"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown