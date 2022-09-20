import React, { useState, useEffect } from "react";
import { url } from "../connections/url";
import { useDispatch } from "react-redux";
import { GetProduct } from "../utilities/getProducts";
import { useGetProducts } from "../hooks personalities/useGetProducts";
import { Target } from "../components/target";
export const Products = () => {
  const [products, setProducts] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    GetProduct(dispatch);
  }, [dispatch]);
  const data = useGetProducts();

  return (
    <div>
      <h1 className="text-center text-xl py-3 font-bold">Lista Productos</h1>
      <div className="grid grid-cols-2 justify-items-center gap-10">
        {data.map((product) => {
          return <Target info={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
