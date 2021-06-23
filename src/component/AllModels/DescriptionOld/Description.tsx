import React, { useState } from "react";
import styles from "./DescriptionStyles.module.css";

import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import { useParams } from "react-router-dom";

const Description = () => {
  const { modelId } = useParams<{ modelId: string }>();

  // interface Model {
  //   created_date: string;
  //   current: null;
  //   description: string;
  //   id: number;
  //   last_use_date: string;
  //   name: string;
  //   number_of_using: number;
  //   owner_id: number;
  //   progress: number;
  //   progress_re: number;
  //   public_state: number;
  //   short_description: string;
  //   state_id: number;
  // }
  // const [file, setFile] = useState<Model>();

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

  const values = React.useContext(AuthContext); //2
  const [annotationData] = useState();

  // React.useEffect(() => {
  //   // بس لما تتحمل الصفحة اول مرة
  //   const url =
  //     "https://graduationprojectt.herokuapp.com/api/model/" +
  //     modelId; //req url
  //   fetch(url, {
  //     method: "get",
  //     headers: {
  //       //the same
  //       Authorization: `Bearer ${values.data.token}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "nooooo");
  //       if (data.length > 0) {
  //         console.log(
  //           data,
  //           "mmmmmmmmmmmmmmmmmmmmmmKKKKKKKKKKKKKmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
  //         );
  //         setFile(data);
  //       } else return false;
  //     });
  // }, [values.data.id, values.data.token]);

  console.log(JSON.stringify(annotationData));

  return (
    <div className={styles.container}>
      <div>
        {modelId}
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

        <div style={{ border: " red solid" }} onClick={() => request()}>
          request to use it
        </div>
      </div>
    </div>
  );
};

export default Description;
