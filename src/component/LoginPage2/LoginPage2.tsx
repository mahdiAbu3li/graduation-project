import React, { useState } from "react";
import styles from "./LoginPage2Styles.module.css";
import ReactCardFlip from "react-card-flip";
import LoginCard from "../LoginPage/LoginCard/LoginCard";
import SignupCard from "../LoginPage/SignupCard/SignupCard";
import login from "../../assets/images/login.png";
import color from "../../assets/images/color.png";
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
        containerStyle={{ width: "95%" }}
        flipSpeedBackToFront={1}
        //   cardStyles={{}}
      >
        <div>
          <div className={styles.container_card}>
            <div className={styles.svgContainer}>
              {/* <svg
                // viewBox="-98.204 1.122 852.413 514.03"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
    <linearGradient id="grad3" x1="-15%" y1="54%" x2="89%" y2="91%">
      <stop offset="2%" style={{"stopColor":"rgba(8,26,72,1) " , "stopOpacity":1 }}/>
      <stop offset="32%" style={{"stopColor":"rgba(14,30,107,1)" , "stopOpacity":1 }} />
      <stop offset="100%" style={{"stopColor":" rgba(28,130,113,1)" , "stopOpacity":1 }} />
    </linearGradient>
  </defs>
               
                <path
                  d="M 430.128 0.263 C 434.413 2.434 431.355 34.665 421.175 58.818 C 410.736 83.586 393.958 103.374 384.223 110.16 C 381.752 111.882 377.929 115.414 376.489 115.585 C 368.272 125.417 273.437 161.249 274.996 158.122 C 240.92 156.379 123.267 263.037 114.729 295.833 C 112.656 307.187 61.052 416.812 62.145 407.671 C 64.239 413.953 0.432 459.725 -0.551 456.776 L -1.851 -0.745 L 430.128 0.263 Z"
                  style={{ stroke: "rgb(0, 0, 0)", fill:"url(#grad3)" }}
                  
                />
              </svg> */}

<svg viewBox="135.796 4.122 864.413 514.03" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient gradientUnits="userSpaceOnUse" x1="177.769" y1="-1.577" x2="177.769" y2="501.777" id="gradient-0" gradientTransform="matrix(0.549324, -0.835611, 0.543163, 0.35707, -88.277006, 191.548902)">
      <stop offset="0" style={{"stopColor":" rgb(8, 26, 72)"}}/>
      <stop offset="0.258" style={{"stopColor": "rgb(14, 30, 107)"}}/>
      <stop offset="0.655" style={{"stopColor": "rgb(25, 103, 112)"}}/>
      <stop offset="1" style={{"stopColor":" rgb(44, 204, 177)"}}/>
    </linearGradient>
  </defs>
    <path d="M -0.309 2.049 C -0.892 1.404 102.245 0.573 195.257 0.692 C 277.579 0.797 355.989 -4.069 356.332 0.142 C 356.908 7.206 350.927 32.663 344.923 41.979 C 335.4 56.756 329.035 68.483 309.672 81.405 C 297.594 89.465 279.913 96.904 279.913 96.904 C 279.913 96.904 223.175 120.698 196.839 144.02 C 193.033 147.391 152.87 177.088 147.804 206.688 C 143.186 233.671 139.758 263.483 140.422 281.652 C 141.761 318.29 137.561 337.965 136.703 346.749 C 135.457 359.507 127.924 374.949 124.303 381.466 C 106.734 413.09 87.859 434.868 60.446 456.482 C 56.484 459.606 35.004 482.722 25.108 488.1 C 16.079 493.007 7.621 502.12 -0.835 501.767" style={{"fill":" url(#gradient-0)"  , "stroke": "rgb(255, 255, 255)", "strokeOpacity":0}}/>
</svg>
            </div>
            
            <div className={styles.container_card_background}>
              <div className={styles.left}>
                <div className={styles.login_card}>
                  <LoginCard />
                </div>
              </div>
              <div className={styles.right}>
                <h1>
                  Welcome to <span>HI5 55</span>
                </h1>
                <h3>
                  iiiif you new here click here to create a new account to log onto
                  the sit
                </h3>
                <button onClick={handleFlip}>Sign up</button>
                <img src={color} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.container_card}>
            <div className={styles.container_card_background}>
              <div className={styles.right}>
                <h1>
                  Welcome to <span>HI5 5555</span>
                </h1>
                <h3>
                  iiiiif you new here click here to create a new account to log onto
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
