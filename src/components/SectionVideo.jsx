import React from "react";
import styles from "../css/SectionVideo.module.css";

import first from "../assets/images/sectionVideo/1.png";
import youtube from "../assets/images/icons/youtube.png";

const SectionVideo = () => {
  const imgStore = [
    {
      id: "1",
      img: first,
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: 2,
      img: first,
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "3",
      img: first,
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "4",
      img: first,
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "5",
      img: first,
      href: "https://youtube.com/shorts/UuPVEamiFOI?si=g4mbsCCOeFhzwc1q",
    },
    {
      id: "6",
      img: first,
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
                <img className={styles.youtubeImg} src={youtube} alt="" />
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
