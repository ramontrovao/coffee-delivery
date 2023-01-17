import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 1.75rem 2rem;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const navDivBase = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
`;

export const LocationContainer = styled(navDivBase)`
  background-color: ${({ theme }) => theme["purple-100"]};
`;

export const CartContainer = styled(navDivBase)`
  background-color: ${({ theme }) => theme["yellow-100"]};
`;
