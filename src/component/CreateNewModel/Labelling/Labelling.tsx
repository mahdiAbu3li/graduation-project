import React, { useState } from "react";
import styles from "./LabellingStyles.module.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import Labels from "../../ModelPage/fileVerification/Labels/Labels";
// import {
//   ReactPictureAnnotation,
//   defaultShapeStyle,
//   DefaultInputSection,
// } from "react-picture-annotation";

import ReactImageAnnotate from "react-image-annotate";
// import { GiProtectionGlasses } from "react-icons/gi";

function Labelling() {
  const values = React.useContext(AuthContext); //2

  const [classes, setClasses] = useState([]);

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/label_of_model/171"; //req url
    fetch(url, {
      method: "get",
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        // "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "claaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas");
        // if (data.length > 0) {

        setClasses(data);
        // } else return false;
      });
  }, [values.data.token]);

  const [files, setFiles] = useState([]);

  React.useEffect(() => {
    // بس لما تتحمل الصفحة اول مرة
    const url = "https://graduationprojectt.herokuapp.com/api/dataset/171"; //req url
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
        if (data.resources.length > 0) {
          //   console.log(
          //     data.resources.length,
          //     "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
          //   );

          setFiles(data.resources);
        } else return false;
      });
  }, [values.data.token]);

  const [texts, setTexts] = useState<Array<Array<string>>>([[""]]);
  // console.log(JSON.stringify(annotationData));
  const setLabels = async (name: string, regions: any) => {
    var newArr = [] as any;

    // console.log("h", activeImage2.height);
    // console.log("region ", regions);
    regions.map((region: any) => {
      newArr.push({
        cls: region.cls,
        color: region.color,
        editingLabels: true,
        h: region.h * activeImage2.height,
        highlighted: true,
        id: region.id,
        type: "box",
        // tags: ["tag2"],
        w: region.w * activeImage2.width,
        x: region.x * activeImage2.width,
        y: region.y * activeImage2.height,
      });
      return null;
    });
    // console.log(newArr, "newww");
    var payload = {
      src: "",
      name: name,
      regions: newArr,
    };

    var data = new FormData();

    data.append("nodes", JSON.stringify(payload));

    const url =
      "https://graduationprojectt.herokuapp.com/api/object_map_labeling/171 "; //req url

    // console.log("data");
    //   for (var key of data.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }
    const response = await fetch(url, {
      method: "post",
      body: data,
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        // "Content-Type": "application/json",
        // "Accept": "application/json",
      },
    });
    // console.log("res", await response.json());
    const res = await response.json();

    /*eslint-disable no-eval */
    console.log("true");
    //@ts-ignore;
    // console.log("data[0] ", res[0]);
    // var labels = eval(res[0].labels);
    //@ts-ignore;
    // console.log(" labels :eval data[0] in setSelected ", labels);

    //@ts-ignore;
    var text = JSON.parse(res);
    //@ts-ignore;
    console.log(" texe", text);

    const arr = [] as string[][];
    for (const [key, value] of Object.entries(text)) {
      console.log(key, "  ", value);
      //@ts-ignore;
      value.push(key);
      //@ts-ignore;
      arr.push(value);
    }

    console.log(arr, "mahdi");
    //@ts-ignore;
    setTexts(arr);
  };

  function Anotate() {
    return (
      <ReactImageAnnotate
        labelImages
        // regionClsList={["Name", "Major", "ID", "Date"]}
        regionClsList={classes}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: activeImage2.src,
            name: activeImage2.name,

            regions: activeImage2.regions,
          },
        ]}
        //     [{
        //       cls: activeImage2.regions,
        //       color: "#ff0000",
        //       editingLabels: false,
        //       h: 19.984507381916046 / activeImage2.height,
        //       highlighted: true,
        //       id: "4448823485729658",
        //       type: "box",
        //       tags: ["tag2"],
        //       w: 220.52332490682602 / activeImage2.width, "x": 742.4716027975082 / activeImage2.width, "y": 913.3351806402206 / activeImage2.height
        //     },

        //     ]
        //   }
        // ]}
        enabledTools={["create-box"]}
        allowComments={true}
        onExit={(a: any) => {
          // console.log(a);
          setLabels(a.images[0].name, a.images[0].regions);
        }}
      />
    );
  }

  interface ActiveImage2 {
    src: string;
    name: string;
    regions: any;
    width: number;
    height: number;
  }

  const [activeImage2, setActiveImage2] = useState<ActiveImage2>({
    src: "https://placekitten.com/408/287",
    name: "Image 1",
    regions: [],
    width: 20,
    height: 20,
  });

  function setSelectedImage(name: string) {
    const url =
      "https://graduationprojectt.herokuapp.com/api/modelfile/labels/171?image=" +
      name; //req url
    console.log(name, "nnn");
    fetch(url, {
      method: "get",
      headers: {
        //the same
        Authorization: `Bearer ${values.data.token}`,
        // "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(

        //   (data[0].labels),
        //   "Yes Yes Yes Yes Yes"
        // );
        var newArr = [] as any;

        console.log("data", data);
        console.log("obj", data[1]);
        if (data.length !== 0 && data[0].labels !== null) {
          /*eslint-disable no-eval */
          console.log("true");
          //@ts-ignore;
          console.log("data[0] ", data[0]);
          var labels = eval(data[0].labels);
          //@ts-ignore;
          console.log(" labels :eval data[0] in setSelected ", labels);

          //@ts-ignore;
          var text = JSON.parse(data[1]);
          //@ts-ignore;
          console.log(" texe", text);

          const arr = [] as string[][];
          for (const [key, value] of Object.entries(text)) {
            console.log(key, "  ", value);
            //@ts-ignore;
            value.push(key);
            //@ts-ignore;
            arr.push(value);
          }

          console.log(arr, "mahdi");
          //@ts-ignore;
          setTexts(arr);

          labels.map((region: any) => {
            newArr.push({
              cls: region.cls,
              color: region.color,
              editingLabels: true,
              h: region.h / activeImage2.height,
              highlighted: true,
              id: region.id,
              type: "box",
              // tags: ["tag2"],
              w: region.w / activeImage2.width,
              x: region.x / activeImage2.width,
              y: region.y / activeImage2.height,
            });
            return null;
          });
        } else {
          newArr = [];
          console.log("false");
        }
        console.log("abu 3li", newArr);
        setActiveImage2({
          src: activeImage2.src,
          name: name,
          regions: newArr,
          width: activeImage2.width,
          height: activeImage2.height,
        });
      });
  }
  // console.log(files , 123456789)
  // console.log("classes " , classes)
  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        {files?.map((
          file: any //files
        ) => (
          <div
            className={`${styles.images} ${
              file.url === activeImage2?.src ? styles.active : ""
            }`}
            key={file.public_id.split("/")[4]}
          >
            <img
              src={file.url}
              alt="preview"
              onClick={() => {
                // setActiveImage2({
                //   name: file.public_id.split("/")[3],
                //   src: file.url,
                //   regions: [],
                //   width: file.width,
                //   height: file.height
                // })

                console.log(file.public_id.split("/")[4]);
                setSelectedImage(file.public_id.split("/")[4]);
                activeImage2.height = file.height;
                activeImage2.width = file.width;
                activeImage2.src = file.url;
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.annotation_container}>
        <div className={styles.div1}>
          <div>
            <Anotate></Anotate>
          </div>
        </div>
      </div>
      <div className={styles.labels_container}>
        <h1>Labels</h1>
        {texts?.map((item, index) => (
          <>
            <div className={styles.label} style={{ color: "{$'item[1]'}" }}>
              <p>{item[2]}</p>
              <p>{item[0]}</p>
            </div>
          </>
        ))}
      </div>
      {/* <Labels key={activeImage2.name} labels={texts} name={activeImage2.name} /> */}
    </div>
  );
}

export default Labelling;
