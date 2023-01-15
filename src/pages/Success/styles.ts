import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 1.5rem;

  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin: 5rem 0;

    .orderInfos {
      background-image: linear-gradient(rgb(250, 250, 250), rgb(250, 250, 250)),
        radial-gradient(
          circle at left top,
          rgb(219, 172, 44),
          rgb(128, 71, 248)
        );
      background-origin: border-box;
      background-clip: padding-box, border-box;
      padding: 2.5rem;
      border: 3px double transparent;
      border-radius: 6px 44px;
      padding: 2.5rem;

      div {
        margin-bottom: 2rem;
      }
    }

    img {
      width: 30rem;
    }
  }
`;
