import React, { useState } from "react";
import styles from "./LoginPageStyles.module.css";
import login from "../../assets/images/login.png";
import ReactCardFlip from "react-card-flip";
import LoginCard from "./LoginCard/LoginCard";
import SignupCard from "./SignupCard/SignupCard";
function LoginPage() {
  const [isFlip, setisFlip] = useState(false);
  const handleFlip = () => {
    setisFlip(!isFlip);
  };
  return (
    <div>
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
              <div className={styles.container_card_background}>
                <div className={styles.left}>
                  <div className={styles.login_card}>
                    <LoginCard />
                  </div>
                </div>
                <div className={styles.right}>
                  <h1>
                    Welcome to <span>HI5 555</span>
                  </h1>
                  <h3>
                    if you new here click here to create a new account to log
                    onto the sit
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
                    if you new here click here to create a new account to log
                    onto the sit
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
    </div>
  );
}

export default LoginPage;
