import { Minus, Plus } from "phosphor-react";
import { CheckoutItemContainer } from "./styles";

export function CheckoutItem() {
  return (
    <CheckoutItemContainer>
      <img src="./assets/express.svg" />

      <div>
        <div className="nameAndPriceWrapper">
          <p>Expresso Tradicional</p>

          <strong>R$ 9,90</strong>
        </div>

        <div>
          <div className="removeWrapper">
            <div>
              <button>
                <Plus weight="bold" />
              </button>
              <input type="number" min="1" max="99" />
              <button>
                <Minus weight="bold" />
              </button>
            </div>

            <button className="removeCoffeeButton">REMOVER</button>
          </div>
        </div>
      </div>
    </CheckoutItemContainer>
  );
}
