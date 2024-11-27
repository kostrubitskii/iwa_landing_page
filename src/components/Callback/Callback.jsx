import styles from "./callback.module.scss";

const handleSubmit = (event) => {
  event.preventDefault();
};

export const Callback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>
          Companies, universities, directors and presidents
        </p>
        <p className={styles.text}>
          If you'd like to learn more information about our work with large
          <br />
          organizations, let's schedule a call.{" "}
        </p>
      </div>

      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <button type="submit" className={styles.button}>
            Schedule a call
          </button>
        </form>
      </div>
    </div>
  );
};
