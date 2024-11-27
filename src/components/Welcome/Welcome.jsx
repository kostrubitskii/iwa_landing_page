import styles from "./welcome.module.scss";
import image from "../../ui/Img.png";

export const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <p className={styles.header}>
          WELCOME TO <br />
          DICKENS EXECUTIVE <br />
          COACHING ACADEMY
        </p>

        <div className={styles.box}>
          <p className={styles.text}>
            Your resource of choice for coaching education
          </p>
          <button className={styles.button}>Explore Courses</button>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src={image} alt="people" />
      </div>
    </div>
  );
};
