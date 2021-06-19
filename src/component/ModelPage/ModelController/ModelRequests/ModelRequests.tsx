import React, { useState } from "react";
import styles from "./ModelRequestsStyles.module.css";
import { useParams } from "react-router-dom";
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

import { AuthContext } from "../../../../Contexts/AuthContext/AuthContext"; //1

const ModelRequests = () => {
  const accept = async (id: number) => {
    var data = new FormData();
    data.append("accept", "1");

    // console.log("json" , data)

    const url =
      "https://graduationprojectt.herokuapp.com/api/user_has_model/" +
      id +
      "?accept=1"; //req url
    const response = await fetch(url, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${values.data.token}`,
      },
    });
    const res = await response.json();
    console.log(res);
  };

  const refuser = async (id: number) => {
    var data = new FormData();
    data.append("accept", "1");

    // console.log("json" , data)

    const url =
      "https://graduationprojectt.herokuapp.com/api/user_has_model/" +
      id +
      "?accept=2"; //req url
    const response = await fetch(url, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${values.data.token}`,
      },
    });
    const res = await response.json();
    console.log(res);
  };

  interface request {
    id: number;
    user_id: number;
    model_id: number;
    accept: number;
    end_date: string;
    un_read: number;
    name: string;
    owner_id: number;
  }
  const [file, setFile] = useState<Array<request>>();
  const { modelId } = useParams<{ modelId: string }>();

  const values = React.useContext(AuthContext); //2

  React.useEffect(() => {
    // بس لما تتحمل الصفحة اول مرة
    const url =
      "https://graduationprojectt.herokuapp.com/api/get_uhm_by_model/" +
      modelId; //req url
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
          setFile(data);
        } else return false;
      });
  }, [modelId, values.data.id, values.data.token]);
  console.log("file ", file);

  const copyArray = file?.filter((item) => item.accept === 0);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>table of requests</h2>
      </div>
      <div className={styles.requests_container}>
        {copyArray?.map((file) => (
          <div className={styles.requests}>
            <div className={styles.request_name}>
              <p>{file.name}</p>
            </div>

            <div
              className={styles.request_accept}
              onClick={() => accept(file.id)}
            >
              <button className={styles.acceptButton}>accept</button>
            </div>

            <div
              className={styles.request_reject}
              onClick={() => refuser(file.id)}
            >
              <button className={styles.rejectButton}>reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelRequests;
