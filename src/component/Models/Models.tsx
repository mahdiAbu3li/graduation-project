import React from "react";
import styles from "./ModelsStyles.module.css";
import { FaCircle } from "react-icons/fa";
const data = [
  {
    name: "mahdi",
    id: "1",
    date: "12/5/1555",
  },
  {
    name: "farah",
    id: "2",
    date: "12/5/1555",
  },
  {
    name: "tome",
    id: "3",
    date: "12/5/1555",
  },
];

const labels = [
  {
    color: "red",
    title: "asd",
  },
  {
    color: "blue",
    title: "sfdgfdg",
  },
  {
    color: "yellow",
    title: "gfhgfjh",
  },
];
const Models = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_states}>
        {labels.map((i) => (
          <div>
            <FaCircle
              //   className={styles.circles}
              style={{ color: i.color, fontSize: "33px" }}
            ></FaCircle>
            <span>{i.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.container_models}></div>
    </div>
  );
};

export default Models;
