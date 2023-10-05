import Button from "../forms/button/button";
import styles from "./cartMenu.module.css";

const CartMenu = () => {
  return (
    <div className={styles.menu} onClick={(e)=>e.stopPropagation()}>
      <div className={styles.options}></div>

      <div className={styles.priceLine}></div>
      <Button fullwidth>Finalizar Compra</Button>
    </div>
  );
};

export default CartMenu;
