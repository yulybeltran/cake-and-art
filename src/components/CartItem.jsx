import style from "../styles/caritem.module.css";


const CartItem = ({ data, delFromCart, addToCart}) => {
    let { id, name, price, quantity, portions,img } = data;
  
    return (
      <div className={style.car}>
        <img src={img} alt="Producto" />
        <h4>{name}</h4><br></br>
        <h3>{portions}</h3>
        <br></br>
        <h3>
          ${price}<br></br> Cantidad {quantity}<br></br>Total ${price * quantity}
        </h3><br></br>
        <button onClick={() => delFromCart(id)}>-</button>
        <br /><br></br>
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        <br /><br></br>
        <button onClick={() => addToCart(id)}>Agregar</button>
        <br />
      </div>
    );
  };
  
  export  {CartItem}