import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ d }) {
  const { dispatch, state } = useGlobalContext();
  const { cart } = state;
  const { id, name, category, price, image } = d;

  const alreadyAdded = cart?.find((item) => item.id === id);

  return (
    <div className="dessert-card">
      <picture>
        <source media="(min-width: 998px)" srcSet={image.desktop} />
        <source media="(min-width: 800px)" srcSet={image.tablet} />
        <source media="(min-width: 400px)" srcSet={image.mobile} />
        <img className="desserts-card-image" src={image.thumbnail} alt="" />
      </picture>
      <div className="buttons-wrapper">
        {!alreadyAdded ? (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...d, amount: 1 },
              });
            }}
            className="btn add-to-card-btn"
          >
            <span className="add-to-card-btn-wrapper">
              <img src="../images/icon-add-to-cart.svg" alt="" />
              <span>Add to Cart</span>
            </span>
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              onClick={() => dispatch({ type: "DECREMENT", payload: id })}
              className="decrement-btn"
            >
              <img src="../images/icon-decrement-quantity.svg" alt="" />
            </button>
            <span className="item-amount">{alreadyAdded.amount}</span>
            <button
              onClick={() => dispatch({ type: "INCREMENT", payload: id })}
              className="increment-btn"
            >
              <img src="../images/icon-increment-quantity.svg" alt="" />
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: id })
              }
              className="remove-btn"
            ></button>
          </div>
        )}
      </div>
      <div className="desserts-card-body">
        <p className="desserts-card-category">{category}</p>
        <h3 className="desserts-card-name">{name}</h3>
        <p className="desserts-card-price">${price}</p>
      </div>
    </div>
  );
}

export default Product;
