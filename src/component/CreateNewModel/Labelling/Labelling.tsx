import React, { useEffect, useState } from "react";
import styles from "./LabellingStyles.module.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation";
function Labelling() {
  const values = React.useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const onSelect = (selectedId: any) => console.log(selectedId);
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  interface ActiveImage {
    url: string;
    name: string;
    width: number;
    height: number;
  }

  const [activeImage, setActiveImage] = useState<ActiveImage>();
  const [annotationData, setAnnotationData] = useState();
  //   const onResize = () => {
  //     setPageSize({ width: window.innerWidth, height: window.innerHeight });
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", onResize);
  //     return () => window.removeEventListener("resize", onResize);
  //   }, []);
  const onChange = (data: any) => {
    console.log(data);
    setAnnotationData(data);
  };
  React.useEffect(() => {
    const url = "https://graduationprojectt.herokuapp.com/api/dataset/55";
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.resources.length > 0) {
          //   console.log(
          //     data.resources.length,
          //     "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
          //   );
          setFiles(data.resources);
        } else return false;
      });
  }, []);
  console.log(JSON.stringify(annotationData));
  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        {files?.map((file: any) => (
          <div
            className={`${styles.images} ${
              file.url === activeImage?.url ? styles.active : ""
            }`}
            key={file.public_id.split("/")[3]}
          >
            <img
              src={file.url}
              alt="preview"
              onClick={() =>
                setActiveImage({
                  name: file.public_id.split("/")[3],
                  url: file.url,
                  width: file.width,
                  height: file.height,
                })
              }
            />
          </div>
        ))}
      </div>
      <div className={styles.annotation_container}>
        <div className={styles.div1}>
          {/* <div className={styles.div2}> */}
          <ReactPictureAnnotation
            image={activeImage?.url ? activeImage.url : ""}
            onSelect={onSelect}
            onChange={onChange}
            width={activeImage?.width ? activeImage.width : 800}
            height={activeImage?.height ? activeImage.height : 500}
            annotationData={annotationData}
            annotationStyle={{
              ...defaultShapeStyle,
              shapeStrokeStyle: "#2193ff",
              transformerBackground: "black",
            }}
            inputElement={(value, onChange, onDelete) => (
              <DefaultInputSection
                placeholder={"Hello world"}
                {...{ value, onChange, onDelete }}
              />
            )}
          />
        </div>
        {/* </div> */}
      </div>
      <div className={styles.labels_container}>
        <h1>Labels</h1>
        <div className={styles.label}>
          <pre>phone</pre>
          <pre>0595780154</pre>
        </div>
        <div className={styles.label}>
          <pre>phone</pre>
          <pre>0595780154</pre>
        </div>
        <div className={styles.label}>
          <pre>phone</pre>
          <pre>0595780154</pre>
        </div>
      </div>
    </div>
  );
}

export default Labelling;
