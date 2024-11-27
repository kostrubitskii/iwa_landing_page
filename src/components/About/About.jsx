import styles from "./about.module.scss";
import image from "../../ui/workers.png";
import { Link } from "../Link/Link";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>ABOUT US</p>

        <Link text={"ABOUT US"} />
      </div>

      <div className={styles.grid}>
        <img src={image} className={styles.image} alt="workers" />

        <div className={styles.section}>
          <div className={styles.block}>
            <p className={styles.subtitle}>
              Hi, we’re Dickens Executive <br /> Coaching Academy
            </p>
            <p className={styles.info}>
              Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id
              proin rhoncus elit. Orci lacus pellentesque ultrices ut aliquet
              non fusce faucibus dictumst. Massa sit aliquam quam urna nam.
              Maecenas massa varius scelerisque pellentesque. Vestibulum ut
              rhoncus iaculis eleifend. Euismod cras et tortor at pellentesque
              duis cursus donec.
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.card}>
              <p className={styles.numbers}>5+</p>
              <p className={styles.info}>years on the educational market</p>
            </div>
            <div className={styles.card}>
              <p className={styles.numbers}>1000+</p>
              <p className={styles.info}>successful graduates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
