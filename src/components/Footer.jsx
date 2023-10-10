import React from "react";
import styles from "../css/Footer.module.css";

import inst from "../assets/images/icons/inst.png";
import teleg from "../assets/images/icons/teleg.png";
import vk from "../assets/images/icons/vk.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <a href="https://www.instagram.com/arina_vocal_oren/">
            <img className={styles.footerImg} src={inst} alt="inst" />
          </a>
          <a href="https://t.me/vocal_ARINA_BUFF">
            <img className={styles.footerImg} src={teleg} alt="teleg" />
          </a>
          <a href="https://vk.com/arina_vocal">
            <img className={styles.footerImg} src={vk} alt="vk" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
