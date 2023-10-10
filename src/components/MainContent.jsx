import React, { useState } from "react";
import styles from "../css/MainContent.module.css";
import { Autoplay, A11y, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import arrow from "../assets/images/icons/arrowRight.png";

const MainContent = () => {
  const [toogleButton, SetToogleButton] = useState(false);
  const handleMouseEnter = () => {
    if (innerWidth >= 1000) {
      setTimeout(() => {
        SetToogleButton(true);
      }, 300);
    }
  };
  const handleMouseLeave = () => {
    if (innerWidth >= 1000) {
      SetToogleButton(false);
      setTimeout(() => {
        SetToogleButton(false);
      }, 301);
    }
  };
  if (innerWidth < 1000) {
    setTimeout(() => {
      SetToogleButton(true);
    }, 10);
  }
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.mySwiperInner}>
          <Swiper
            modules={[EffectCube, Autoplay, A11y]}
            autoplay={{
              delay: 1500,
            }}
            effect={"cube"}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide>Преподаватель вокала</SwiperSlide>
            <SwiperSlide>
              Индивидуальные занятия и групповые курсы онлайн и в студии
            </SwiperSlide>
            <SwiperSlide>Арина Якимцева</SwiperSlide>
          </Swiper>
        </div>
        <div
          className={styles.mainButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {toogleButton ? <span>Записаться на пробное занятие</span> : ""}

          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.mainText}>
        <h1 className={styles.title}>Преподаватель вокала</h1>
        <p className={styles.mainTextContent}>
          Добро пожаловать на мой сайт по обучению вокала! Я предлагаю
          профессиональные онлайн-уроки вокала для начинающих и опытных певцов.
          Я помогу вам развить ваш голос и научиться исполнять любимые песни с
          уверенностью и стилем. Я предлагаю индивидуальные занятия, которые
          адаптированы под ваши потребности и уровень подготовки. Моя методика
          основана на практических упражнениях, которые помогут вам улучшить
          диапазон голоса, технику дыхания и артикуляцию. Присоединяйтесь к
          нашему сообществу певцов и начните свой путь к музыкальному успеху!
        </p>
      </div>
    </>
  );
};

export default MainContent;
