import React, {useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import MyInput from "./UI/MyInput";
import styles from "../css/SectionLessons.module.css";

import close from "../assets/images/icons/close.png";
import kkk from "../assets/images/Education/karaoke.png";
import uuuu from "../assets/images/Education/uuuu.png";
import hjhj from "../assets/images/Education/hjhj.png";
import klkl from "../assets/images/Education/klkl.png";
import yhyh from "../assets/images/Education/yhyh.png";
import asas from "../assets/images/Education/asas.png";
import egeg from "../assets/images/Education/egeg.png";

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
      maxHeight: "82vh",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(item) {
    setIsOpen(true);
    setFormTitle(item.itemSubTitle);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const children = [
    {
      itemSubTitle: "Индивидуальный оффлайн (онлайн) урок",
      itemSubText:
        "Индивидуальный урок вокала (оффлайн/онлайн).Урок в комфортной обстановке один на один с педагогом. Вы приходите со своим запросом, а  я ищу пути решения, применяя профессиональные инструменты для достижения главной цели, при этом  сохраняя здоровье голосового аппарата. Длительность одного урока - 45 минут",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "1000 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "3600 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "7200 руб",
      image: klkl,
    },
    {
      itemSubTitle: "Ансамбль для детей от 3-8 лет",
      itemSubText: `Вокальный ансамбль для детей от 3 до 8 лет (оффлайн). Группы до 7 человек! Программа занятий основана на современных вокальных научно-доказанных методиках! <br /> План занятий: ✅Работа над дикцией и артикуляцией. ✅Постановка певческого дыхания. ✅Разучивание нот, распевок. ✅Разучивание современных детских песен. ✅Подбор и отработка движений. ✅Обучение работе с микрофоном. ✅Музыкальные игры на развитие  чувства ритма, слуха и координации. Длительность одного занятия - 30-45 минут.`,
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "1750 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "3600 руб",
      image: yhyh,
    },
    {
      itemSubTitle: "Логоритмика для детей от 1,5-6",
      itemSubText:
        "Логоритмика для детей от 1,5 лет.Группа до 5 человек! Музыкально-развивающие занятия, направленные на запуск речи/ коррекцию речевых нарушений. План занятия: ✅Разучивание песен, попевок. ✅Игра на детских музыкальных инструментах. ✅Пальчиковые игры. ✅Хореографические этюды. ✅Театрализация. ✅Артикуляционная и дыхательная гимнастика. Длительность занятия 25-30 минут",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "1500 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "3000 руб",
      image: hjhj,
    },
  ];
  const adult = [
    {
      itemSubTitle: "Индивидуальный оффлайн (онлайн) урок",
      itemSubText:
        "Индивидуальный урок вокала (оффлайн/онлайн).Урок в комфортной обстановке один на один с педагогом. Вы приходите со своим запросом, а  я ищу пути решения, применяя профессиональные инструменты для достижения главной цели, при этом  сохраняя здоровье голосового аппарата. Длительность одного урока - 45 минут",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "1000 руб",
      priceSeasonTime4Dicr: "Абонемент на 4 занятия",
      priceSeasonTime4: "3600 руб",
      priceSeasonTime8Dicr: "Абонемент на 8 занятий",
      priceSeasonTime8: "7200 руб",
      image: klkl,
    },
    {
      itemSubTitle: "Караоке-терапия 1 час",
      itemSubText:
        "Караоке-терапия 16+ (оффлайн). Вокально-терапевтический проект, помогающий людям  решить свои психологические проблемы и избавиться от внутренних зажимов и комплексов с помощью обучения правильному пению в караоке. В чём терапия? Состояние при пении в чём-то схоже с медитацией🧘 Звуковые вибрации на уровне мозга повышают сек­рецию эндорфинов, нейромедиаторы подавляют боль и погружают в состояние спокойствия. А обретаемый навык пения-приятный бонус  Длительность мероприятия - 60 минут.",
      priceOneTimeDicr: "Разовый",
      priceOneTime: "500 руб",
      image: kkk,
    },
    {
      itemSubTitle: "Караоке-терапия на ваш корпоратив",
      itemSubText:
        'Караоке-терапия" - идея для вашего корпоратива! Арт-студия BUFF представляет: Организация "Караоке-терапия» для коллег, друзей и близких. В программе: ✅Скороговорки, о которых вы даже не слышали. ✅Упражнения для развития и постановки голоса под звуки синтезатора. ✅Игры, квесты, конкурсы для поддержания настроения и атмосферы. ✅Пение любимых песен с удовольствием с помощью профессионального оборудования на ваш выбор. Длительность мероприятия - 1,5-2 часа.',
      priceOneTimeDicr: "1,5-2 часа в студии до 10 человек",
      priceOneTime: "500 руб",
      image: egeg,
    },
    {
      itemSubTitle: "Выступление на вашем празднике (без аппаратуры)",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "1,5 часа-10 песен",
      priceOneTime: "3000 руб",
      image: asas,
    },
    {
      itemSubTitle:
        "Написание текста под выбранный вами минус (песня-поздравление для учителя, бабушки, дедушки, жениху и т.д.)",
      itemSubText:
        "Караоке-терапия - который помогает взрослым улучшить свои навыки пения и одновременно справиться с эмоциональными проблемами. В этой секции нашего сайта мы предлагаем уроки караоке-терапии для взрослых, которые помогут улучшить технику пения и научиться контролировать эмоции через музыку. Наши опытные преподаватели помогут вам научиться",
      priceOneTimeDicr: "Одна песня",
      priceOneTime: "2000 руб",
      image: uuuu,
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
                      /*  value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)} */
                    />
                    <MyInput
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
