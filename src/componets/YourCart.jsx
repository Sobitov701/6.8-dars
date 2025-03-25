import { useGlobalContext } from "../hooks/useGlobalContext";

function YourCart() {
  const { state } = useGlobalContext();
  const { cart, totalPrice } = state;

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Your Cart (
        <span>{cart.reduce((acc, item) => acc + item.amount, 0)}</span>)
      </h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <h3 className="cart-item-name">{item.name}</h3>
            <p className="crat-item-p">
              <p className="cart-item-quantity">{item.amount}x</p>
              <p className="cart-item-price">@${item.price}</p>
              <p className="cart-item-total-price">
                ${(item.price * item.amount).toFixed(2)}
              </p>
            </p>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Order Total</p>
        <p className="cart-total-price">${totalPrice.toFixed(2)}</p>
      </div>
      <button className="confirm-order-btn">Confirm Order</button>
    </div>
  );
}

export default YourCart;
