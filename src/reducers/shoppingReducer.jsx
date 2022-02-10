import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1,
       category:"a",
       name: "Fondant 3D", 
       img:"https://drive.google.com/uc?export=download&id=1OsKk8pEgbGtXyJTkwJktcPbmQgm87dQh", 
       portions: "25 Porciones", price: 40, 
       description:"Sabores a elegir:\nVainilla  Chocolate Naranja  Red velvet  Relleno a elegir:Manjar Chocolate Mermelada  Topping:  Nueces Pasas Frutas Arándonos Almendras (costo adicional) Nota: Cualquier torta decorada en buttercream, su precio va a variar según su diseño y cantidad en porciones"},
       
    { id: 2,
       name: "Fondant 3D", 
       img:"https://drive.google.com/uc?export=download&id=1RUNj8dTygp0hlt9FHNRvlZ55Ge9U3vMF",
        portions: "20 Porciones", 
        price: 35,
        description:"bhgnhgd"},

    { id: 3, 
      name: "Fondant 3D", 
      img:"https://drive.google.com/uc?export=download&id=1acKHgOdscoPQG-CYDN7OXMArqvjnFGFb",
      portions: "30 Porciones",
       price: 35,
      description:"bhgnhgd"},

    { id: 4,
      name: "Fondant Planas",
      img:"https://drive.google.com/uc?export=download&id=1R_fZ9XTQHbITjVOseNGFC-Q0SMU8jJd6", 
      portions: "15 Porciones",
      price: 28},

    { id: 5,
      name: "Fondant Planas",
      img:"https://drive.google.com/uc?export=download&id=1Pn9EjYnUSWvs_Ws6ajuS2xARifbV7xSb",
      portions: "20 Porciones", 
      price: 28},

    { id: 6,
      name: "Fondant Planas",
      img:"https://drive.google.com/uc?export=download&id=12VpjQwINXAvISlfCZzAB25BH-TyfYwjf",
      portions: "30 Porciones",
      price: 28},

    { id: 7,
       name: "Tortas 3D",
       img:"https://drive.google.com/uc?export=download&id=1kgUrEG75IdGkRQVyySQpKj8GKpWgfgJ0",
       portions: "15 Porciones", 
       price: 60 },
       
    { id: 8,
      name: "Tortas 3D",
      img:"https://drive.google.com/uc?export=download&id=12uB0OHkvTcb6WH2zDLemZQM89q3_9ybH",
      portions: "20 Porciones",
      price: 60 },

    { id: 9, 
      name: "Tortas 3D",
      img:"https://drive.google.com/uc?export=download&id=1RPUqguNCZ05lJweW7NI2m52-s_R843Jm",
      portions: "30 Porciones",
      price: 60 },
    

    { id: 10,
      name: "Buttercream", 
      img:"https://drive.google.com/uc?export=download&id=1y07ggq-V2LXDMobrbZvbGbYBNOaGjSvn",
      portions: "15 Porciones",
      price: 40},

    { id: 11,
      name: "Buttercream", 
      img:"https://drive.google.com/uc?export=download&id=1UddcwKKLoOv_KXIDyWMNcsOrpyqEi0yl",
      portions: "20 Porciones",
      price: 40},

    { id: 12,
      name: "Buttercream", 
      img:"https://drive.google.com/uc?export=download&id=1QBWAFF0GnyuloeiuBcNvZEaaMa8GQ152",
      portions: "30 Porciones",
      price: 40},
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
