import React, { useState } from "react";
import styles from "./ModelController.module.css";
// import  Chart1  from '../Description/Chart1';

// import { FaCircle } from "react-icons/fa";
// import { RiDeleteBin5Fill } from "react-icons/all";
// import { IoEllipse } from "react-icons/all";
// import { HiOutlineDownload } from "react-icons/all";
// import { AiOutlineCheckCircle } from "react-icons/all";
// import { useHistory } from "react-router";
// import login from "../../assets/images/login.png";
// import mahdi from "../../../assets/images/img6.jpg"
// import { GrStatusDisabledSmall } from "react-icons/gr";

import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1

const ModelController = () => {
  // const history = useHistory();
  // const [file, setFile] = useState([]);

  const values = React.useContext(AuthContext); //2
  const [annotationData] = useState();

  React.useEffect(() => {
    // بس لما تتحمل الصفحة اول مرة
    const url =
      "https://graduationprojectt.herokuapp.com/api/images/predict/57?user_id=" +
      values.data.id; //req url
    fetch(url, {
      method: "get",
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "nooooo");
        if (data.length > 0) {
          console.log(
            data,
            "mmmmmmmmmmmmmmmmmmmmmmKKKKKKKKKKKKKmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
          );
          // setFiles(data);
        } else return false;
      });
  }, [values.data.id, values.data.token]);
  console.log(JSON.stringify(annotationData));

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.container_cards}>
          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Using Time</p>
                <p className={styles.cardValue}>300 time</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Using Time</p>
                <p className={styles.cardValue}>300 time</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Using Time</p>
                <p className={styles.cardValue}>300 time</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Using Time</p>
                <p className={styles.cardValue}>300 time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelController;
