import { Dispatch, AnyAction } from "redux";
import { url } from "../connections/url";
import { SetProduct } from "../reducers/reducerProdutcs";

export const GetProduct = (dispatch: Dispatch<AnyAction>) => {
  url.get("list").then((res) => {
    dispatch(SetProduct(res.data.data));
  });
};
