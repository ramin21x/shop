import {
  Badge,
  Card,
  styled,
  Menu,
  MenuItem as MUIMenuItem,
  Button,
} from "@mui/material";
import { ReactComponent as IconShop } from "../assets/shopping_cart.svg";
import { ReactComponent as IconDelete } from "../assets/delete.svg";
import { useContext, useState } from "react";
import { ProductContext } from "../context/product";

export const Cart: React.FC = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIncrement = (id: number) => {
    setProducts!((pre) => {
      const products = [...pre];
      const index = products.findIndex((p) => p.id === id);
      products[index].count += 1;
      return products;
    });
  };

  const handleDcrement = (id: number) => {
    setProducts!((pre) => {
      const products = [...pre];
      const index = products.findIndex((p) => p.id === id);
      products[index].count -= 1;
      return products;
    });
  };

  return (
    <Container>
      <Badge
        className="badge"
        badgeContent={products!.map((v) => v.count).reduce((a, b) => a + b, 0)}
        color="secondary"
        onClick={handleClick}
      >
        <IconShop color="action" />
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {products &&
        products!.map((v) => v.count).reduce((a, b) => a + b, 0) > 0 ? (
          products
            .filter((v) => v.count > 0)
            .map((item) => (
              <MenuItem className="itemxxx" key={item.id}>
                <img
                  className="item-img"
                  style={{ width: "100px" }}
                  src={item.img}
                  alt=""
                />
                <div className="item-details">
                  <div className="item-name">{item.name}</div>{" "}
                  <div className="item-price">{item.price}</div>
                </div>
                <div className="count">{item.count}</div>
                <div className="actions">
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => handleIncrement(item.id)}
                    className="increment"
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDcrement(item.id)}
                    className="decrement"
                  >
                    {item.count > 1 ? "-" : <IconDelete className="icon" />}
                  </Button>
                </div>
              </MenuItem>
            ))
        ) : (
          <MenuItem>Cart is Empty!</MenuItem>
        )}
      </Menu>
    </Container>
  );
};

const MenuItem = styled(MUIMenuItem)(({ theme }) => ({
  "& .item-img": {
    width: "100px",
  },
  "& .item-details": {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    "& .item-name": {
      ...theme.typography.h6,
      fontWeight: "bold",
    },
    "& .item-price": {
      ...theme.typography.body1,
      fontWeight: "bold",
    },
  },
  "& .count": {
    textAlign: "center",
    ...theme.typography.h5,
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
  },
  "& .actions": {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: theme.spacing(3),
    "& .increment": {
      minWidth: "0",
      height: theme.spacing(4.17),
      width: theme.spacing(4.17),
      ...theme.typography.h5,
      margin: theme.spacing(1),
    },
    "& .decrement": {
      margin: theme.spacing(1),
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
}));

const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  "& .badge": {
    width: theme.spacing(3),
  },
}));
