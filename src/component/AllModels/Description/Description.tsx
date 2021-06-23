import React, { useState } from "react";
import styles from "./DescriptionStyles.module.css";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import mahdi from "../../../assets/images/img6.jpg";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import { useParams } from "react-router-dom";

const Description = () => {
  // const history = useHistory();
  // const [file, setFile] = useState([]);

  const values = React.useContext(AuthContext); //2
  const [annotationData] = useState();
  const { modelId } = useParams<{ modelId: string }>();

  const request = async () => {
    var data = new FormData();

    data.append("user_id", values.data.id.toString());
    data.append("model_id", modelId);
    // data.append("accept", "0");

    console.log("json", data);

    const url = "https://graduationprojectt.herokuapp.com/api/user_has_model"; //req url
    const response = await fetch(url, {
      method: "post",

      body: data,

      headers: {
        Authorization: `Bearer ${values.data.token}`,
      },
    });
    const res = await response.json();
    console.log(res);
  };

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/images/predict/" +
      modelId +
      "?user_id=" +
      values.data.id; //req url
    fetch(url, {
      method: "get",
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "request has been sent",
            // footer: "<a href>Why do I have this issue?</a>",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.statusText,
            // footer: "<a href>Why do I have this issue?</a>",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "nooooo");
        if (data.length >= 0) {
          console.log(data, "mmmmm");

          // setFiles(data);
        } else {
          return false;
        }
      });
  }, [modelId, values.data.id, values.data.token]);
  console.log(JSON.stringify(annotationData));

  return (
    <div className={styles.container}>
      <div className={styles.container_cards}>
        <div className={styles.card}>
          <div className={styles.inner}>
            <div
              className={styles.outer}
              style={{ background: "#0a1f55" }}
            ></div>
            <div className={styles.cardText}>
              <p className={styles.cardKey}>Using Time</p>
              <p className={styles.cardValue}>30 times</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.inner}>
            <div
              className={styles.outer}
              style={{ background: "#1a6871" }}
            ></div>
            <div className={styles.cardText}>
              <p className={styles.cardKey}>Training Files</p>
              <p className={styles.cardValue}>50 Files</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.inner}>
            <div
              className={styles.outer}
              style={{ background: "#38b0a2" }}
            ></div>
            <div className={styles.cardText}>
              <p className={styles.cardKey}>Accurecy</p>
              <p className={styles.cardValue}>85%</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.inner}>
            <div
              className={styles.outer}
              style={{ background: "#94dfd7" }}
            ></div>
            <div className={styles.cardText}>
              <p className={styles.cardKey}>
                Number of <br /> Users
              </p>
              <p className={styles.cardValue}>3 users</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <div>name</div>
          <div>model 1</div>
          <div>date</div>
          <div>12/5/2020</div>
          <div>type</div>
          <div>invoices</div>
          <div>short description</div>
          <div>sd321</div>
          <div>description</div>
          <div>
            this model is created to use by people who works in casher in kfc
            because they have many of invoices
          </div>
        </div>

        <div className={styles.picContainer}>
          <img src={mahdi} alt="" className={styles.pic} />
          <div className={styles.keys}>
            <div>
              <div className={styles.key}>name</div>
              <div className={styles.value}>mahdi</div>
            </div>
            <div>
              <div className={styles.key}>name</div>
              <div className={styles.value}>mahdi</div>
            </div>
            <div>
              <div className={styles.key}>name</div>
              <div className={styles.value}>mahdi</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chart1Container}>
          <div className={styles.chart1}>
            <Chart1 />
          </div>
        </div>
        <div className={styles.chart2Container}>
          <div className={styles.chart2}>
            <Chart2 />
            <p>
              this is chart to show number of using time in the model my name is
              amahdi
            </p>
          </div>
        </div>
      </div>
      <div className={styles.request}>
        <div className={styles.button} onClick={() => request()}>
          make request to use this model
        </div>
      </div>
    </div>
  );
};

export default Description;
