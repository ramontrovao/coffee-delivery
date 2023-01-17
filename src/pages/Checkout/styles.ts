import styled from "styled-components";
import { Item } from "@radix-ui/react-radio-group";

export const PaymentOptionButton = styled(Item)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 30%;
  padding: 1rem;
  background-color: ${({ theme }) => theme["gray-300"]};
  color: ${({ theme }) => theme["gray-600"]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  svg {
    color: ${({ theme }) => theme["purple-200"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme["gray-900"]};
    background-color: ${({ theme }) => theme["purple-100"]};
    border: 1px solid ${({ theme }) => theme["purple-200"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${({ theme }) => theme["gray-400"]};
  }
`;

export const CheckoutContainer = styled.form`
  background-color: ${({ theme }) => theme["background"]};
  padding: 10% 3%;
  display: flex;
  gap: 2rem;

  input[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .wrapper1 {
    min-width: 40rem;

    @media (max-width: 768px) {
      min-width: 100%;
    }
  }

  .wrapper2 {
    min-width: 28rem;

    @media (max-width: 768px) {
      min-width: 100%;
    }
  }

  .addressSection,
  .paymentSection,
  .cartSection {
    margin-top: 1rem;
    width: 100%;
    padding: 2.5rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["gray-100"]};
  }

  .addressSection,
  .paymentSection {
    header {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 2rem;

      strong {
        font-size: 1.25rem;
        color: ${({ theme }) => theme["gray-800"]};
      }
    }
  }

  .addressSection {
    header {
      svg {
        color: ${({ theme }) => theme["yellow-300"]};
      }
    }

    input {
      padding: 0.75rem;
      background-color: ${({ theme }) => theme["gray-300"]};
      border: 1px solid ${({ theme }) => theme["gray-400"]};
      border-radius: 4px;
    }

    div {
      margin-bottom: 1rem;
    }

    .input-wrapper1,
    .input-wrapper2 {
      flex-wrap: wrap;
    }

    .input-wrapper1 {
      display: flex;
      gap: 1rem;
    }

    .input-wrapper2 {
      display: flex;
      gap: 1rem;

      input:nth-child(3) {
        width: 20%;
      }
    }
  }

  .paymentSection {
    header {
      svg {
        color: ${({ theme }) => theme["purple-300"]};
      }
    }

    main {
      div {
        display: flex;
        gap: 1rem;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  }

  .cartSection {
    border-radius: 6px 44px 6px 44px;

    .noItemsFound {
      margin: 2rem;

      a {
        color: ${({ theme }) => theme["yellow-200"]};
        font-weight: bold;
        text-decoration: none;
      }
    }

    .cartResume {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: auto;

      div {
        display: flex;
        justify-content: space-between;
      }
    }

    .cartSubmit {
      margin-top: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        border: 0;
        cursor: pointer;
        padding: 0.75rem 0.5rem;
        border-radius: 6px;
        width: 100%;
        background-color: ${({ theme }) => theme["yellow-200"]};
        color: ${({ theme }) => theme["white"]};
        font-weight: bold;
        transition: background-color 0.4s;

        &:disabled {
          background-color: ${({ theme }) => theme["gray-400"]};
          color: ${({ theme }) => theme["gray-500"]};
          cursor: not-allowed;

          &:hover {
            background-color: ${({ theme }) => theme["gray-400"]};
          }
        }

        &:hover {
          background-color: ${({ theme }) => theme["yellow-300"]};
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.25rem;
  }
`;
