import { Minus, Plus } from "phosphor-react";
import { FormEvent } from "react";
import { InputQuantityContainer } from "./styles";

interface InputQuantityProps {
  quantity: number;
  increase: (event: FormEvent) => void;
  decrease: (event: FormEvent) => void;
}

export function InputQuantity({
  quantity,
  increase,
  decrease,
}: InputQuantityProps) {
  return (
    <InputQuantityContainer>
      <button onClick={increase}>
        <Plus weight="bold" />
      </button>
      <p>{quantity}</p>
      <button onClick={decrease}>
        <Minus weight="bold" />
      </button>
    </InputQuantityContainer>
  );
}
