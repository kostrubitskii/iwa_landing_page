import { useState } from "react";
import styles from "./questions.module.scss";
import plus from "../../ui/plus.svg";
import minus from "../../ui/minus.svg";
import questions from "../../Data/questionsData";

export const Questions = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleExpand = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>
      {questions.map((q) => (
        <div key={q.id} className={styles.card}>
          <div className={styles.header}>
            <p className={styles.title}>{q.title}</p>
            <button
              onClick={() => toggleExpand(q.id)}
              className={styles.button}
              aria-label={activeCard === q.id ? "Collapse" : "Expand"}
            >
              {activeCard === q.id ? (
                <img
                  src={minus}
                  alt="minusButton"
                  className={styles.imageButton}
                />
              ) : (
                <img
                  src={plus}
                  alt="plusButton"
                  className={styles.imageButton}
                />
              )}
            </button>
          </div>

          {activeCard === q.id && (
            <div className={styles.box}>
              <div className={styles.border} />
              <div className={styles.content}>
                <p>{q.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
