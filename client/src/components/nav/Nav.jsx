import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logo} alt="logo da devSteam" width={"72"} />
        DevSteam
      </div>
      <input type="text" placeholder="Buscar" />
      <img src={cart} alt="icone de carrinho de compra" width={"46"} />
    </div>
  );
};

export default Nav;
