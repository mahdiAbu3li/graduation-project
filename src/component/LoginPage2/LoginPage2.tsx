import React, { useState } from "react";
import styles from "./LoginPage2Styles.module.css";
import ReactCardFlip from "react-card-flip";
import LoginCard from "../LoginPage/LoginCard/LoginCard";
import SignupCard from "../LoginPage/SignupCard/SignupCard";
import login from "../../assets/images/login.png";
const LoginPage2 = () => {
  const [isFlip, setisFlip] = useState(false);
  const handleFlip = () => {
    setisFlip(!isFlip);
  };
  return (
    <div className={styles.container}>
      <ReactCardFlip
        isFlipped={isFlip}
        flipDirection="horizontal"
        containerStyle={{ width: "90%" }}
        flipSpeedBackToFront={1}
        //   cardStyles={{}}
      >
        <div>
          <div className={styles.container_card}>
            <div className={styles.svgContainer}>
              <svg
                viewBox="-98.204 1.122 852.413 514.03"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  style={{ stroke: "rgb(0, 0, 0)" }}
                  x1="753.6478620521906"
                  y1="512.4082198514445"
                  x2="754.2090294848431"
                  y2="515.775224447359"
                />
                <path
                  d="M 754.769 -1.061 C 744.948 -2.558 399.804 -4.481 384.399 -0.499 C 375.687 1.753 417.314 15.334 422.56 24.193 C 442.293 57.513 416.058 58.286 391.133 94.338 C 387.744 99.239 358.12 166.432 357.464 172.341 C 354.783 196.468 356.779 221.155 354.097 245.293 C 351.731 266.587 371.069 284.299 340.067 313.194 C 319.829 332.056 298.039 353.213 277.217 369.872 C 264.534 380.018 261.167 398.379 247.475 405.225 C 244.251 406.837 241.837 410.008 239.057 411.398 C 230.783 415.535 210.809 419.943 209.315 429.356 C 205.396 454.051 192.75 475.296 167.789 486.033 C 149.879 493.738 145.266 484.669 107.745 513.531 C 97.896 521.107 762.328 509.901 754.77 517.458"
                  style={{ stroke: "rgb(0, 0, 0)", fill: "rgb(255, 255, 255)" }}
                />
              </svg>
            </div>
            {/* <div className={styles.rect}>
              <div className={styles.clip}></div>
              <div className={styles.clip1}></div>
              <div className={styles.clip2}></div>
              <div className={styles.clip3}></div>
              <div className={styles.clip4}></div>
              <div className={styles.clip5}></div>
              <div className={styles.clip6}></div>
            </div> */}
            {/* <div className={styles.rect2}>
              <div className={styles.clip}></div>
              <div className={styles.clip1}></div>
              <div className={styles.clip2}></div>
              <div className={styles.clip3}></div>
              <div className={styles.clip4}></div>
              <div className={styles.clip5}></div>
              <div className={styles.clip6}></div>
            </div> */}
            <div className={styles.container_card_background}>
              <div className={styles.left}>
                <div className={styles.login_card}>
                  <LoginCard />
                </div>
              </div>
              <div className={styles.right}>
                <h1>
                  Welcome to <span>HI5</span>
                </h1>
                <h3>
                  if you new here click here to create a new account to log onto
                  the sit
                </h3>
                <button onClick={handleFlip}>Sign up</button>
                <img src={login} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.container_card}>
            <div className={styles.container_card_background}>
              <div className={styles.right}>
                <h1>
                  Welcome to <span>HI5</span>
                </h1>
                <h3>
                  if you new here click here to create a new account to log onto
                  the sit
                </h3>
                <button onClick={handleFlip}>Sign up</button>
                <img src={login} alt="" />
              </div>
              <div className={styles.left}>
                <div className={styles.login_card}>
                  <SignupCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default LoginPage2;
