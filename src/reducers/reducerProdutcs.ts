import { createSlice } from "@reduxjs/toolkit";
import {
  InitialStateProducts,
  ProductsModel,
} from "../types/typesReducerProducts";

const initialState: InitialStateProducts = { lista_productos: [] };

const ReducerProducts = createSlice({
  name: "Lista Productos",
  initialState,
  reducers: {
    SetProduct(state, { payload }: { payload: ProductsModel[] }) {
      state.lista_productos = payload;
    },
  },
});
export default ReducerProducts;

export const { SetProduct } = ReducerProducts.actions;
