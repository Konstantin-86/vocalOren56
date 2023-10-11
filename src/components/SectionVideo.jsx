import React from "react";

import styles from "../css/SectionVideo.module.css";

import first from "../assets/images/sectionVideo/1.png";
import second from "../assets/images/sectionVideo/adf.jpg";
import third from "../assets/images/sectionVideo/qqq.jpg";
import forth from "../assets/images/sectionVideo/www.jpg";
import youtube from "../assets/images/icons/youtube.png";

const SectionVideo = () => {
  const imgStore = [
    {
      id: "1",
      img: first,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: 2,
      img: second,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "3",
      img: third,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "4",
      img: forth,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "5",
      img: second,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "6",
      img: third,
      title: "Здесь будет какойто заголовок",
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
  ];
  return (
    <>
      <div className={styles.SectionVideo}>
        <div className={styles.container}>
          <h3 className={styles.title}>Видео</h3>
          <div className={styles.inner}>
            {imgStore.map((item, index) => (
              <div key={item.id} className={styles.SectionVideoItem}>
                <h3 className={styles.SectionVideoTitle}>{item.title}</h3>
                <a href={item.href}>
                  <img className={styles.youtubeImg} src={youtube} alt="" />
                </a>
                <a href={item.href}>
                  <img className={styles.itemImg} src={item.img} alt="amic" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionVideo;
