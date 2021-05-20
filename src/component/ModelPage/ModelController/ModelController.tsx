import React, { useState } from "react";
import styles from "./ModelController.module.css";
import ModelSetting from "./ModelSetting/ModelSetting";
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
  const values = React.useContext(AuthContext); //2

  // React.useEffect(() => {
  //   // بس لما تتحمل الصفحة اول مرة
  //   const url =
  //     "https://graduationprojectt.herokuapp.com/api/images/predict/57?user_id=" +
  //     values.data.id; //req url
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
  //         // setFiles(data);
  //       } else return false;
  //     });
  // }, [values.data.id, values.data.token]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <a href="#modelSetting">model settings</a>
        <a href="#requests">requests</a>
        <a href="#re_train">re train setting</a>
      </div>
      <div className={styles.modelSetting} id="modelSetting">
        <fieldset className={styles.fieldset}>
          <legend>
            <pre style={{ fontSize: "22px" }}> model Setting </pre>{" "}
          </legend>
          <ModelSetting />
        </fieldset>
      </div>
      <div className={styles.requests} id="requests"></div>
      <div className={styles.re_train} id="re_train"></div>
    </div>
  );
};

export default ModelController;
