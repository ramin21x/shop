import React, { useState } from "react";
import { IProduct } from "../models/product";
import { data } from "./data";



export const ProductContext = React.createContext<{
  products?: IProduct[];
  setProducts?: React.Dispatch<React.SetStateAction<IProduct[]>>;
}>({});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[]>(data);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
