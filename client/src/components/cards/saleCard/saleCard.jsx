import Button from "../../forms/button/button";
import styles from "./saleCard.module.css";

const SaleCard = ({ discount, fullPrice }) => {
  return (
    <div className={styles.saleCard}>
      <img src="https://placehold.co/600x400" alt="" width={250} height={300}/>
      <div className={styles.info}>
        <h3>Oferta Exclusiva</h3>
        <div className={styles.priceCard}>
          <div>-{discount}%</div>
          <div>
            <p>R${fullPrice}</p>
            <h4>R${fullPrice - fullPrice * (discount / 100)}</h4>
          </div>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
};

SaleCard.defaultProps = {
  discount: "50",
  fullPrice: "199.90",
};

export default SaleCard;
