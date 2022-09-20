import { InitialStateCart } from "./typesReducerCart";
import { InitialStateProducts } from "./typesReducerProducts";

export interface Store {
  products: InitialStateProducts;
  cart: InitialStateCart;
}
