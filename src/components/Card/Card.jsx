import styles from "./card.module.scss";

export const Card = ({ image, subtitle, text }) => {
  return (
    <div>
      <div className={styles.card}>
        <img src={image} alt="rocket" className={styles.image} />
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </div>
  );
};
