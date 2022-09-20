import { useSelector } from "react-redux";
import { Store } from "../types/store";

export const useGetProducts = () => {
  const { lista_productos } = useSelector((state: Store) => state.products);

  return lista_productos;
};
