import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CoffeeContext } from "../../context/CoffeeListContext";
import { AddressContext } from "../../context/AddressContext";
import { CheckoutContainer, PaymentOptionButton } from "./styles";
import { CheckoutItem } from "./components/CheckoutItem";
import { Link, useNavigate } from "react-router-dom";

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, "O CEP precisa ter 8 digitos!")
    .max(8, "O CEP precisa ter 8 digitos!"),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod
    .string()
    .min(2, "o UF precisa ter 2 digitos!")
    .max(2, "o UF precisa ter 2 digitos!"),
});

type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export function Checkout() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { changeAddress } = useContext(AddressContext);
  const coffeeData = useContext(CoffeeContext);
  const coffeeList = coffeeData.coffeeState.coffeeList;

  const newAddressForm = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: "",
      uf: "",
      city: "",
      district: "",
      street: "",
      number: "",
      complement: "",
    },
  });

  const { register, handleSubmit, reset } = newAddressForm;
  const navigate = useNavigate();

  const handleSetAddress = (data: newAddressFormData) => {
    reset();

    changeAddress(data);

    navigate("/success");
  };

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
    <CheckoutContainer onSubmit={handleSubmit(handleSetAddress)}>
      <div className="wrapper1">
        <h3>Complete seu pedido</h3>

        <section className="addressSection">
          <header>
            <p>Endereço de entrega</p>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>

          <main>
            <div>
              <input type="text" placeholder="CEP" {...register("cep")} />
            </div>

            <div>
              <input type="text" placeholder="Rua" {...register("street")} />
            </div>

            <div className="input-wrapper1">
              <input type="text" placeholder="Número" {...register("number")} />
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>

            <div className="input-wrapper2">
              <input
                type="text"
                placeholder="Bairro"
                {...register("district")}
              />
              <input type="text" placeholder="Cidade" {...register("city")} />
              <input type="text" placeholder="UF" {...register("uf")} />
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
            <RadioGroup.Root
              onValueChange={(method: string) =>
                coffeeData.setPaymentMethod(method)
              }
              defaultValue="Dinheiro"
            >
              <PaymentOptionButton value="Cartão de crédito">
                CARTÃO DE CRÉDITO
              </PaymentOptionButton>
              <PaymentOptionButton value="Cartão de débito">
                CARTÃO DE DÉBITO
              </PaymentOptionButton>
              <PaymentOptionButton value="Dinheiro">
                DINHEIRO
              </PaymentOptionButton>
            </RadioGroup.Root>
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
            <button type="submit">CONFIRMAR PEDIDO</button>
          </div>
        </section>
      </div>
    </CheckoutContainer>
  );
}
