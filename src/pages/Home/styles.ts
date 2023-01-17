import styled from "styled-components";

export const HomeContainer = styled.main``;

export const AboutCoffeeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 85vh;
  gap: 2rem;
  padding: 12.5% 4% 8% 8%;
  background-image: url("../assets/homeBg.svg");

  .coffeInfosDiv {
    width: 60%;

    h1 {
      font-family: "Baloo 2";
      font-size: 3rem;
      line-height: 1.2;
    }

    .resume {
      color: ${({ theme }) => theme["gray-600"]};
      font-size: 1rem;
      line-height: 1.4;
      margin-top: 1.5rem;
    }

    .benefitsDiv {
      display: grid;
      margin-top: 3rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 2rem;

      div {
        display: flex;
        align-items: center;
        gap: 1rem;

        .benefitsIcon {
          padding: 0.5rem;
          border-radius: 999px;
        }

        #benefitsIcon1 {
          background-color: ${({ theme }) => theme["yellow-300"]};
        }

        #benefitsIcon2 {
          background-color: ${({ theme }) => theme["gray-800"]};
        }

        #benefitsIcon3 {
          background-color: ${({ theme }) => theme["yellow-200"]};
        }

        #benefitsIcon4 {
          background-color: ${({ theme }) => theme["purple-200"]};
        }
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  img {
    width: 40%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CatalogContainer = styled.div`
  padding: 4% 8%;
  background-color: ${({ theme }) => theme["background"]};

  #title {
    font-family: "Baloo 2";
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.313rem, 1fr));
    grid-template-rows: auto;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 0 2rem;
    }
  }
`;
