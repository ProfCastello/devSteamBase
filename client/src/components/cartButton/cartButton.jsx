import CartMenu from "../cartMenu/cartMenu";
import styles from "./cartButton.module.css";
import cart from "../../assets/cart.svg";
import { useState } from "react";

const CartButton = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.cartButton} onClick={() => setOpen(!open)}>
      <img src={cart} alt="icone de carrinho de compra" width={"46"} />
      {open && <CartMenu />}
    </div>
  );
};

export default CartButton;
