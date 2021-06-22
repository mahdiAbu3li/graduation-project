import React, { useState } from "react";
import styles from "./LoginPage3.module.css";
import LoginCard from "./LoginCard/LoginCard";
import ReactCardFlip from "react-card-flip";
import loginSvg from "../../assets/images/login.svg";
import logo from "../../assets/images/logo.png";
import SignupCard from "../LoginPage3/SignupCard/SignupCard";

const LoginPage3 = () => {
  const [isFlip, setisFlip] = useState(false);
  const handleFlip = () => {
    setisFlip(!isFlip);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <ReactCardFlip
            isFlipped={isFlip}
            flipDirection="horizontal"
            //   containerStyle={{ width: "90%" }}
            flipSpeedBackToFront={0.5}
          >
            <div className={styles.halfCircle}>
              <LoginCard handleFlip={handleFlip} />
            </div>
            <div className={styles.halfCircle}>
              <SignupCard handleFlip={handleFlip} />
            </div>
          </ReactCardFlip>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <p>welcome to </p>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.imgContainer}>
            <img src={loginSvg} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage3;
