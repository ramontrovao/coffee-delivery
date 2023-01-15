import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/CoffeeListContext";
import { CheckoutContainer } from "./styles";
import { CheckoutItem } from "./components/CheckoutItem";
import { Link } from "react-router-dom";

export function Checkout() {
  const coffeeData = useContext(CoffeeContext);
  const coffeeList = coffeeData.coffeeState.coffeeList;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    type priceAndquantitiesType = {
      price: string;
      quantity: number;
    };

    const pricesAndQuantities: Array<priceAndquantitiesType> = [];

    if (coffeeList.length >= 0) {
      setTotalPrice(0);

      coffeeList.map(({ price, quantity }) => {
        pricesAndQuantities.push({ price, quantity });
      });

      pricesAndQuantities.map((priceAndQuantity) =>
        setTotalPrice(
          (prev) =>
            prev +
            Number(priceAndQuantity.price.replace(",", ".")) *
              priceAndQuantity.quantity
        )
      );
    }
  }, [coffeeList]);

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
            {coffeeList.length > 0 &&
              coffeeData.coffeeState.coffeeList.map((coffee) => (
                <CheckoutItem
                  name={coffee.name}
                  price={coffee.price}
                  imgSrc={coffee.imgSrc}
                />
              ))}

            {coffeeList.length <= 0 && (
              <p className="noItemsFound">
                Nenhum item no carrinho. Veja nosso catálogo clicando{" "}
                <Link to={"/"}>aqui</Link>
              </p>
            )}
          </header>

          <div className="cartResume">
            <div>
              <p>Total de itens</p>
              <p>R${totalPrice.toFixed(2).toString().replace(".", ",")}</p>
            </div>

            <div>
              <p>Entrega</p>
              <p>R$3,50</p>
            </div>

            <div>
              <strong>Total</strong>

              <strong>
                R${(totalPrice + 3.5).toFixed(2).toString().replace(".", ",")}
              </strong>
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
