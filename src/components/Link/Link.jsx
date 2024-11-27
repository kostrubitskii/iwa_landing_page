import styles from "./link.module.scss";
import arrow from "../../ui/arrow.svg";


export const Link = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <img src={arrow} alt="arrow" className={styles.arrow} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
