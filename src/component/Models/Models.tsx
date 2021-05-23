import React, { useState } from "react";
import styles from "./ModelsStyles.module.css";
import { IoEllipse } from "react-icons/io5";
// import { useHistory } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import ModelsComponent from "./modelsComponent";
import CircularProgress from "@material-ui/core/CircularProgress";

// import image from "../../assets/images/color.jpg";

// const myModels = [
//   {
//     name: "invoice 1",
//     id: "1",
//     date: "12/5/1555",
//     color: "orange",
//     image: require("../../assets/images/img4.jpg"),
//     img_training: 40,
//     using_time: 30,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
//   },

// ];

const labels = [
  {
    color: "#b7dfec",
    title: "Model Created",
  },
  {
    color: "#fad276",
    title: "Data Uploded",
  },
  {
    color: "c4f6ab",
    title: "Data Processed",
  },
  {
    color: "f3c8ef",
    title: "Model Training",
  },
  {
    color: "02b902",
    title: "Model Ready",
  },
];

const Models = () => {
  // const history = useHistory();
  const values = React.useContext(AuthContext);

  const [isLoadingMy, setIsLoadingMy] = useState(true);
  const [isLoadingUse, setIsLoadingUse] = useState(true);
  interface Models {
    created_date: string;
    current: null;
    description: string;
    id: number;
    last_use_date: string;
    name: string;
    number_of_using: number;
    owner_id: number;
    progress: number;
    progress_re: number;
    public_state: number;
    short_description: string;
    state_id: number;
    number_of_req: number;
  }
  const [models, setModels] = useState<Array<Models>>();

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/show_model_user_owns/" +
      values.data.id;
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${values.data.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setIsLoadingMy(false);
        console.log(data);
      });
  }, [values.data.id, values.data.token]);

  const [useModels, setUseModels] = useState<Array<Models>>();

  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/show_model_user_use/" +
      values.data.id;
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${values.data.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUseModels(data);
        setIsLoadingUse(false);
        console.log(data);
      });
  }, [values.data.id, values.data.token]);

  console.log("usrmodel ", useModels);

  // const copyArray =models?models:models;

  return (
    <div className={styles.container}>
      {/* <img
        src={require("../../assets/images/color.jpg").default}
        alt="no"
      ></img> */}

      <div className={styles.container_states}>
        {labels.map((i) => (
          <div>
            <IoEllipse color={i.color} size="25px"></IoEllipse>
            <span>{i.title}</span>
          </div>
        ))}
      </div>
      <div>Models I have</div>
      {isLoadingMy ? <CircularProgress /> : <ModelsComponent models={models} />}
      <div>Models I Used</div>

      {isLoadingUse ? (
        <CircularProgress />
      ) : (
        <ModelsComponent models={useModels} />
      )}
    </div>
  );
};

export default Models;
