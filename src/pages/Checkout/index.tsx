import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CoffeeContext } from "../../context/CoffeeListContext";
import { AddressContext } from "../../context/AddressContext";
import { CheckoutContainer, PaymentOptionButton } from "./styles";
import { CheckoutItem } from "./components/CheckoutItem";
import { Link, useNavigate } from "react-router-dom";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { InputForm } from "../../components/InputForm";

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, "O CEP precisa ter 8 digitos!")
    .max(8, "O CEP precisa ter 8 digitos!"),
  street: zod.string(),
  number: zod
    .string()
    .min(1, "Um número residencial tem no mínimo 1 digito!")
    .max(5, "Um número residencial tem no máximo 5 digitos!"),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod
    .string()
    .min(2, "o UF precisa ter 2 dígitos!")
    .max(2, "o UF precisa ter 2 dígitos!"),
});

type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export const Checkout: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [canSubmit, setCanSubmit] = useState(true);
  const [addressIsFound, setAddressIsFound] = useState(false);
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

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
  } = newAddressForm;
  const navigate = useNavigate();

  const addressFormFields = {
    cep: watch("cep"),
    uf: watch("uf"),
    city: watch("city"),
    district: watch("district"),
    street: watch("street"),
    number: watch("number"),
    complement: watch("complement"),
  };

  const handleSetAddress = (data: newAddressFormData) => {
    changeAddress(data);
    coffeeData.purchaseCoffee();

    reset();
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

  useEffect(() => {
    const { cep, city, complement, district, number, street, uf } =
      addressFormFields;

    if (
      cep === "" ||
      city === "" ||
      complement === "" ||
      district === "" ||
      number === "" ||
      street === "" ||
      uf === "" ||
      coffeeList.length === 0
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [addressFormFields]);

  useEffect(() => {
    interface AddresAPIData {
      cep: string;
      logradouro: string;
      complemento: string;
      bairro: string;
      localidade: string;
      uf: string;
      ibge: string;
      gia: string;
      ddd: string;
      siafi: string;
      erro: "true";
    }

    const cep = addressFormFields.cep;

    if (cep.length === 8) {
      async function getAddress() {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const data = await response
          .json()
          .then((data: AddresAPIData) => {
            console.log(data);

            if (!data["erro"]) {
              setValue("street", data["logradouro"]);
              setValue("district", data["bairro"]);
              setValue("city", data["localidade"]);
              setValue("uf", data["uf"]);

              setAddressIsFound(true);
            } else {
              setValue("street", "");
              setValue("district", "");
              setValue("city", "");
              setValue("uf", "");
              setAddressIsFound(false);
            }
          })
          .catch((err) => {
            alert(err);
          });

        return data;
      }

      getAddress();
    } else {
      setAddressIsFound(false);
    }
  }, [addressFormFields.cep]);

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSetAddress)}>
      <div className="wrapper1">
        <h3>Complete seu pedido</h3>

        <section className="addressSection">
          <header>
            <div>
              <MapPin size={22} />
            </div>

            <div>
              <strong>Endereço de entrega</strong>

              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <main>
            <InputForm
              error={errors["cep"]?.message}
              type="number"
              placeholder="CEP"
              {...register("cep")}
            />

            <InputForm
              type="text"
              placeholder="Rua"
              disabled={addressIsFound}
              {...register("street")}
            />

            <InputForm
              error={errors["number"]?.message}
              type="number"
              placeholder="Número"
              {...register("number")}
            />

            <InputForm
              type="text"
              placeholder="Bairro"
              disabled={addressIsFound}
              {...register("district")}
            />

            <InputForm
              type="text"
              placeholder="Cidade"
              disabled={addressIsFound}
              {...register("city")}
            />

            <InputForm
              error={errors["uf"]?.message}
              type="text"
              placeholder="UF"
              disabled={addressIsFound}
              {...register("uf")}
            />

            <InputForm
              type="text"
              placeholder="Complemento"
              {...register("complement")}
            />
          </main>
        </section>

        <section className="paymentSection">
          <header>
            <div>
              <CurrencyDollar size={22} />
            </div>

            <div>
              <strong>Pagamento</strong>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <main>
            <RadioGroup.Root
              onValueChange={(method: string) =>
                coffeeData.setPaymentMethod(method)
              }
              defaultValue="Dinheiro"
            >
              <PaymentOptionButton value="Cartão de crédito">
                <CreditCard size={16} /> CARTÃO DE CRÉDITO
              </PaymentOptionButton>
              <PaymentOptionButton value="Cartão de débito">
                <Bank size={16} /> CARTÃO DE DÉBITO
              </PaymentOptionButton>
              <PaymentOptionButton value="Dinheiro">
                <Money size={16} /> DINHEIRO
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
            <button type="submit" disabled={canSubmit}>
              CONFIRMAR PEDIDO
            </button>
          </div>
        </section>
      </div>
    </CheckoutContainer>
  );
};
