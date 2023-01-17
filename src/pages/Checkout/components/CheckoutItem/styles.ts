import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
  padding: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

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
    margin-top: 0.5rem;

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

  @media (max-width: 425px) {
    margin-left: -2.5rem;
  }
`;
