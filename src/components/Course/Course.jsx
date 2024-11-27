import styles from "./course.module.scss";
import { Link } from "../Link/Link";
import star from "../../ui/star_icon.svg";
import check from "../../ui/check_icon.svg";

export const Course = ({ course }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <img src={star} alt="star" className={styles.star} />
          <p className={styles.title}>{course.title}</p>
        </div>
        <Link text="DETAILS" />
      </div>

      <div className={styles.block}>
        {course.types.map((type) => (
          <div key={type.id} className={styles.type}>
            <img src={type.icon} alt={type.label} className={styles.icon} />
            <p className={styles.typeName}>{type.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.about}>
        <p className={styles.subtitle}>{course.subtitle}</p>
        {course.models.map((model, index) => (
          <div key={index} className="model">
            <h3>{model.title}</h3>
            {model.points.map((point, i) => (
              <div key={i} className={styles.box}>
                <img src={check} alt="check" className={styles.check} />
                <p className={styles.text}>{point}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.price}>
        <span className={styles.label}>PRICE</span>
        <span className={styles.divider}></span>
        <span className={styles.value}>{course.price}</span>
      </div>

      <button className={styles.button}>JOIN</button>
    </div>
  );
};
