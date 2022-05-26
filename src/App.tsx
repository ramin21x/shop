import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import { ProductProvider } from "./context/product";

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Cart />
      <Products />
    </ProductProvider>
  );
};

export default App;
