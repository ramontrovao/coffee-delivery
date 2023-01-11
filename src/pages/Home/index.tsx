import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeCardContainer } from "./components/CoffeeCard/styles";
import {
  AboutCoffeeContainer,
  CatalogContainer,
  HomeContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <AboutCoffeeContainer>
        <div className="coffeInfosDiv">
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>

          <p className="resume">
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </p>

          <div className="benefitsDiv">
            <div>
              <div className="benefitsIcon" id="benefitsIcon1">
                <ShoppingCart size={20} color="#FFF" weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <div className="benefitsIcon" id="benefitsIcon2">
                <Package size={20} color="#FFF" weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <div className="benefitsIcon" id="benefitsIcon3">
                <Timer size={20} color="#FFF" weight="fill" />
              </div>
              <p> Entrega rápida e rastreada </p>
            </div>
            <div>
              <div className="benefitsIcon" id="benefitsIcon4">
                <Coffee size={20} color="#FFF" weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>

        <img src="./assets/aboutCoffeeImg.svg" alt="" />
      </AboutCoffeeContainer>

      <CatalogContainer>
        <h2 id="title">Nossos cafés</h2>

        <section>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </section>
      </CatalogContainer>
    </HomeContainer>
  );
}
