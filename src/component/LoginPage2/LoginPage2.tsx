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
            {/* <div className={styles.svg}></div> */}
            {/* <div className={styles.circle}></div> */}
            {/* <div className={styles.svgContainer}> */}

            {/* </div> */}
            <div className={styles.rect}>
              <div className={styles.clip}></div>
              <div className={styles.clip1}></div>
              <div className={styles.clip2}></div>
              <div className={styles.clip3}></div>
              <div className={styles.clip4}></div>
              <div className={styles.clip5} id="bar"></div>
              <div className={styles.clip6}></div>
            </div>
            <div className={styles.rect2}>
              <div className={styles.clip}></div>
              <div className={styles.clip1}></div>
              <div className={styles.clip2}></div>
              <div className={styles.clip3}></div>
              <div className={styles.clip4}></div>
              <div className={styles.clip5}></div>
              <div className={styles.clip6}></div>
            </div>
            {/* <div className={styles.container_card_background}> */}
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
            {/* </div> */}
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
