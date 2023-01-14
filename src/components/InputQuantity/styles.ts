import styled from "styled-components";

export const InputQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["gray-300"]};

  button {
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    color: ${({ theme }) => theme["purple-300"]};
  }

  p {
    padding: 0.25rem;
  }
`;
