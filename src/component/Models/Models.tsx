import React from "react";
import styles from "./ModelsStyles.module.css";
// import {FaCircle } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";

// import { useState } from "react";
import { useHistory } from "react-router";
// import ModelPage from "../ModelPage/ModelPage";
const models = [
  {
    name: "invoice 1",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image :require('../../assets/images/img4.jpg'),
    img_training: 40,
    using_time :30,
    description:"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
     
  },
  {
    name: "invoice 2",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image :require('../../assets/images/img5.png'),
    img_training: 40,
    using_time :30,
    description:"lum maxime quod deserunt eligendi tetur, Ducimus, repudiandae temporibus omntetur, Ducimus, repudiandae temporibus omndolo mus, rep Lorem ipsum dolor sit amet consectetur, Ducimus, rep Lorem ipsum dolor sit amet consectetur, Ducimus, repLorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserrep Lorem ipsum dolor sit amet consectetur, Ducimus, repLorem ipsum dolor sit amet consectetur, Ducimus, unt eligendi dolor"
     

  },
  {
    name: "invoice 3",
    id: "3",
    date: "12/5/1555",
    color: "orange",
    image :require('../../assets/images/img6.jpg') ,
    img_training: 40,
    using_time :30,
    description:"amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"

  },
  {
    name: "invoice 4",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image :require('../../assets/images/img6.png'),
    img_training: 40,
    using_time :30,
    description:"amet consudiandae temporibus omnis illum maxime quod deserunt eligendi dolor amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolorLorem  temporibus omnisdolor"

  },
  {
    name: "invoice 5",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image :require('../../assets/images/img8.JPG'),
    img_training: 40,
    using_time :30,
    description:"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"

  },
  {
    name: "invoice 6",
    id: "3",
    date: "12/5/1555",
    color: "orange",
    image :require('../../assets/images/img3.png'),
    img_training: 40,
    using_time :30,
    description:"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"

  },
  {
    name: "invoice 8",
    id: "1",
    date: "12/5/1555",
    color: "orange" ,
    image :require('../../assets/images/img1.png'),
    img_training: 40,
    using_time :30,
    description:" Lorem ipsum dolor sit amet consectetur, Ducimus, rep Lorem ipsum dolor sit amet consectetur, Ducimus, rep Lorem ipsum dolor sit amet consectetur, Ducimus, repLorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"

  },
  {
    name: "invoice 9",
    id: "2",
    date: "12/5/1555",
    color: "orange",
    image :require('../../assets/images/img2.png'),
    img_training: 40,
    using_time :30,
    description:"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
  },
  
];

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
  const history = useHistory();
  // const [step, setStep] = useState(0);

  // React.useEffect(() => {
  //   if (step === 0) {
  //     history.push("/dashboard/create/upload");
  //   } else if (step === 1) {
  //     history.push("/dashboard/create/verify");
  //   }
  // }, [step, history]);

  return (
    <div className={styles.container}>
      <img src={require('../../assets/images/color.jpg').default} alt=""></img>
      <img src={require('../../assets/images/color2.jpg').default} alt=""></img>
   
      <div className={styles.container_states}>
        {labels.map((i) => (
          <div>
            <IoEllipse color={i.color} size ="25px"></IoEllipse>
            {/* <FaCircle
              style={{ color: i.color, fontSize: "25pxpx" }}
            ></FaCircle> */}

            <span  >{i.title}</span>
          </div>
        ))}

      {/* models */}
      </div>

      <div className={styles.container_models}>
        {models.map((i) => (
          <div className={styles.maincontainer}>
            <div className={styles.thecard}>
              <div className={styles.thefront} >
                <div className={styles.card_text}>
                  <div className={styles.card_text_name}><h2 >{i.name}</h2></div>                 
                  <div className={styles.card_text_1}>
                    <div className={styles.card_text_circle}>
                     <IoEllipse color={i.color} size="25px"></IoEllipse></div>
                    <div className={styles.card_text_date}>
                    <p >Created at {i.date}</p>
                    </div>
                    </div>
                  <div className={styles.card_text_pareraph}><p >{i.description}</p>
                  </div>
                </div>
                <div className={styles.card_stats}>
                  <div className={styles.stat}>
                    <div className={styles.value}>4<sup>m</sup></div>
                    <div className={styles.type}>read</div>
                  </div>
                  <div className={styles.stat }>
                    <div className={styles.value}>{i.using_time}</div>
                    <div className={styles.type}>using time</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.value}>{i.img_training}</div>
                    <div className={styles.type}>photos training</div>
                  </div>
                </div>
              </div>             
              <div className={styles.theback}  >
                <img src={i.image.default}  alt="" style={{width : "100%" , opacity: "0.5" , position:"absolute" , left:"0" , top:"0" , alignContent:"center" , marginLeft:"auto" , marginRight:"auto"}}  />
                <div style ={{position : "relative" , width:"40%" , height:"20%" , background:"red" , top:"38%" , left:"28%"}} onClick={() => history.push("/dashboard/model/modelpage")} >
                  click to use this model
                </div>
            </div>
          </div>
          </div>
        ))
        }

    </div>
    </div>
  );
};

export default Models;
