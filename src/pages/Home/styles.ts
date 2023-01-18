import styled from "styled-components";

export const Container = styled.main`
  padding-top: 7.5rem;
`;

export const BigTitle = styled.h1`
  font-family: "Baloo 2";
  font-size: 3rem;
  line-height: 1.2;
`;

export const MediumTitle = styled.h2`
  font-family: "Baloo 2";
  font-size: 2rem;
  margin-bottom: 2.5rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme["gray-600"]};
  font-size: 1rem;
  line-height: 1.4;
`;

export const AboutCoffeeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 85vh;
  gap: 2rem;
  padding: 0 4% 8% 8%;
  background-image: url("../assets/homeBg.svg");
  background-size: cover;

  img {
    width: 40%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CoffeeInfosContainer = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BenefitsContainer = styled.div`
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
`;

export const CatalogContainer = styled.div`
  padding: 4% 8%;
  background-color: ${({ theme }) => theme["background"]};

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.313rem, 1fr));
    grid-template-rows: auto;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    section {
      width: 100%;
    }
  }
`;
