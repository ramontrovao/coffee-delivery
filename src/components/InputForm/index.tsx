import { InputFormContainer } from "./styles";
import { forwardRef } from "react";

type inputFormProps = {
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputForm = forwardRef<HTMLInputElement, inputFormProps>(
  ({ error, ...rest }, ref) => {
    return (
      <InputFormContainer>
        <input ref={ref} {...rest} />
        {error && <span>{error}</span>}
      </InputFormContainer>
    );
  }
);
