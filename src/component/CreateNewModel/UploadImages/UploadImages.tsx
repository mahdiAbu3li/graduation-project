import React from "react";
import styles from "./UploadImagesStyles.module.css";
function UploadImages() {
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContainer_header}>
        <h3>Upload Images</h3>
        <p>_ upload image , model will learn from</p>
      </div>
      <div></div>
      <div className={styles.wrapInput}>
        <div className={styles.hiddenLayer}>
          <p>
            Drag and Drop or <span> Click here </span> to upload images
          </p>
        </div>
        <input type="file" multiple accept="image/*" />
      </div>
    </div>
  );
}

export default UploadImages;
