import React, { useState } from "react";
import styles from "../css/SectionAbout.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

import dipl1 from "../assets/images/AboutMe/slider/diplom1.jpg";
import dipl2 from "../assets/images/AboutMe/slider/diplom2.jpg";
import dipl3 from "../assets/images/AboutMe/slider/diplom3.jpg";
import dipl4 from "../assets/images/AboutMe/slider/diplom4.jpg";
import dipl5 from "../assets/images/AboutMe/slider/diplom5.jpg";
import dipl6 from "../assets/images/AboutMe/slider/diplom6.jpg";

const SectionAbout = () => {
  return (
    <>
      <div className={styles.SectionAbout}>
        <div className={styles.container}>
          <h2 className={styles.title}>Обо мне</h2>
          <div className={styles.SectionAboutInner}>
            <div className={styles.maintext}>
              Добро пожаловать на мой сайт по обучению вокала! Я предлагаю
              профессиональные онлайн-уроки вокала для начинающих и опытных
              певцов. Я помогу вам развить ваш голос и научиться исполнять
              любимые песни с уверенностью и стилем. Я предлагаю индивидуальные
              занятия, которые адаптированы под ваши потребности и уровень
              подготовки. Моя методика основана на практических упражнениях,
              которые помогут вам улучшить диапазон голоса, технику дыхания и
              артикуляцию. Присоединяйтесь к нашему сообществу певцов и начните
              свой путь к музыкальному успеху!
            </div>
            <div className={styles.maintext}>
              Меня зовут Якимцева Арина Дмитриевна. Я преподаватель
              эстрадно-джазового вокала, дирижёр, логопед.
              <h4>Обучение:</h4>
              <ul>
                <li>
                  📖Орский колледж искусств, дирижёрско-хоровое отделение.
                </li>
                <li>
                  📖Санкт-Петербургский институт культуры по специальности
                  "Эстрадно-джазовое пение".
                </li>
                <li>
                  📖Курсы повышения квалификации прохожу каждые 2-3 месяца, из
                  них самое крупное и интересное обучение- курс по методу
                  Complete Vocal Technique "SINGING. BASIC TECHNIQUE".
                </li>
                <li>
                  📖В этом году успешно прошла курсы переподготовки  по теме
                  "Логопедия в дошкольных образовательных учреждениях и
                  начальной школе".
                </li>
              </ul>
              <h4> Опыт:</h4>
              <ul>
                Преподавательской деятельностью занимаюсь более 10-ти лет. В
                студии Buff веду:
                <li>✅логоритмику</li>
                <li>✅вокальный ансамбль</li>
                <li>✅индивидуальный вокал</li>
                <li> ✅караоке-терапию</li>
              </ul>
            </div>
            <div className={styles.SectionAboutSlider}>
              <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                breakpoints={{
                  1000: {
                    slidesPerView: 2,
                  },
                }}
                speed={2500}
                autoplay={{
                  delay: 500,
                }}
              >
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl3} alt="dipl1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl2} alt="dipl1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl1} alt="dipl1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl4} alt="dipl1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl5} alt="dipl1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.SectionAboutSliderItem}>
                    <img src={dipl6} alt="dipl1" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
