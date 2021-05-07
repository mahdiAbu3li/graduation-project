import React, { useEffect, useState } from "react";
import styles from "./fileVerStyles.module.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation";

// import ReactImageAnnotate from "react-image-annotat";



const FileVer = () => {
  const values = React.useContext(AuthContext);//2

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
  const [annotationData, setAnnotationData] = useState([{"id": "name", "mark": {"x": 742.4716027975082, "y": 913.3351806402206, "width": 216.37141013145447, "height": 19.984507381916046, "type": "RECT"}, "comment": "name"}, {"id": "maj", "mark": {"x": 742.794718682766, "y": 947.1878755092621, "width": 209.78028970956802, "height": 19.100226044654846, "type": "RECT"}, "comment": "maj"}, {"id": "id", "mark": {"x": 776.6192585229874, "y": 982.4524522423744, "width": 138.01745927333832, "height": 25.000196278095245, "type": "RECT"}, "comment": "id"}]);
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

  React.useEffect(() => {// بس لما تتحمل الصفحة اول مرة
    const url = "https://graduationprojectt.herokuapp.com/api/dataset/55";//req url
    fetch(url, {
      method: "get",
      headers: {//the same
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
        {files?.map((file: any) => (//files
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
            // width={activeImage?.width ? activeImage.width : 800}
            // height={activeImage?.height ? activeImage.height : 500}

            width={900}
            height={550}
            

            annotationData={annotationData}
            // annotationData={[{"id": "name", "mark": {"x": 742.4716027975082, "y": 913.3351806402206, "width": 216.37141013145447, "height": 19.984507381916046, "type": "RECT"}, "comment": "name"}, {"id": "maj", "mark": {"x": 742.794718682766, "y": 947.1878755092621, "width": 209.78028970956802, "height": 19.100226044654846, "type": "RECT"}, "comment": "maj"}, {"id": "id", "mark": {"x": 776.6192585229874, "y": 982.4524522423744, "width": 138.01745927333832, "height": 25.000196278095245, "type": "RECT"}, "comment": "id"}]}
            // disableAnnotation={true}
            
            annotationStyle={{
              ...defaultShapeStyle,
              shapeStrokeStyle: "blue ",
              transformerBackground: "red",
              shapeShadowStyle: "hsla(210, 9%, 31%, 0.35)", 
              
              // shapeBackground: "red",
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
};

export default FileVer;
