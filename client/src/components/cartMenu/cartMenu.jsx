/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Button from "../forms/button/button";
import styles from "./cartMenu.module.css";
import CartOption from "../cartOption/cartOption";
import { cartState } from "/src/atoms/cart";
import { useRecoilState } from "recoil";

const CartMenu = ({ isOpen, onClose }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const cartRef = useRef();

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };
  useEffect(() => {
    const handleCloseCart = (e) => {
      if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        onClose(); // Chama a função onClose para fechar o carrinho
      }
    };

    document.addEventListener("mousedown", handleCloseCart);

    return () => {
      document.removeEventListener("mousedown", handleCloseCart);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.menu}
      ref={cartRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.options}>
        {cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>}
        {cart.map((cartInfo, pos) => (
          <CartOption
            img={cartInfo.img}
            title={cartInfo.name}
            price={cartInfo.price}
            onRemove={() => handleRemoveProduct(pos)}
            key={`cart-info-${pos}`}
          />
        ))}
      </div>

      <div className={styles.priceLine}>
        <h2>Total</h2>
        <h2>
          R${" "}
          {cart
            .reduce((prev, current) => prev + current.price, 0)
            .toFixed(2)
            .replace(".", ",")}
        </h2>
      </div>
      <Button fullwidth>Finalizar Compra</Button>
    </div>
  );
};

export default CartMenu;

// import Button from "../forms/button/button";
// import styles from "./cartMenu.module.css";

// import CartOption from "../cartOption/cartOption";

// import { cartState } from "/src/atoms/cart";
// import { useRecoilState } from "recoil";

// const CartMenu = () => {
//   const [cart, setCart] = useRecoilState(cartState);

//   const handleRemoveProduct = (pos) => {
//     setCart(cart.filter((obj, posObj) => posObj !== pos));
//   };

//   return (
//     <>
//       <div className={styles.click}></div>
//       <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.options}>
//           {cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>}
//           {cart.map((cartInfo, pos) => (
//             <CartOption
//               img={cartInfo.img}
//               title={cartInfo.name}
//               price={cartInfo.price}
//               onRemove={() => handleRemoveProduct(pos)}
//               key={`cart-info-${pos}`}
//             />
//           ))}
//         </div>

//         <div className={styles.priceLine}>
//           <h2>Total</h2>
//           <h2>
//             R${" "}
//             {cart
//               .reduce((prev, current) => prev + current.price, 0)
//               .toFixed(2)
//               .replace(".", ",")}
//           </h2>
//         </div>
//         <Button fullwidth>Finalizar Compra</Button>
//       </div>
//     </>
//   );
// };

// export default CartMenu;
