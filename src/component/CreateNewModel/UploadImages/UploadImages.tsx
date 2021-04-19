import { stringify } from "node:querystring";
import React, { useState } from "react";
import styles from "./UploadImagesStyles.module.css";
function UploadImages() {
  const v = window.localStorage.getItem("values");
  const vj = v !== null ? JSON.parse(v) : [];
  const [files, setFiles] = useState<unknown[]>(vj);
  function readFileAsText(file: File) {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsDataURL(file);
    });
  }

  const imageSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      let files = e.currentTarget.files;
      let readers = [];

      // Abort if there were no files selected
      if (!files?.length) return;

      // Store promises in array
      for (let i = 0; i < files.length; i++) {
        readers.push(readFileAsText(files[i]));
      }

      // Trigger Promises
      Promise.all(readers).then((values) => {
        // Values will be an array that contains an item
        // with the text of every selected file
        // ["File1 Content", "File2 Content" ... "FileN Content"]
        // if (typeof values !== "object") return;
        // console.log(typeof values, 111111111111);
        window.localStorage.setItem("values", JSON.stringify(values));
        console.log(values, typeof values);
        setFiles(values);
      });
    }
  };
  console.log(files, 123132131);

  const images = files?.map((file) => (
    <img src={typeof file === "string" ? file : ""} alt="preview" />
  ));
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContainer_header}>
        <h3>Upload Images</h3>
        <p>_ upload image , model will learn from</p>
      </div>
      <div></div>
      <div className={styles.wrapInput}>
        <div className={styles.hiddenLayer}>
          {files.length !== 0 ? (
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
