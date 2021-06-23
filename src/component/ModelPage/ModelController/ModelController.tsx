import React from "react";
import styles from "./ModelController.module.css";
import ModelSetting from "./ModelSetting/ModelSetting";
import ModelRequests from "./ModelRequests/ModelRequests";
import { DiVisualstudio } from "react-icons/di";
import { Divider } from "@material-ui/core";
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

// import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1

const ModelController = () => {
  // const values = React.useContext(AuthContext); //2

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
        <a href="#modelSetting">Model Settings</a>
        <a href="#requests">Requests of Model</a>
        <a href="#re_train">Re-train Model</a>
      </div>
      <div className={styles.card} id="modelSetting">
        <div className={styles.fieldset}>
          <div className={styles.header}> model Setting </div> <ModelSetting />
        </div>
      </div>
      <div className={styles.card} id="requests">
        <div className={styles.fieldset}>
          <div className={styles.header}> model Requests </div>
          <ModelRequests />
        </div>
      </div>
      <div className={styles.card} id="requests">
        <div className={styles.fieldset}>
          <div className={styles.header}> re train model </div>

          {/* <ModelRequests /> */}
        </div>
      </div>
      <div className={styles.re_train} id="re_train"></div>
    </div>
  );
};

export default ModelController;
