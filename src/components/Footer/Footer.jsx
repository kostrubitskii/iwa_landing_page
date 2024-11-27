import styles from "./footer.module.scss";
import logo from "../../ui/Logo.png";

export const Footer = () => {
  return (
      <div className={styles.container}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>

        <a href="/" className={styles.copyright}>© 2024 Dickens Consulting Group, LLC</a>

        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <button className={styles.buttons}>Courses</button>
            <button className={styles.buttons}>About</button>
            <button className={styles.buttons}>Contact us</button>
          </nav>

        </div>
      </div>
  );
};
