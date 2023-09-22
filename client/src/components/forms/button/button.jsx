import styles from "./button.module.css";

const Button = ({ children, fullwidth }) => {
  return (
    <div className={`${styles.button} ${fullwidth && styles.fullWidth}`}>
      {children}
    </div>
  );
};

export default Button;
