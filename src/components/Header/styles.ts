import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["background"]};
  width: 100%;
  position: fixed;
  padding: 1.75rem 2rem;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
    }

    div {
      display: flex;
      gap: 0.5rem;
    }

    .NumOnTop {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.6rem;
      width: 1rem;
      height: 1rem;
      border-radius: 8px;
      margin-left: -1rem;
      font-size: 0.8rem;

      background-color: ${({ theme }) => theme["yellow-300"]};
      color: ${({ theme }) => theme["white"]};
      font-weight: bold;
    }
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
