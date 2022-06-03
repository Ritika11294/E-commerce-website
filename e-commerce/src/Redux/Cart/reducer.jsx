// import { ADD_TO_CART } from "./action";
// import { REMOVE_FROM_CART } from "./action";
// import { ADJUST_QTY  } from "./action";
// import { LOAD_CURRENT_ITEM } from "./action";

// const initState = {
  
//     cart:[] , //{id, title, desc, price, img, qty}
//     currentItem: null,
// }



// export const cartReducer = (store = initState, { type, payload }) => {
//     switch (type) {
//         case ADD_TO_CART:
          
//             const product = store.products.find((prod) => prod.id == payload.id);
            
//             const presentInCart = store.cart.find((product) =>
//               product.id === payload.id ? true : false
//             );
//             return {
//               ...store,
//               cart:  presentInCart ? store.cart.map((product) =>
//                     product.id === payload.id ? { ...product, qty: product.qty + 1 } : product
//                   )
//                 : [...store.cart, { ...product, qty: 1 }],
//             };
//           case REMOVE_FROM_CART:
//             return {
//               ...store,
//               cart: store.cart.filter((product) => product.id !== payload.id),
//             };
      
//           case ADJUST_QTY:
//             return {
//               ...store,
//               cart: store.cart.map((product) =>
//                 product.id === payload.id ? { ...product, qty: payload.qty } : product
//               ),
//             };
//           case LOAD_CURRENT_ITEM:
//             return {
//               ...store,
//               currentItem: payload,
//             };
//           default:
//             return store;
//         }
//     }

