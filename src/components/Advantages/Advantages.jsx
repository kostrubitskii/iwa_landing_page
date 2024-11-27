import styles from "./advantages.module.scss";
import rocket from "../../ui/rocket_icon.svg";
import lamp from "../../ui/lamp_icon.svg";
import book from "../../ui/book_icon.svg";
import { Card } from "../Card/Card";

export const Advantages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.header}>ADVANTAGES</p>
      </div>
      <div className={styles.block}>
        <Card
          image={rocket}
          subtitle={"Launch Your Coaching Career"}
          text={"A comprehensive course track to ICF credentialing"}
        />
        <Card
          image={lamp}
          subtitle={"Coaching in the workplace"}
          text={"Serve as a thought leader within your organization"}
        />
        <Card
          image={book}
          subtitle={"Continuing Coaching Education"}
          text={"Serve as a thought leader within your organization"}
        />
      </div>
    </div>
  );
};
