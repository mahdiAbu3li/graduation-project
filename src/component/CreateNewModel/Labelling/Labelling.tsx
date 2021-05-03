import React, { useEffect, useState } from "react";
import styles from "./LabellingStyles.module.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import ReactImageAnnotate from "react-image-annotate";

import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation";
function Labelling() {
  const values = React.useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [id, setid] = useState("");
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
  interface ActiveImage2 {
    src: string;
    name: string;
    regions: [];
  }
  interface Data {
    id: string;
    mark: {};
  }
  const [activeImage, setActiveImage] = useState<ActiveImage>();
  const [activeImage2, setActiveImage2] = useState<Array<ActiveImage2>>();
  const [annotationData, setAnnotationData] = useState<Array<Data>>([]);
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
  // console.log(JSON.stringify(annotationData));
  const Annotator = () => {
    return (
      <ReactImageAnnotate
        labelImages
        regionClsList={["Alpha", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={
          activeImage2
            ? activeImage2
            : [
                {
                  src: "https://placekitten.com/408/287",
                  name: "Image 1",
                  regions: [
                    {
                      cls: "Charlie",
                      color: "#fff",
                      editingLabels: false,
                      h: 0.13787638668779714,
                      highlighted: false,
                      id: "6041228877509104",
                      tags: ["tag2"],
                      type: "box",
                      w: 10,
                      x: 0.2251872222740126,
                      y: 0.11410459587955626,
                    },
                  ],
                },
                {
                  src: "https://placekitten.com/408/287",
                  name: "Image 11",
                  regions: [
                    {
                      cls: "Charlie",
                      color: "#fff",
                      editingLabels: false,
                      h: 0.13787638668779714,
                      highlighted: false,
                      id: "6041228877509104",
                      tags: ["tag2"],
                      type: "box",
                      w: 0.5,
                      x: 0.2251872222740126,
                      y: 0.11410459587955626,
                    },
                  ],
                },
                {
                  src: "https://placekitten.com/408/287",
                  name: "Image 1",
                  regions: [
                    {
                      cls: "Charlie",
                      color: "#fff",
                      editingLabels: false,
                      h: 0.13787638668779714,
                      highlighted: false,
                      id: "6041228877509104",
                      tags: ["tag2"],
                      type: "box",
                      w: 1,
                      x: 0.2251872222740126,
                      y: 0.11410459587955626,
                    },
                  ],
                },
              ]
        }
        // onExit={(MainLayoutState: any) =>
        //   console.log(MainLayoutState.images[0].regions)
        // }
      />
    );
  };
  console.log(activeImage2, "111111111111111111111");
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
              onClick={() => {
                setActiveImage({
                  name: file.public_id.split("/")[3],
                  url: file.url,
                  width: file.width,
                  height: file.height,
                });
                setActiveImage2([
                  {
                    src: file.url,
                    name: file.public_id.split("/")[3],
                    regions: [],
                  },
                ]);
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.annotation_container}>
        <div className={styles.div1}>
          {/* <div className={styles.div2}> */}
          {/* <ReactPictureAnnotation
            image={activeImage?.url ? activeImage.url : ""}
            onSelect={onSelect}
            onChange={onChange}
            width={activeImage?.width ? activeImage.width : 800}
            height={activeImage?.height ? activeImage.height : 500}
            annotationData={annotationData}
            annotationStyle={{
              ...defaultShapeStyle,
              shapeStrokeStyle: "#fa2",
              transformerBackground: "black",
            }}
            selectedId={id}
            inputElement={(value, onChange, onDelete) => (
              // <input />
              <DefaultInputSection
                placeholder={"Hello world"}
                {...{ value, onChange, onDelete }}
              />
            )}
          /> */}
          <Annotator />
        </div>
        {/* </div> */}
      </div>
      <div className={styles.labels_container}>
        <h1>Labels</h1>
        <div
          className={styles.label}
          onClick={() =>
            setid(
              typeof annotationData !== "undefined" ? annotationData[1].id : ""
            )
          }
        >
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
