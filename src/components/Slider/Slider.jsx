import styles from "./slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import boy from "../../ui/boy.png";
import girl from "../../ui/girl.png";
import off from "../../ui/offButton.svg";
import active from "../../ui/activeNav.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { ArrowButtonRight } from "../ArrowButton/ArrowButtonRight";
import { ArrowButtonLeft } from '../ArrowButton/ArrowButtonLeft';

export const Slider = ({ id }) => {
  const slidesCount = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const adjustedIndex = swiper.realIndex;
    setActiveIndex(adjustedIndex);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        navigation={{
          nextEl: `.next-${id}`,
          prevEl: `.prev-${id}`,
        }}
        onSlideChange={handleSlideChange}
        loop={false}
        slidesPerView={2}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <img src={girl} alt="Person 1" className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h3 className={styles.name}>Name 1</h3>
                <p className={styles.role}>Role Here</p>
                <div className={`${styles.stars} ${styles["stars--5"]}`}>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit
                nec ut. Habitant mattis in vitae sagittis maecenas sed.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={boy} alt="Person 2" className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h3 className={styles.name}>Name 2</h3>
                <p className={styles.role}>Role Here</p>
                <div className={`${styles.stars} ${styles["stars--5"]}`}>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit
                nec ut. Habitant mattis in vitae sagittis maecenas sed.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={girl} alt="Person 3" className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h3 className={styles.name}>Name 3</h3>
                <p className={styles.role}>Role Here</p>
                <div className={`${styles.stars} ${styles["stars--5"]}`}>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit
                nec ut. Habitant mattis in vitae sagittis maecenas sed.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={boy} alt="Person 4" className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h3 className={styles.name}>Name 4</h3>
                <p className={styles.role}>Role Here</p>
                <div className={`${styles.stars} ${styles["stars--5"]}`}>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit
                nec ut. Habitant mattis in vitae sagittis maecenas sed.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={girl} alt="Person 3" className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h3 className={styles.name}>Name 3</h3>
                <p className={styles.role}>Role Here</p>
                <div className={`${styles.stars} ${styles["stars--5"]}`}>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                  <div className={styles.stars__star}></div>
                </div>
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit
                nec ut. Habitant mattis in vitae sagittis maecenas sed.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className={styles.box}>
        <div className={styles.pagination}>
          <button className={`${styles.arrowButton} prev-${id}`}>
            <ArrowButtonLeft
              fillColor={activeIndex === 0 ? "#C2D1E0" : "#003366"}
            />
          </button>
          <div className={styles.navField}>
            {[...Array(slidesCount)].map((_, index) => (
              <img
                key={index}
                src={index === activeIndex ? active : off}
                className={styles.navigation}
                alt={`Page ${index + 1}`}
              />
            ))}
          </div>
          <button className={`${styles.arrowButton} next-${id}`}>
            <ArrowButtonRight
              fillColor={
                activeIndex === slidesCount - 1 ? "#C2D1E0" : "#003366"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};