import { useState } from "react";
import styles from "./ImageCarousal.module.css";
import Card from "../Card";
export default function ImageCarousal({ data }) {
  const photos = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };
  return (
    <div className="container-fluid  ">
      <div
        className="container-fluid m-0 px-4 "
        styles={{
          position: "relative",
          width: " 100%",
          height: "300px",
          margin: "auto",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{ width: "100%", marginLeft: "-10px" }}
            className={`${
              photos[currentIndex].id === photo.id
                ? styles.fade
                : `${styles.slide} ${styles.fade}`
            }bg-warning  `}
          >
            <Card product={photo} top={425} height={450} />
          </div>
        ))}
      </div>
      <div className={styles.text}>
        <h4>Featured Collection</h4>
      </div>
      <div>
        <button onClick={next} className={styles.next}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </button>
      </div>
      <div className={styles.dots}>
        {photos.map((photo) => (
          <span
            key={photo.id}
            className={
              photos[currentIndex].id === photo.id
                ? `${styles.dot} ${styles.active}`
                : styles.dot
            }
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </div>
  );
}
