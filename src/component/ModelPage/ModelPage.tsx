import React, { useState } from "react";
import styles from "./ModelPageStyles.module.css";
// import { FaCircle } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/all";
// import { IoEllipse } from "react-icons/all";
import { HiOutlineDownload } from "react-icons/all";
import { AiOutlineCheckCircle } from "react-icons/all";
import { useHistory } from "react-router";
// import login from "../../assets/images/login.png";
// import mahdi from "../../assets/images/img1.png"
// import { GrStatusDisabledSmall } from "react-icons/gr";
import UploadImages from "./UploadImages/UploadImages";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext"; //1
import { useParams } from "react-router-dom";

// const filess = [
//   {
//     name: "invoice 1",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img1.png'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 2",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img4.jpg'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 3",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img2.png'),
//     manual_varifaction: "false"
//   },
//   {
//     name: "invoice 4",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img3.png'),
//     manual_varifaction: "flase"

//   },
//   {
//     name: "invoice 5",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img5.png'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 6",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img6.png'),
//     manual_varifaction: "false"

//   },
//   {
//     name: "invoice 7",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img8.JPG'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 4",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img3.png'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 5",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img5.png'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 6",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img6.png'),
//     manual_varifaction: "true"

//   },
//   {
//     name: "invoice 8",
//     id: "1",
//     date: "12/5/1555",
//     image: require('../../assets/images/img6.jpg'),
//     manual_varifaction: "true"

//   },

// ];

const ModelPage = () => {
  const history = useHistory();
  const [isUpload, setIsUpload] = useState(false);
  const { modelId } = useParams<{ modelId: string }>();
  function downloadObjectAsJson(
    exportObj: any,
    exportName: any,
    user_ID: any,
    token: any
  ) {
    var payload = {
      image: exportObj,
      user_id: "1",
    };

    var data = new FormData();

    data.append("json", JSON.stringify(payload));

    const url =
      "https://graduationprojectt.herokuapp.com/api/predict/" + modelId; //req url
    fetch(url, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
        // "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        var dataStr =
          "data:text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      });
  }

  const addSelected = (name: string) => {
    if (selected.includes(name)) {
      const arr = [...selected];
      arr.splice(arr.indexOf(name));
      setSelected(arr);
      console.log("tr");
    } else {
      const arr = [...selected, name];

      setSelected(arr);
      console.log("f");
    }
  };

  const downloadeselected = () => {
    var i;
    for (i = 0; i < selected.length; i++) {
      downloadObjectAsJson(
        selected[i],
        selected[i] + ".json",
        values.data.id,
        values.data.token
      );
    }
  };

  const [selected, setSelected] = useState<Array<string>>([]);

  function deleteFile(arr: any) {
    // var payload = {
    //   "publicIds[]" : arr,
    //   "user_id":'1'
    // };

    var data = new FormData();
    data.append("user_id", "1");
    arr.map((name: string) => {
      data.append("publicIds[]", name);
      return null;
    });

    console.log("hi", arr, "ok", data.entries());
    //   for (var key of data.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }

    const url =
      "https://graduationprojectt.herokuapp.com/api/images/predictdel/" +
      modelId; //req url
    fetch(url, {
      method: "post",
      body: data,

      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        // "Content-Type": "application/json",
        // "Accept": "application/json",
      },
    });
  }

  const values = React.useContext(AuthContext); //2
  interface Data {
    accuracy: number;
    asset_id: string;
    bytes: number;
    created_at: "2021-05-08T18:50:04Z";
    derived: [];
    format: "jpg";
    height: number;
    id: number;
    labels: string;
    model_id: number;
    name: string;
    next_cursor: string;
    public_id: string;
    resource_type: string;
    secure_url: string;
    state_id: number;
    type: string;
    url: string;
    user_id: 1;
    verify_state: number;
    version: number;
    width: number;
  }
  const [files, setFiles] = useState<Array<Data>>([]);
  const [state, setState] = useState(0);
  React.useEffect(() => {
    // بس لما تتحمل الصفحة اول مرة
    const url =
      `https://graduationprojectt.herokuapp.com/api/images/predict/${modelId}?user_id=` +
      values.data.id;
    // + values.data.id; //req url
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
          setFiles(data);
        } else return false;
      });
  }, [values.data.id, values.data.token, modelId]);

  // console.log(selected);

  const copyArray =
    state === 1
      ? files?.filter((item) => item.verify_state === 1)
      : state === 2
      ? files?.filter((item) => item.verify_state === 0)
      : files;
  return (
    <>
      <div className={styles.container_taps}>
        <div className={styles.left}>
          <div>
            <span className={styles.tap} onClick={() => setState(0)}>
              All Files
            </span>
          </div>

          <div>
            <span className={styles.tap} onClick={() => setState(1)}>
              Verify Files
            </span>
          </div>

          <div>
            <span className={styles.tap} onClick={() => setState(2)}>
              Not Verify Files
            </span>
          </div>

          <div>
            <span
              className={styles.tap}
              onClick={() =>
                history.push("/dashboard/model/modelpage/description")
              }
            >
              Model Description
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.tap} onClick={() => downloadeselected()}>
            Downlade Selected
          </span>
          <span className={styles.tap} onClick={() => deleteFile(selected)}>
            Delete Selected
          </span>
        </div>
      </div>
      <div className={styles.container}>
        {/* <div onClick={() => downloadObjectAsJson("../../assets/jsons/objk.json", 'myObj.json' ,  values.data.id , values.data.token)} > click </div> */}

        <div
          className={styles.uploadImagesContainer}
          style={isUpload ? { height: "600px" } : { height: "50px" }}
        >
          <div
            className={styles.uploadDiv}
            onClick={() => setIsUpload(!isUpload)}
          >
            <h3>Upload Image</h3>
          </div>
          <div className={styles.upload}>{isUpload && <UploadImages />}</div>
        </div>
        <div>
          <div className={styles.container_files}>
            {copyArray?.map((file: any) => (
              <div className={styles.container_file}>
                <div className={styles.imageandcheck}>
                  <div className={styles.imgDiv}>
                    <input
                      type="checkbox"
                      className={styles.checkBox}
                      onClick={() => addSelected(file.name)}
                    ></input>
                    <img src={file.url} alt="" className={styles.img} />
                  </div>
                </div>
                <div style={{ justifyContent: "center" }}>{file.name}</div>
                <div>{file.verify_state}</div>
                <div>{file.created_at}</div>
                <div className={styles.buttones}>
                  <div
                    onClick={() => {
                      var arr = [];
                      arr.push(file.name);
                      deleteFile(arr);
                    }}
                  >
                    <RiDeleteBin5Fill size="22px" className={styles.icons} />
                  </div>
                  <div
                    className={styles.icons}
                    onClick={() =>
                      downloadObjectAsJson(
                        file.name,
                        file.name + ".json",
                        values.data.id,
                        values.data.token
                      )
                    }
                  >
                    <HiOutlineDownload size="22px" className={styles.icons} />
                  </div>
                  <div>
                    <AiOutlineCheckCircle
                      size="22px"
                      className={styles.icons}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelPage;
