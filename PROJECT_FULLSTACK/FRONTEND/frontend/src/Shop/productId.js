import React, { useState,useEffect } from "react";
import styles from "./productId.module.css";
import {useParams} from "react-router-dom";
export default function ProductDetailPage() {
  const [data, setData] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showTick, setShowTick] = useState(true);
  let params=useParams();
  const id=params.id;
  const handleClickRedIcon = () => {
    setShowTick(!showTick);
    setCounter(3);
    setCurrentIndex(3);
  };
  const handleClickGrayIcon = () => {
    setShowTick(!showTick);
    setCounter(0);
    setCurrentIndex(0);
  };
  const sendRequest = async() => {
     await fetch(`http://localhost:3200/shopPageEvents/?id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    sendRequest();
  }, []);
  if(data){
    const photo = [
      data[0].src1,
      data[0].src2,
      data[0].src3,
      data[0].scr4,
      data[0].src5,
      data[0].src6,
    ];
const next = () => {
  setCurrentIndex((currentIndex + 1) % photo.length);
};
  return (
    <div className="container " style={{ marginTop: "20px" }}>
      <div className="row  ">
        <div className="col-5  px-auto">
          <img src={photo[currentIndex]} width="450px" height="420px" />
          <div className=" mx-auto">
            <img
              src={photo[counter]}
              width="80px"
              height="80px"
              style={{ marginRight: "3px", marginLeft: "100px" }}
              onClick={() => setCurrentIndex(counter)}
            />
            <img
              src={photo[counter + 1]}
              width="80px"
              height="80px"
              style={{ marginRight: "3px" }}
              onClick={() => setCurrentIndex(counter + 1)}
            />
            <img
              src={photo[counter + 2]}
              width="80px"
              height="80px"
              onClick={() => setCurrentIndex(counter + 2)}
            />
          </div>
        </div>
        <div className="col-2 ps-0 my-auto ">
          <button
            onClick={next}
            style={{ backgroundColor: "wheat", border: "wheat" }}
          >
            <big>
              <big>
                <big>
                  <big>
                    <big>
                      <big>&#8594;</big>
                    </big>
                  </big>
                </big>
              </big>
            </big>
          </button>
        </div>
        <div className="col-5  my-auto  ">
          <p>{data[0].name}</p>
          <h4>Scandanavian Collection</h4>
          <p>{data[0].desc}</p>
          <p>Color</p>
          <div className={`${styles.dot} `} onClick={handleClickGrayIcon}>
            <span
              className={styles.tick}
              style={{
                width: "10px",
                height: "10px",
                margin: "auto",
                marginLeft: "6px",
                marginBottom: "6px",
                color: "white",
                visibility: showTick ? "visible" : "hidden",
              }}
            >
              &#x221A;{" "}
            </span>
          </div>
          <div
            className={`${styles.dot} `}
            style={{ backgroundColor: "rgb(19, 19, 81)" }}
            onClick={handleClickRedIcon}
          >
            <span
              className={styles.tick}
              style={{
                width: "10px",
                height: "10px",
                margin: "auto",
                marginLeft: "6px",
                marginBottom: "6px",
                color: "white",
                visibility: showTick ? "hidden" : "visible",
              }}
            >
              &#x221A;{" "}
            </span>
          </div>
          <br />
          <br />
          <div>
            <p>Price per unit</p>
            <span style={{ marginRight: "40px" }}>
              <big>
                <big>&#36; {data[0].price}</big>
              </big>
            </span>
            <span style={{ marginRight: "10px" }}>
              <button className={styles.btn}>Buy Now</button>
            </span>
            <span>
              <a className="nav-link d-inline text-dark" href="#">
                <i class="bi bi-cart3 "></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
            }
}

