import React, { useState } from "react";
import styles from "./fileVerStyles.module.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext"; //1
import Labels from "./Labels/Labels";
import { useParams } from "react-router-dom";

import ReactImageAnnotate from "react-image-annotate";

function Labelling() {
  const { modelId } = useParams<{ modelId: string }>();
  const values = React.useContext(AuthContext);

  const [files, setFiles] = useState([]);

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/images/predict/+253?user_id=1";
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          //   console.log(
          // data.resources.length,
          //     "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
          //   );

          setFiles(data);
        } else return false;
      });
  }, [values.data.token]);

  const [texts, setTexts] = useState<Array<Array<string>>>([[""]]);

  const setLabels = async (name: string, regions: any) => {
    var newArr = [] as any;

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

    var payload = {
      json: "[{name:farah}]",
      image: name,
      labels: newArr,
      user_id: 1,
    };

    var data = new FormData();

    data.append("nodes", JSON.stringify(payload));

    const url =
      "https://graduationprojectt.herokuapp.com/api/verify/57?image=" +
      name +
      '&json={"a" : 5}&labels=' +
      newArr +
      "&user_id=1"; //req url

    // console.log("data");
    //   for (var key of data.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }
    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.resources.length > 0) {
          //   console.log(
          //     data.resources.length,
          //     "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
          //   );
          // setFiles(data.resources);
        } else return false;
      });
  };

  function Anotate() {
    return (
      <ReactImageAnnotate
        labelImages
        regionClsList={["Name", "Major", "ID", "Date"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: activeImage2.src,
            name: activeImage2.name,

            regions: activeImage2.regions,
          },
        ]}
        enabledTools={["create-box"]}
        allowComments={true}
        onExit={(a: any) => {
          // console.log("a in exit", a);
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

  // const[json , setJson] = useState();
  function setSelectedImage(name: string) {
    const url =
      "https://graduationprojectt.herokuapp.com/api/predictfile/labels/" +
      modelId +
      "?image=" +
      name +
      "&user_id=1"; //req url
    // console.log("name of imageee", name);
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
        // console.log(data[0].labels, "Yes Yes Yes Yes Yes");
        var newArr = [] as any;

        // console.log("data in setSelected ", data);
        // console.log("data[1] in setSelected", data[1]);
        if (data.length !== 0 && data[0].labels !== null) {
          /*eslint-disable no-eval */
          // console.log("true");

          // console.log("data[0] .labels", data[0].labels[0]);
          //@ts-ignore;
          var labels = eval(data[0].labels[0]);
          //@ts-ignore;
          // console.log(" labels :eval data[0] in setSelected ", labels);

          //@ts-ignore;
          var text = JSON.parse(data[1]);
          //@ts-ignore;
          // console.log(" text in setSelected ", text);

          const arr = [] as string[][];
          for (const [key, value] of Object.entries(text)) {
            console.log("key value in setSelected ", key, "  ", value);
            //@ts-ignore;
            value.push(key);
            //@ts-ignore;
            arr.push(value);
          }

          console.log("arr in setSelected", arr);
          setTexts(arr);

          labels.map((region: any) => {
            // console.log("reagion csl :", region.cls);
            newArr.push({
              cls: region.cls,
              color: "red",
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
          // console.log("false");
        }
        // console.log("abu 3li new arr in setSelected", newArr)

        setActiveImage2({
          src: activeImage2.src,
          name: name,
          regions: newArr,
          width: activeImage2.width,
          height: activeImage2.height,
        });
      });
  }
  // const changeValue = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   const arr = [...texts];
  //   arr[index][0] = e.target.value;
  //   setTexts(arr);
  //   console.log(e.target.value);
  // };
  console.log("files ", files);
  // console.log("text out", texts)

  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        {files?.map((file: any) => (
          //  console.log("id",file.public_id)
          <div
            className={`${styles.images} ${
              file.url === activeImage2?.src ? styles.active : ""
            }`}
            key={file.id}
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

                console.log("iddddddddddddd", file.id);
                setSelectedImage(file.id);

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
            <Anotate />
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <div className={styles.labels_container}>
        <h1>Labels</h1>
        {texts?.map((item, index) => (
          <>
            <div className={styles.label}>
              <pre>{item[2]}</pre>
              <pre>{item[0]}</pre>
            </div>
          </>
        ))}
      </div> */}
      <Labels key={activeImage2.name} labels={texts} name={activeImage2.name} />
    </div>
  );
}

export default Labelling;
