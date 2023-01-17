import styled, { css } from "styled-components";

export const InputFormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    span {
      margin-top: 0.5rem;
      color: ${theme["purple-300"]};
    }

    input {
      padding: 0.75rem;
      background-color: ${theme["gray-300"]};
      border: 1px solid ${theme["gray-400"]};
      border-radius: 4px;
      transition: border 0.4s;
      outline: 0;

      &:focus {
        border: 1px solid ${theme["yellow-300"]};
      }

      &[type="number"] {
        -moz-appearance: textfield;

        &::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  `}
`;
