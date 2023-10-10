import React, { useRef, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import styles from "../css/SectionLessons.module.css";

import aboutMe from "../assets/images/AboutMe/aboutMe6.png";
import aboutMe1 from "../assets/images/Education/IMG1734.jpg";
import aboutMe2 from "../assets/images/Education/IMG1740.jpg";
import close from "../assets/images/icons/close.png";

const SectionLessons = () => {
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
      height: "50vh",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(item) {
    setIsOpen(true);
    setFormTitle(item.itemSubTitle);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const children = [
    {
      itemSubTitle: "Индивидуальный оффлайн (онлайн) урок",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "1000 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "3600 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "7200 руб",
      image: aboutMe,
    },
    {
      itemSubTitle: "Ансамбль для детей от 3-8 лет",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "1750 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "3600 руб",
      image: aboutMe1,
    },
    {
      itemSubTitle: "Логоритмика для детей от 1,5-6",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "1500 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "3000 руб",
      image: aboutMe2,
    },
  ];
  const adult = [
    {
      itemSubTitle: "Индивидуальный оффлайн (онлайн) урок",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "1000 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "3600 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "7200 руб",
      image: aboutMe,
    },
    {
      itemSubTitle: "Караоке-терапия 1 час",
      itemSubText: "adfad adsf ads adfa adf asdf adf adf adf ",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      image: aboutMe2,
    },
    {
      itemSubTitle: "Караоке-терапия на ваш корпоратив",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "1,5-2 часа в студии до 10 человек",
      priceOneTime: "500 руб",
      image: aboutMe2,
    },
    {
      itemSubTitle: "Выступление на вашем празднике (без аппаратуры)",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "1,5 часа-10 песен",
      priceOneTime: "3000 руб",
      image: aboutMe2,
    },
    {
      itemSubTitle:
        "Написание текста под выбранный вами минус (песня-поздравление для учителя, бабушки, дедушки, жениху и т.д.)",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Одна песня",
      priceOneTime: "2000 руб",
      image: aboutMe2,
    },
  ];
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

    axios
      .post(URI_API, {
        chat_id: ChatID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.tel.value = "";
        this.text.value = "";
      });
  };

  return (
    <>
      <div className={styles.SectionLessons}>
        <div className={styles.container}>
          <h2 className={styles.title}>Уроки</h2>
          <div className={styles.lessonsBox}>
            <div className={styles.lessonsItem}>
              <h3>Дети</h3>
              {children.map((item, index) => (
                <div key={index} className={styles.itemInner}>
                  <img
                    className={styles.itemInnerImage}
                    src={item.image}
                    alt="aboutMe"
                  />

                  <div className={styles.itemDecrp}>
                    <div className={styles.itemDecrpText}>
                      <div className={styles.itemSubTitle}>
                        {item.itemSubTitle}
                      </div>

                      <div className={styles.itemSubText}>
                        {item.itemSubText}
                      </div>
                    </div>

                    <div className={styles.itemDecrpPrices}>
                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        <p>
                          {item.priceOneTimeDicr} <br /> {item.priceOneTime}
                        </p>
                      </div>

                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        {item.priceSeasonTime4Dicr ? (
                          <p>
                            {item.priceSeasonTime4Dicr} <br />
                            {item.priceSeasonTime4}
                          </p>
                        ) : null}
                      </div>
                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        {item.priceSeasonTime8Dicr ? (
                          <p>
                            {item.priceSeasonTime8Dicr} <br />
                            {item.priceSeasonTime8}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.lessonsItem}>
              <h3>Взрослые</h3>
              {adult.map((item, index) => (
                <div key={index} className={styles.itemInner}>
                  <img
                    className={styles.itemInnerImage}
                    src={item.image}
                    alt="aboutMe"
                  />
                  <div className={styles.itemDecrp}>
                    <div className={styles.itemDecrpText}>
                      <div className={styles.itemSubTitle}>
                        {item.itemSubTitle}
                      </div>
                      <div className={styles.itemSubText}>
                        {item.itemSubText}
                      </div>
                    </div>

                    <div className={styles.itemDecrpPrices}>
                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        <p>
                          {item.priceOneTimeDicr} <br /> {item.priceOneTime}
                        </p>
                      </div>

                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        {item.priceSeasonTime4Dicr ? (
                          <p>
                            {item.priceSeasonTime4Dicr} <br />
                            {item.priceSeasonTime4}
                          </p>
                        ) : null}
                      </div>
                      <div
                        onClick={() => openModal(item)}
                        className={styles.preicesInner}
                      >
                        {item.priceSeasonTime8Dicr ? (
                          <p>
                            {item.priceSeasonTime8Dicr} <br />
                            {item.priceSeasonTime8}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div className={styles.formText}>
                  <p> {formTitle}</p>
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
                  <button
                    onClick={formActive}
                    className={styles.formSendButton}
                  >
                    Отправить
                  </button>
                </form>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLessons;
