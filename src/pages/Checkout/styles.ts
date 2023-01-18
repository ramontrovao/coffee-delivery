import styled from "styled-components";
import { Item } from "@radix-ui/react-radio-group";

export const SectionBase = styled.section`
  margin-top: 1rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["gray-100"]};
`;

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

export const LeftWrapper = styled.div`
  width: 60%;

  @media (max-width: 1024px) {
    margin-top: 7.5rem;
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CheckoutContainer = styled.form`
  background-color: ${({ theme }) => theme["background"]};
  padding-top: 5rem;
  padding: 7.5rem 1rem 0 1rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0.25rem;
  }
`;

export const AddressContainer = styled(SectionBase)`
  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme["gray-800"]};
    }

    svg {
      color: ${({ theme }) => theme["yellow-300"]};
    }
  }

  main {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 12.5rem 1fr 3.75rem;

    @media (max-width: 600px) {
      grid-template-columns: 100%;
    }
  }

  div {
    margin-bottom: 1rem;
  }
`;

export const PaymentContainer = styled(SectionBase)`
  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme["gray-800"]};
    }

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
`;

export const CartContainer = styled(SectionBase)`
  width: 100%;
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
`;

export const SubmitButtonContainer = styled.div`
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
`;
