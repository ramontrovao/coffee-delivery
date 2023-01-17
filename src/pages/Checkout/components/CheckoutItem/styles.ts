import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
  padding: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

  * {
    @media (max-width: 425px) {
      font-size: 95%;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  .nameAndPriceWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .removeWrapper {
    display: flex;
    gap: 1rem;
    margin: 0.5rem;

    div {
      display: flex;
      gap: 0.25rem;
      padding: 0.1rem 0;
      border-radius: 6px;
      background-color: ${({ theme }) => theme["gray-300"]};

      button {
        padding: 0.25rem;
        background-color: transparent;
        border: 0;
        cursor: pointer;

        color: ${({ theme }) => theme["purple-300"]};
      }
    }

    .removeCoffeeButton {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      padding: 0.1rem 1rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme["gray-300"]};
      border: 0;
      cursor: pointer;
      font-size: 0.75rem;

      svg {
        color: ${({ theme }) => theme["purple-300"]};
      }
    }
  }
`;
