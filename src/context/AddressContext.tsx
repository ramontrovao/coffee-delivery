import { createContext, ReactNode, useState } from "react";

interface Address {
  number: string;
  cep: string;
  street: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

interface AddressContextType {
  address: Address;

  changeAddress: (address: Address) => void;
}

interface AddressContextProviderProps {
  children: ReactNode;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState({
    number: "",
    cep: "",
    street: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  function changeAddress(data: Address) {
    setAddress(data);
  }

  return (
    <AddressContext.Provider value={{ address, changeAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
