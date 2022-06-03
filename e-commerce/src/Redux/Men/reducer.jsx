import { PRODUCT_DATA } from "./action";
// import { SELECTED_DATA} from "./action"

import { ADD_TO_CART } from "./action";
import { REMOVE_FROM_CART } from "./action";
// import { ADJUST_QTY } from "./action";
// import { LOAD_CURRENT_ITEM } from "./action";

const initState = {
  products: [],
  cart: [], //{id, title, desc, price, img, qty}
  currentItem: null,
  // product:{}
};

export const productReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DATA:
      return { ...store, products: payload };

    case ADD_TO_CART:
      //get product from product array

      const presentInCart = store.cart.find(item => item.id === payload.id)

      if(presentInCart) {
        return ({...store,
          cart : store.cart.map(item  => item.id === payload.id ? payload: item)})
      }
      else {
        return ({
          ...store,
          cart: [...store.cart, payload]
        })
      }

      // const product = store.products.find(
      //   (prod) => prod.id == payload?.id
      // );
      
      // console.log("product:", product);

      // check if data is in cart already
      // const presentInCart = store.cart.find((product) =>
      //   product.id === payload.id ? true : false
      // );
      // return {
      //   ...store,
      //   cart: presentInCart
      //     ? store.cart.map((product) =>
      //         product.id === payload.id
      //           ? { ...product, qty: product.qty + 1 }
      //           : product
      //       )
      //     : [...store.cart, { ...product, qty: 1 }],
      // };
    case REMOVE_FROM_CART:
      return {
        ...store,
        cart: store.cart.filter((product) => product.id !== payload.id),
      };

    // case ADJUST_QTY:
    //   return {
    //     ...store,
    //     cart: store.cart.map((product) =>
    //       product.id === payload.id ? { ...product, qty: payload.qty } : product
    //     ),
    //   };
    // case LOAD_CURRENT_ITEM:
    //   return {
    //     ...store,
    //     currentItem: payload,
    //   };
    default:
      return store;
  }
};
