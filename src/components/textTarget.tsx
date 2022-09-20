import { ProductsModel } from "../types/typesReducerProducts";
import { TextTargetProps } from "../types/typesTextTarget";

export const TextTarget = ({ text, info }: TextTargetProps) => {
  return (
    <p>
      <>
        <span className="font-bold">{text} </span>
        {info}
      </>
    </p>
  );
};
