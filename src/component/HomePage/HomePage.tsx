import React, { useContext, useState } from "react";
import styles from "./HomePage.module.css";
import first from "../../assets/images/first.svg";
import what from "../../assets/images/what.svg";
import only from "../../assets/images/only.svg";
import save from "../../assets/images/save.svg";
import easy from "../../assets/images/easy.svg";
import time from "../../assets/images/time.svg";
import imorove from "../../assets/images/imorove.svg";
import muhanad from "../../assets/images/muhanad.jpg";
import farah from "../../assets/images/farah.jpg";
import farah2 from "../../assets/images/farah2.jpg";
import farah3 from "../../assets/images/farah3.jpg";
import furat from "../../assets/images/furat.png";
import mahdi from "../../assets/images/mahdi.jpg";
import back from "../../assets/images/back.svg";
import logo from "../../assets/images/logo.png";



// import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";

function HomePage() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="" style={{width:"100%" }}/>
          
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>About</div>
          <div className={styles.button}>Login</div>
          <div className={styles.button}>Sign</div>

        </div>
      </div>
      <div className={styles.allcontent}>

        <div className={styles.first}>
          {/* <img src={back} alt="" /> */}
          <div className={styles.content}>
            
            <h1>
              <q>
               We Say NO to Manual Document Entrys  
              </q>
              </h1>
              <div className={styles.button}>Start Now</div>
              
          </div>

          <div className={styles.image}>
            <img src={first} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>

        <div className={styles.second} >

          <div className={styles.image}>
            <img src={what} alt="" style={{ width: "100%", height: "100%" }} />
          </div>

          <div className={styles.content}>
            <h1>What is HI5? </h1>
            {/* <p>Note-Hub is a web‐based system designed primarily to assist university students to watch recorded lectures, take notes online synchronously with video, download notes and share them with other colleagues. Note-Hub includes a variety of functionality and features such as share notes with others. interaction between users to follow each other, rating notes, likes, and comments.</p> */}
            <p>A website that uses artificial intelligence and machine learning to enable you to use your time in important matters and save you the effort you make to do unnecessary routine work instead of wasting time entering data manually Why not let the machine do it for you</p>
          </div>

        </div>


        <div className={styles.third}>
          <div className={styles.titel}><h1>Why you need HI5?</h1></div>

          <div className={styles.allcontent}>
            <div className={styles.component}>
              <div className={styles.content}>
                <h1>Capture only what you want</h1>
              </div>
              <div className={styles.image}>
                <img src={only} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.content}>
                <h1>Save Output as computer friendly format (JSON)</h1>
              </div>
              <div className={styles.image}>
                <img src={save} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.content}>
                <h1>Easy to use</h1>
              </div>
              <div className={styles.image}>
                <img src={easy} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.content}>
                <h1>Saving time</h1>
              </div>
              <div className={styles.image}>
                <img src={time} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className={styles.component}>
              <div className={styles.content}>
                <h1>AI that learns with every new document</h1>
              </div>
              <div className={styles.image}>
                <img src={imorove} alt="" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

          </div>
        </div>


        <div className={styles.who}>
          <div className={styles.titel}><h1>Who are HI5 team?</h1></div>


          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={muhanad} alt="" style={{ width: "100%", marginTop: "118px" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Mohanad Imad</h1>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={farah} alt="" style={{ width: "94%", "marginTop": "122px" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Farah Tome</h1>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={farah2} alt="" style={{ width: "105%", "marginLeft": "-2", marginTop: "122px" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Farah Tome</h1>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={farah3} alt="" style={{ width: "150%", "marginLeft": "-200px", marginTop: "113px" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Farah Tome</h1>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={furat} alt="" style={{ width: "85%", marginTop: "32%" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Furat AL-Khadra</h1>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.clip}>
                <img src={mahdi} alt="" style={{ width: "85%", marginTop: "32%" }} />
              </div>
              <div className={styles.name}>
                <h1>Eng.Mahdi Imad</h1>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default HomePage;
