import React, { useContext, useState } from "react";
import styles from "./UploadImagesStyles.module.css";
import uploadGif from "../../../assets/images/upload.gif";
import loadingGif from "../../../assets/images/loading.gif";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import { useParams } from "react-router-dom";
function UploadImages() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadComponent, setUploadComponent] = useState<JSX.Element>();
  const values = useContext(AuthContext);

  const loading = <img src={loadingGif} alt="" />;
  const uploading = <img src={uploadGif} alt="ad" style={{ width: "70%" }} />;
  const [x, setx] = useState(false);
  const { modelId } = useParams<{ modelId: string }>();
  React.useEffect(() => {
    console.log(modelId);
    const url =
      "https://graduationprojectt.herokuapp.com/api/dataset/" + modelId;
    console.log(url);
    setIsLoading(true);
    setUploadComponent(loading);
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ` + values.data.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.resources.length > 0) {
          console.log(data.resources.length, "gett");
          setFiles(data.resources);
        } else return false;
      });
  }, [x]);

  const uploadfile = async (data: FormData) => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/dataset/" + modelId;
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      body: data,
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    setIsLoading(false);
    setx(!x);
  };
  const imageSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    setUploadComponent(uploading);
    console.log("mahdi");
    if (e.target.files !== null) {
      let files = e.currentTarget.files;
      const data = new FormData();
      if (files === null) return;
      for (let i in e.target.files) {
        data.append("images[]", e.target.files[i]);
      }
      uploadfile(data);
      // setUploadComponent(uploading);
    }
  };

  const images = files?.map((file: { url: string }, i) => (
    <img src={file.url} alt="preview" key={i} />
  ));

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContainer_header}>
        <h3>Upload Images</h3>
        <p>_ upload image , model will learn from</p>
      </div>

      <div></div>
      {/* <DropZone /> */}
      <div className={styles.wrapInput}>
        <div className={styles.hiddenLayer}>
          {/* {files.length !== 0 ? (
            <div className={styles.image_container}>{images}</div>
          ) : isLoading === false ? (
            <p>
              Drag and Drop or <span> Click here </span> to upload images
            </p>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {uploadComponent}
            </div>
          )} */}
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {uploadComponent}
            </div>
          ) : files.length !== 0 ? (
            <div className={styles.image_container}>{images}</div>
          ) : (
            <p>
              Drag and Drop or <span> Click here </span> to upload images
            </p>
          )}
        </div>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => imageSelectedHandler(e)}
        />
      </div>
    </div>
  );
}

export default UploadImages;
