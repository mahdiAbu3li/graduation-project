import React, { useState } from "react";
import styles from "./AllModelsStyles.module.css";
// import {FaCircle } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";

// import { useState } from "react";
import { useHistory } from "react-router";
// import ModelPage from "../ModelPage/ModelPage";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import ModelsComponent from "./modelsComponent";

const myModels = [
  {
    name: "invoice 1",
    id: "1",
    date: "12/5/1555",
    color: "orange",
    image: require("../../assets/images/img4.jpg"),
    img_training: 40,
    using_time: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
  }]

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

const options = ["All" , "Invoices", "License ", "ID Cards" , "Birth Certificate" , "Certificate"];



const AllModels = () => {
  const [type, setType] = useState<String>("All");
  const history = useHistory();
  const values = React.useContext(AuthContext);
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
  }


  const [models, setModels] = useState<Array<Models>>();
  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/public_model";
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
        setModels(data);
        console.log(data);
      });
  }, [values.data.id, values.data.token]);

  // const copy = models?.filter((i) => i.)


const setValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value , "farahh")
}
  return (
    <div className={styles.container}>
      {/* <img src={require('../../assets/images/color.jpg').default} alt=""></img>
      <img src={require('../../assets/images/color2.jpg').default} alt=""></img> */}


      <div className={styles.header}>
        <div className={styles.title}>
          <p>Public ModelS</p>
        </div>


        <div className={styles.selectContainer}>
          <select name="cars" id="cars" className={styles.select} onChange={(e) => setValue(e)} >
            {
              options.map((item, index2) => (
                <option key={index2} value={item} >
                  {item}
                </option>
              ))
            }

{/* 

          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option> */}
        </select>
        </div>
       
      </div>

      <ModelsComponent models={models} />
        {/* {models &&
          models.map((i) => (
            <div className={styles.maincontainer}>
              <div className={styles.thecard}>
                <div className={styles.thefront}>
                  <div className={styles.card_text}>
                    <div className={styles.card_text_name}>
                      <h2>{i.name}</h2>
                    </div>
                    <div className={styles.card_text_1}>
                      <div className={styles.card_text_circle}>
                        <IoEllipse color={"red"} size="25px"></IoEllipse>
                      </div>
                      <div className={styles.card_text_date}>
                        <p>Created at {i.created_date}</p>
                      </div>
                    </div>
                    <div className={styles.card_text_pareraph}>
                      <p>{i.description}</p>
                    </div>
                  </div>
                  <div className={styles.card_stats}>
                    <div className={styles.stat}>
                      <div className={styles.value}>
                        4<sup>m</sup>
                      </div>
                      <div className={styles.type}>read</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.value}>{i.number_of_using}</div>
                      <div className={styles.type}>using time</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.value}>11</div>
                      <div className={styles.type}>photos training</div>
                    </div>
                  </div>
                </div>
                <div className={styles.theback}>
                  <img
                    src={myModels[0].image.default}
                    alt=""
                    style={{
                      width: "100%",
                      opacity: "0.5",
                      position: "absolute",
                      left: "0",
                      top: "0",
                      alignContent: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}

                  />
                  <div className={styles.backButtoContainer}

                  >
                    <div className={styles.backButton} onClick={() =>
                      history.push("/dashboard/Allmodels/" + i.id +"/modeldescription")
                    }>See Description</div>
                    



                  </div>
                </div>
              </div>
            </div>
          ))} */}
    </div>
  );
};

export default AllModels;
