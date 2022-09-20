import { ProductsModel } from "../types/typesReducerProducts";
import { TextTarget } from "./textTarget";
import { useDispatch } from "react-redux";
import { SetCart } from "../reducers/reducerBuyCart";
import { Boton } from "./boton";
import { useNavigate } from "react-router-dom";

export const Target = ({ info }: { info: ProductsModel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[80%]">
      <div className="flex flex-col rounded-md w-full border-black border-2 border-solid text-lg z-30 bg-white shadow-sm shadow-slate-400">
        <h1 className="text-center">{info.nombre}</h1>

        <TextTarget info={info.tipo_servicio} text={"Tipo de Servivio: "} />

        <TextTarget info={info.calificacion} text={"Calificacion: "} />
        <TextTarget info={`$${info.precio}`} text={"Precio: "} />
      </div>
      <Boton
        text="Add to Cart"
        action={() => {
          dispatch(SetCart(info));
          navigate("/cart");
        }}
      />
    </div>
  );
};
