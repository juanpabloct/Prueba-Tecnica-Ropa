import { createSlice } from "@reduxjs/toolkit";
import { InitialStateCart } from "../types/typesReducerCart";
import { ProductsModel } from "../types/typesReducerProducts";

const initialState: InitialStateCart = { carritoCompras: [] };

const ReducerCart = createSlice({
  name: "Lista Productos",
  initialState,
  reducers: {
    SetCart(state, { payload }: { payload: ProductsModel }) {
      const datos = state.carritoCompras.map((product) => {
        product["quantity"] = 1;
      });
      state.carritoCompras.push(payload);
    },
    deleteCart(state, { payload }) {
      const copyCart = [...state.carritoCompras];
      copyCart.splice(payload, 1);
      state.carritoCompras = copyCart;
    },
    editCart(state, { payload }) {
      const copyStateActually = [...state.carritoCompras];
      copyStateActually[payload.index] = payload.cantidad;
    },
  },
});
export default ReducerCart;

export const { SetCart, deleteCart, editCart } = ReducerCart.actions;
