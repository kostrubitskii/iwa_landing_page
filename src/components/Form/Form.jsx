import styles from './form.module.scss';

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ASK YOUR QUESTION</h2>
      <hr className={styles.divider} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <textarea
          name="question"
          placeholder="Enter Your Question Here ....."
          className={styles.textarea}
          rows="4"
          required
        ></textarea>
        <button type="submit" className={styles.button}>
          Send your message
        </button>
      </form>
    </div>
  )
}