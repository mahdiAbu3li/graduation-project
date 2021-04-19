import React from "react";
import styles from "./ModelsStyles.module.css";
import {FaCircle } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";

import login from "../../assets/images/login.png";
import mahdi from "../../assets/images/img1.png"
const models = [
  {
    name: "mahdi",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image : "/../../assets/images/img1.png"
  },
  {
    name: "farah",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image : "../../assets/images/img2.png"
  },
  {
    name: "tome",
    id: "3",
    date: "12/5/1555",
    color: "orange",
    image : "../../assets/images/img3.png"
  },
  {
    name: "mahdi",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image : "../../assets/images/img1.png"
  },
  {
    name: "farah",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image : "../../assets/images/img2.png"
  },
  {
    name: "tome",
    id: "3",
    date: "12/5/1555",
    color: "orange",
    image : "../../assets/images/img3.png"
  },
  {
    name: "mahdi",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image : "../../assets/images/img1.png"
  },
  {
    name: "farah",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image : "../../assets/images/img2.png"
  },
  
];

const labels = [
  {
    color: "lightblue",
    title: "Model Created",
  },
  {
    color: "orange",
    title: "Data Uploded",
  },
  {
    color: "lightgreen",
    title: "Data Processed",
  },
  {
    color: "lightyellow",
    title: "Model Training",
  },
  {
    color: "green",
    title: "Model Ready",
  },
 
];

const Models = () => {
  return (
    <div className={styles.container}>

      <div className={styles.container_states}>
        {labels.map((i) => (
          <div>
            <IoEllipse color={i.color} size ="25px"></IoEllipse>
            {/* <FaCircle
              style={{ color: i.color, fontSize: "25pxpx" }}
            ></FaCircle> */}

            <span  >{i.title}</span>
          </div>
        ))}

      {/* models */}
      </div>

      <div className={styles.container_models}>

        {models.map((i) => (
          <div className={styles.maincontainer}>
            <div className={styles.thecard}>
              <div className={styles.thefront} >
               {/* <div className={styles.modelName}> */}
                  <h1>{i.name}</h1>
                  {/* </div> */}
                  <p> <IoEllipse color={i.color} size="25px"></IoEllipse>{i.date}</p> 
              </div>

              <div className={styles.theback}><img src={require("../../assets/images/img1.png")} alt="" />
           
            </div>
          </div>
          </div>
        ))
        }

    </div>
    </div>
  );
};

export default Models;
