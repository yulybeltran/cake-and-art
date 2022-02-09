import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { CartItem } from "./CartItem";
import { ProductItem } from "./ProductItem";
import style from "../styles/shoppingcart.module.css";
;

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <article>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
   
       <div id="car">
        <article className={style.cartShopping}>
        <h1>Carrito de Compras</h1>
        
          {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))}<br/>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </article>
        </div>
    </div>
  );
};

export { ShoppingCart };
