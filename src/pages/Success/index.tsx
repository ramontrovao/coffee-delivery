import { OrderInfo, SuccessContainer } from "./styles";
import { useContext, useEffect } from "react";
import { AddressContext } from "../../context/AddressContext";
import { CoffeeContext } from "../../context/CoffeeListContext";

export function Success() {
  const { address } = useContext(AddressContext);
  const { city, district, street, number, uf } = address;

  useEffect(() => console.log(address), []);

  const {
    coffeeState: { paymentMethod },
  } = useContext(CoffeeContext);

  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>

        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <main>
        <OrderInfo>
          <div>
            <p>
              Entrega em{" "}
              <strong>
                {street}, {number}
              </strong>
              <br /> {district} - {city}, {uf}
            </p>
          </div>

          <div>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>

          <div>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </p>
          </div>
        </OrderInfo>

        <img src="./assets/successImg.svg" />
      </main>
    </SuccessContainer>
  );
}
