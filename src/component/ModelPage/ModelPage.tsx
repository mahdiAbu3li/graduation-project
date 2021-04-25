import React from "react";
import styles from "./ModelPageStyles.module.css";
import { FaCircle } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/all";
import { IoEllipse } from "react-icons/all";
import {HiOutlineDownload} from "react-icons/all";
import {AiOutlineCheckCircle} from "react-icons/all";

import login from "../../assets/images/login.png";
import mahdi from "../../assets/images/img1.png"
import { GrStatusDisabledSmall } from "react-icons/gr";
const files = [
  {
    name: "invoice 1",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img1.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 2",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img4.jpg'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 3",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img2.png'),
    manual_varifaction: "true"
  },
  {
    name: "invoice 4",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img3.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 5",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img5.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 6",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img6.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 7",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img8.JPG'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 4",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img3.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 5",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img5.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 6",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img6.png'),
    manual_varifaction: "true"

  },
  {
    name: "invoice 8",
    id: "1",
    date: "12/5/1555",
    image: require('../../assets/images/img6.jpg'),
    manual_varifaction: "true"

  },

];

const labels = [
  {
    color: "lightblue",
    title: "Model Created",
  },
  {
    color: "orange",
    title: "Data Uploded",
  },
  {
    color: "lightgreen",
    title: "Data Processed",
  },
  {
    color: "lightyellow",
    title: "Model Training",
  },
  {
    color: "green",
    title: "Model Ready",
  },

];
const ModelPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_states}>
        {labels.map((i) => (
          <div>
            <IoEllipse color={i.color} size="25px"></IoEllipse>
            {/* <FaCircle
              style={{ color: i.color, fontSize: "25pxpx" }}
            ></FaCircle> */}

            <span  >{i.title}</span>
          </div>
        ))}

        {/* models */}
      </div>
      <div className={styles.container_models}>
        <p>Model Page</p>
      </div>

      <div >
        
        <div className={styles.container_files}>
        {files.map((i) => (

          <div className={styles.container_file}>
            <div className={styles.imageandcheck}>
             
                <div className={styles.imgDiv}>
                  <img src={i.image.default} alt="" className={styles.img}/>
{/* ldm,dsl */}
                </div>
              
            </div>

            <div style={{"justifyContent":"center" , "backgroundColor":"red"}}>
              {i.name}
            </div>

            <div>
              {i.manual_varifaction}
              
            </div>

            <div>
              {i.date}
              
            </div>

            <div className={styles.buttones}>
              {/* <div onClick={() => BiDownload()}> */}

              <RiDeleteBin5Fill />
              {/* </div> */}
              <HiOutlineDownload />
              <AiOutlineCheckCircle />


            </div>


          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
