import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCardContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <header>
        <img src="./assets/express.svg" alt="" />

        <div className="tags">
          <div>
            <p>TRADICIONAL</p>
          </div>
        </div>
      </header>
      <main>
        <h2>Expresso Tradicional</h2>

        <p>O tradicional café feito com água quente e grãos moídos</p>
      </main>
      <footer>
        <div>
          <span>R$</span> <strong>9,90</strong>
        </div>
        <form>
          <div>
            <button>
              <Plus weight="bold" />
            </button>
            <input type="number" />
            <button>
              <Minus weight="bold" />
            </button>
          </div>

          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </footer>
    </CoffeeCardContainer>
  );
}
