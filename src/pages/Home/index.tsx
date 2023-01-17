import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";
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
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p className="resume">
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
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
          <CoffeeCard
            imgSrc="./assets/express.svg"
            tags={["TRADICIONAL"]}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/american.svg"
            tags={["TRADICIONAL"]}
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/express-creamy.svg"
            tags={["TRADICIONAL"]}
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/cold-coffee.svg"
            tags={["TRADICIONAL", "GELADO"]}
            name="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/coffee-with-milk.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/latte.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/capuccino.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/macchiato.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/mochaccino.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/hot-chocolate.svg"
            tags={["TRADICIONAL", "COM LEITE"]}
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/cuban.svg"
            tags={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/havaian.svg"
            tags={["ESPECIAL"]}
            name="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/arabian.svg"
            tags={["ESPECIAL"]}
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            price="9,90"
          />

          <CoffeeCard
            imgSrc="./assets/irish.svg"
            tags={["ESPECIAL", "ALCOÓLICO"]}
            name="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price="9,90"
          />
        </section>
      </CatalogContainer>
    </HomeContainer>
  );
}
