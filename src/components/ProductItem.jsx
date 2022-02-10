import style from '../styles/productItem.module.css';


const ProductItem = ({ data, addToCart }) => {
    let { id, price, img, portions } = data;
    return (


      <div className={style.products}>
        <div className={style.product}>
       <img src={img} alt="Torta"></img>
        <h4>$ {price}</h4>
        <h4>{portions}</h4>
        <button onClick={() => addToCart(id)}>Agregar al carrito</button>
        </div>
        <div>
        <div className={style.produc}>
       
        <div>
          <ul>
            <span>Sabores a elegir:</span>
            <li>Vainilla</li>
            <li>Chocolate</li>
            <li>Naranja</li>
            <li> Red velvet</li>
           
          </ul>
        </div>
        <div>
          <ul>
            <span>Relleno a elegir:</span>
            <li>Chocolate</li>
            <li>Manjar</li>
            <li>Mermelada</li>
           
          </ul>
        </div>
        <div>
          <ul>
            <span>Topping: </span>
            <li>Nueces</li>
            <li>Pasas</li>
            <li>Frutas</li>
            <li>Arándonos</li>
            <li>Almendras</li>
            <li>(costo adicional)</li>
          </ul><br/>
         
        </div>
       
        </div>
        <p><span> Nota:</span> Cualquier torta decorada, su precio va a variar según su diseño y cantidad en porciones.</p>
        </div>
       
      </div>
      
    );
  };
  
  export {ProductItem}