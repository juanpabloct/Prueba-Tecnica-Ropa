import { useGetCart } from "../hooks personalities/useGetCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, editCart } from "../reducers/reducerBuyCart";
import { Store } from "../types/store";
import { Boton } from "../components/boton";

export const Cart = () => {
  const productsCart = useGetCart();
  const dispatch = useDispatch();
  const quantity = useSelector((state: Store) => state.cart.carritoCompras);
  return (
    <div className="flex flex-col">
      <h1 className="text-center py-3 text-xl font-semibold">
        Productos En Carrito de Compras
      </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Calificacion</th>
          <th>Tipo de Servicio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
        {productsCart.map((cart, index) => {
          return (
            <tr className="text-center">
              <td>{cart.nombre}</td>
              <td>{cart.precio}</td>
              <td>{cart.calificacion}</td>
              <td>{cart.tipo_servicio}</td>
              <td>
                <input
                  name="quantity"
                  onChange={(e) => {
                    dispatch(
                      editCart({ index: index, cantidad: e.target.value })
                    );
                  }}
                  type="number"
                  className="border-2  border-black rounded-md"
                />
              </td>
              <td>
                <span
                  className="underline text-red-500"
                  onClick={() => {
                    dispatch(deleteCart(index));
                  }}
                >
                  Eliminar
                </span>
              </td>
            </tr>
          );
        })}
      </table>
      <Boton action={() => {}} text={"Guardar producto"} />
    </div>
  );
};
