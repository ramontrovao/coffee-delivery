import { SuccessContainer } from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>

        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <main>
        <div className="orderInfos">
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />{" "}
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de crédito</strong>
            </p>
          </div>
        </div>

        <img src="./assets/successImg.svg" />
      </main>
    </SuccessContainer>
  );
}
