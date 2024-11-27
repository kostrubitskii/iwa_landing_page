import { Slider } from '../Slider/Slider';
import styles from './feedback.module.scss';

export const Feedbacks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Testimonials</h1>
      <Slider id={0}/>
    </div>
  )
}