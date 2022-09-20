import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ReducerProducts from "./reducers/reducerProdutcs";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./pages/All_products";
import ReducerCart from "./reducers/reducerBuyCart";
import { Cart } from "./pages/cart";
import { PersistPartial } from "redux-persist/lib/persistReducer";

import localforage from "localforage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { Store } from "./types/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const storage = localforage.createInstance({
  name: "redux",
  driver: localforage.INDEXEDDB,
});
const persistConfig: PersistConfig<Store> = {
  key: "root",
  storage,
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const reducer = combineReducers<Store>({
  products: ReducerProducts.reducer,
  cart: ReducerCart.reducer,
});
const persistenceReducer = persistReducer<Store>(persistConfig, reducer);
const store = configureStore<Store & PersistPartial>({
  reducer: persistenceReducer,
  middleware: [thunk],
});
const dataStore = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={dataStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
