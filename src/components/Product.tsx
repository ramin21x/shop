import { styled, Button, Card } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/product";
import { IProduct } from "../models/product";
import { ReactComponent as IconDelete } from "../assets/delete.svg";

export const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  const { setProducts } = useContext(ProductContext);

  const handleIncrement = () => {
    setProducts!((pre) => {
      const products = [...pre];
      const index = products.findIndex((p) => p.id === product.id);
      products[index].count += 1;
      return products;
    });
  };

  const handleDcrement = () => {
    setProducts!((pre) => {
      const products = [...pre];
      const index = products.findIndex((p) => p.id === product.id);
      products[index].count -= 1;
      return products;
    });
  };

  return (
    <Container>
      <Card>
        <div className="main">
          <img className="img" src={product.img} alt="" />
          <div className="productName">{product.name}</div>
          <div className="price">{product.price}</div>
        </div>
        <div className="footer">
          <div className="details">Details</div>
          <div className="actions">
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleIncrement}
              className={`${
                product.count > 0 ? "increment" : "add-to-cart-btn"
              }`}
            >
              {product.count > 0 ? "+" : "add to cart"}
            </Button>

            {product.count > 0 && (
              <>
                <div className="count">{product.count}</div>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDcrement}
                  className="decrement"
                >
                  {product.count > 1 ? "-" : <IconDelete className="icon" />}
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  width: "250px",
  height: "250px",
  margin: "5px",
  padding: theme.spacing(1),
  "& .main": {
    padding: theme.spacing(0.8),
    "& .img": {
      width: "100%",
    },
    "& .productName": {
      ...theme.typography.h4,
      fontWeight: "bold",
    },
    "& .price": {
      ...theme.typography.h6,
      fontWeight: "bold",
    },
  },
  "& .footer": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(0.8),
    background: "#d7d7d7",
    fontWeight: "bold",
    "& .details": {
      flex: 1,
      color: theme.palette.primary.light,
      ...theme.typography.body1,
      fontWeight: "bold",
    },
    "& .actions": {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      "& .increment": {
        minWidth: "0",
        height: theme.spacing(4.17),
        width: theme.spacing(4.17),
        ...theme.typography.h5,
      },
      "& .add-to-cart-btn": {
        height: theme.spacing(4.17),
      },
      "& .count": {
        textAlign: "center",
        fontWeight: "bold",
      },
      "& .decrement": {
        minWidth: "unset",
        height: theme.spacing(4.17),
        width: theme.spacing(4.17),
        padding: "6px",
        ...theme.typography.h5,
        "& .icon": {
          width: "100%",
          height: "100%",
          fill: "white",
        },
      },
    },
  },
}));
