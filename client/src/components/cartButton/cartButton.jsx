import { useState } from "react";
import styles from "./cartButton.module.css";
import logo from "../../assets/cart.svg";
import { useRecoilValue } from "recoil";
import { cartState } from "/src/atoms/cart";
import CartMenu from "../cartMenu/cartMenu"; // Importe o CartMenu aqui

const CartButton = () => {
  const [open, setOpen] = useState(false);
  const cart = useRecoilValue(cartState);

  return (
    <div className={styles.cartButton} onClick={() => setOpen(!open)}>
      <img src={logo} alt="icone de carrinho de compra" width={"46"} />
      {cart.length > 0 && <div className={styles.quantity}>{cart.length}</div>}
      <CartMenu isOpen={open} onClose={() => setOpen(false)} /> {/* Passe o estado e a função de fechamento para o CartMenu */}
    </div>
  );
};

export default CartButton;






// import CartMenu from "../cartMenu/cartMenu";
// import styles from "./cartButton.module.css";
// import { useState } from "react";
// import logo from "../../assets/cart.svg";

// import { useRecoilValue } from "recoil";
// import { cartState } from "/src/atoms/cart";

// const CartButton = () => {
//   const [open, setOpen] = useState(false);
//   const cart = useRecoilValue(cartState);

//   return (
//     <div className={styles.cartButton} onClick={() => setOpen(!open)}>
//       <img src={logo} alt="icone de carrinho de compra" width={"46"} />
//       {cart.length > 0 && <div className={styles.quantity}>{cart.length}</div>}
//       {open && <CartMenu />}
//     </div>
//   );
// };

// export default CartButton;
