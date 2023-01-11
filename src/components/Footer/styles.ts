import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 3rem;

  p {
    text-align: center;

    strong {
      color: ${(props) => props.theme["purple-300"]};
    }
  }
`;
