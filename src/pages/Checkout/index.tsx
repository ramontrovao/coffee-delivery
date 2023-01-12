import { CheckoutContainer } from "./styles";
import { CheckoutItem } from "./components/CheckoutItem";
import { Link } from "react-router-dom";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="wrapper1">
        <h3>Complete seu pedido</h3>

        <section className="addressSection">
          <header>
            <p>Endereço de entrega</p>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>

          <main>
            <div>
              <input type="text" placeholder="CEP" />
            </div>

            <div>
              <input type="text" placeholder="Rua" />
            </div>

            <div className="input-wrapper1">
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div className="input-wrapper2">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </main>
        </section>

        <section className="paymentSection">
          <header>
            <p>Pagamento</p>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </header>

          <main>
            <button>CARTÃO DE CRÉDITO</button>
            <button>CARTÃO DE DÉBITO</button>
            <button>DINHEIRO</button>
          </main>
        </section>
      </div>

      <div className="wrapper2">
        <h3>Cafés selecionados</h3>

        <section className="cartSection">
          <header>
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </header>

          <div className="cartResume">
            <div>
              <p>Total de itens</p>
              <p>R$29,70</p>
            </div>

            <div>
              <p>Entrega</p>
              <p>R$3,50</p>
            </div>

            <div>
              <strong>Total</strong>

              <strong>R$33,20</strong>
            </div>
          </div>

          <div className="cartSubmit">
            <Link to="/success">
              <button type="submit">CONFIRMAR PEDIDO</button>
            </Link>
          </div>
        </section>
      </div>
    </CheckoutContainer>
  );
}
