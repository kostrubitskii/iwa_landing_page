import { About } from "../About/About";
import { Advantages } from "../Advantages/Advantages";
import { Callback } from "../Callback/Callback";
import { Courses } from "../Courses/Courses";
import { Faq } from "../Faq/Faq";
import { Feedbacks } from "../Feedbacks/Feedbacks";
import { Footer } from "../Footer/Footer";
import { Welcome } from "../Welcome/Welcome";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Welcome />
      <Advantages />
      <About />
      <Courses />
      <Callback />
      <Feedbacks />
      <Faq />
      <Footer />
    </div>
  );
};
