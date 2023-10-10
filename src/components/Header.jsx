import React, { useState } from "react";
import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/icons/logo.png";
import inst from "../assets/images/icons/inst.png";
import teleg from "../assets/images/icons/teleg.png";
import vk from "../assets/images/icons/vk.png";

const Header = () => {
  const [menuButton, SetMenuButton] = useState(false);
  const ShowMenu = () => {
    SetMenuButton(!menuButton);
  };
  /*  console.log(window.navigator.userAgent); */

  return (
    <>
      <div onClick={ShowMenu} className={styles.header}>
        <span
          className={menuButton ? styles.headerLine1Active : styles.headerLine1}
        ></span>
        <span
          className={menuButton ? styles.headerLine2Active : styles.headerLine2}
        ></span>
      </div>
      <nav className={menuButton ? styles.menuActive : styles.menuHide}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link onClick={ShowMenu} to="/about">
              Обо мне
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link onClick={ShowMenu} to="/lessons">
              Услуги и стоимость
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link onClick={ShowMenu} to="/video">
              Видео
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <Link to="/vocalOren56" onClick={() => SetMenuButton(false)}>
          <img
            className={
              menuButton ? styles.socialsHome : styles.socialsHomeActive
            }
            src={logo}
            alt="logo"
          />
        </Link>
        <a href="https://www.instagram.com/arina_vocal_oren/">
          <img
            className={
              menuButton ? styles.socialsInst : styles.socialsInstActive
            }
            src={inst}
            alt="inst.png"
          />
        </a>
        <a href="https://t.me/vocal_ARINA_BUFF">
          <img
            className={menuButton ? styles.socialsTg : styles.socialsTgActive}
            src={teleg}
            alt="telegr"
          />
        </a>
        <a href="https://vk.com/arina_vocal">
          <img
            className={menuButton ? styles.socialsVk : styles.socialsVkActive}
            src={vk}
            alt="vk"
          />
        </a>
      </div>
    </>
  );
};

export default Header;
