import { Course } from "../Course/Course";
import styles from "./courses.module.scss";
import coursesData from '../../Data/coursesData';

export const Courses = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>OUR COURSES</p>
      <div className={styles.wrapper}>
        {coursesData.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
};
