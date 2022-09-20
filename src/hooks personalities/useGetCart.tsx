import { useSelector } from "react-redux";
import { Store } from "../types/store";

export const useGetCart = () => {
  const { carritoCompras } = useSelector((state: Store) => state.cart);

  return carritoCompras;
};
