import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme["gray-200"]};

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    img {
      width: 7.5rem;
      margin-top: -3rem;
      margin-bottom: 1rem;
    }

    div {
      background-color: ${({ theme }) => theme["yellow-100"]};
      padding: 0.25rem;
      border-radius: 100px;

      p {
        font-weight: bold;
        color: ${({ theme }) => theme["yellow-300"]};
        font-size: 0.7rem;
      }
    }
  }

  main {
    h2 {
      font-family: "Baloo 2";
      font-size: 1.25rem;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 0.9rem;
      margin-top: 1rem;
      margin-bottom: 2rem;

      color: ${({ theme }) => theme["gray-600"]};
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
      strong {
        font-family: "Baloo 2";
        font-size: 1.5rem;
      }
    }

    form {
      display: flex;
      gap: 0.5rem;

      div {
        display: flex;
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
      }

      input {
        width: 1rem;
        background-color: transparent;
        border: 0;

        &::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      button[type="submit"] {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: ${({ theme }) => theme["white"]};
        background-color: ${({ theme }) => theme["purple-300"]};
        border: 0;
        border-radius: 0.375rem;
        padding: 0.5rem;
      }
    }
  }
`;
