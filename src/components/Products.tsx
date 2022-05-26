import { styled } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/product";
import { Product } from "./Product";

export const Products: React.FC = () => {
  const { products } = useContext(ProductContext);
  return (
    <Container>
      {products?.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 2fr)',
  gridAutoRows: theme.spacing(50),
  gap: theme.spacing(1),
  padding: theme.spacing(4),
  '@media (max-width: 1150px)': {
    gridTemplateColumns: 'repeat(3, 2fr)',
  },
  '@media (max-width: 900px)': {
    gridTemplateColumns: 'repeat(2, 2fr)',
    gridAutoRows: theme.spacing(53),
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: 'repeat(1, 2fr)',
    gridAutoRows: theme.spacing(53),
  },
}));
