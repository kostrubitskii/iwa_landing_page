import styles from "./header.module.scss";
import logo from "../../ui/Logo.png";

export const Header = () => {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </a>

      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <button className={styles.buttons}>Home</button>
          <button className={styles.buttons}>Courses</button>
          <button className={styles.buttons}>About</button>
          <button className={styles.buttons}>Contact us</button>
        </nav>

        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};
