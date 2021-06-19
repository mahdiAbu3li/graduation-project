import React, { useState } from "react";
import styles from "./DescriptionStyles.module.css";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import mahdi from "../../../assets/images/img6.jpg";

import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import { useParams } from "react-router-dom";

const Description = () => {
  // const history = useHistory();
  // const [file, setFile] = useState([]);

  const values = React.useContext(AuthContext); //2
  const [annotationData] = useState();
  const { modelId } = useParams<{ modelId: string }>();

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/images/predict/"+modelId+"?user_id=" +
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
            "mmmmm"
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
              <div className={styles.outer} style={{background :"#0a1f55"}}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Using Time</p>
                <p className={styles.cardValue}>30 times</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer} style={{background :"#1a6871"}}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Training Files</p>
                <p className={styles.cardValue}>50 Files</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer} style={{background :"#38b0a2"}}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Accurecy</p>
                <p className={styles.cardValue}>85%</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.outer} style={{background :"#94dfd7"}}></div>
              <div className={styles.cardText}>
                <p className={styles.cardKey}>Number of <br /> Users</p>
                <p className={styles.cardValue}>3 users</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chartAndPic}>
          <div className={styles.chart}>
            <Chart1 />
          </div>

          <div className={styles.picContainer}>
            <img src={mahdi} alt="" className={styles.pic} />
          </div>
        </div>

        <div>
          <Chart2 />
        </div>
      </div>
    </div>
  );
};

export default Description;