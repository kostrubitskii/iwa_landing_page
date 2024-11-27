import { Form } from "../Form/Form";
import { Questions } from "../Questions/Questions";
import styles from "./faq.module.scss";

export const Faq = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Faq</h1>
      <div className={styles.wrapper}>
        <Questions />
        <Form />
      </div>
    </div>
  );
};
