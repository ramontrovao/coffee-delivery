import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 7.5rem 8%;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    margin-top: 5rem;

    img {
      width: 50%;
    }

    @media (max-width: 425px) {
      img {
        display: none;
      }

      main {
        padding: 0.25rem;
      }
    }
  }
`;

export const OrderInfo = styled.div`
  min-width: 25rem;
  background-image: linear-gradient(rgb(250, 250, 250), rgb(250, 250, 250)),
    radial-gradient(circle at left top, rgb(219, 172, 44), rgb(128, 71, 248));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;
  border: 3px double transparent;
  border-radius: 6px 44px;
  padding: 2.5rem;

  div {
    margin-bottom: 2rem;
  }

  @media (max-width: 425px) {
    min-width: 100%;
  }
`;
