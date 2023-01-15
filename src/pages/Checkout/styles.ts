import styled from "styled-components";

export const CheckoutContainer = styled.form`
  padding: 3rem;
  display: flex;
  gap: 2rem;

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
      margin-bottom: 2rem;
    }
  }

  .addressSection {
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

      input:nth-child(2) {
        width: 100%;
      }
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
    main {
      display: flex;
      gap: 1rem;

      button {
        text-align: left;
        min-width: 30%;
        padding: 1rem;
        background-color: ${({ theme }) => theme["gray-300"]};
        color: ${({ theme }) => theme["gray-600"]};
        border: 0;
        border-radius: 6px;
        cursor: pointer;

        font-size: 0.9rem;
      }

      @media (max-width: 768px) {
        flex-direction: column;
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
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.25rem;
  }
`;
