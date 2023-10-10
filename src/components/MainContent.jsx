import React, { useState } from "react";
import { Autoplay, A11y, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Modal from "react-modal";

import styles from "../css/MainContent.module.css";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import arrow from "../assets/images/icons/arrowRight.png";
import close from "../assets/images/icons/close.png";
import bigBg from "../assets/images/bgImages/mainbgBig.png";
import smallBg from "../assets/images/bgImages/mainbgSmall.png";

const MainContent = () => {
  const [formTitle, setFormTitle] = useState("");
  const [inputName, setInputName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formArea, setFormArea] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "80vw",
      padding: "20px",
      maxHeight: "82vh",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
  const formActive = (e) => {
    e.preventDefault();
    const TOKEN = "6093158422:AAHT2xcxBLxjA5A74y1ryIg5wPCyHq5W9Is";
    const ChatID = "-1001928993703";
    const URI_API = `https://api.telegram.org/bot6093158422:AAHT2xcxBLxjA5A74y1ryIg5wPCyHq5W9Is/sendMessage`;

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Категория:</b> ${formTitle}\n`;
    message += `<b>Отправитель:</b> ${inputName}\n`;
    message += `<b>Телефон:</b> ${formPhone}\n`;
    message += `<b>Доп Информация:</b> ${formArea}\n`;
    console.log(inputName.length);
    if (inputName.length < 3) {
      console.log(321321);
    } else {
      axios
        .post(URI_API, {
          chat_id: ChatID,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          setFormTitle(""), setInputName(""), setFormPhone("");
          setFormArea("");
          setTimeout(() => {
            closeModal();
          }, 2000);
        });
    }
  };
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.mainBackGround}>
          <picture>
            <source media="(min-width: 768px)" srcSet={bigBg} />
            <source media="(max-width: 767px)" srcSet={smallBg} />
            <img src={bigBg} alt="Описание изображения" />
          </picture>
        </div>

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
          onClick={() => openModal()}
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
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.formText}>
          <p> Записаться на пробный урок</p>
          <h3>Укажите свои данные и я с вами свяжусь</h3>
        </div>

        <img
          onClick={closeModal}
          src={close}
          alt="close"
          className={styles.formClose}
        />
        <form>
          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Имя"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Телефон"
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
            />

            <textarea
              name=""
              value={formArea}
              onChange={(e) => setFormArea(e.target.value)}
              placeholder="Ваши пожелания"
            ></textarea>
          </div>
          <button onClick={formActive} className={styles.formSendButton}>
            Отправить
          </button>
        </form>
      </Modal>
    </>
  );
};

export default MainContent;
