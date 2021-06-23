import React from "react";
import styles from "./ModelsStyles.module.css";
import { useHistory, useParams } from "react-router";
import Zoom from "@material-ui/core/Zoom";
import { IoEllipse } from "react-icons/io5";



const myModels = [
  // {
  //   name: "invoice 1",
  //   id: "1",
  //   date: "12/5/1555",
  //   color: "orange",
  //   image: require("../../assets/images/img4.jpg"),
  //   img_training: 40,
  //   using_time: 30,
    
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
  // }, 

  {
  color: "#fad276",
  state_id:2,
  created_date: "12/6/2021",
  name: "Products",
  image: require("../../assets/images/img4.jpg"),
  short_description: "extract information",
  description: "This model to extract information from invoices",
  id: 5,
  number_of_using: 12,
  number_of_retraining: 40,
  public_state: 1,
  number_of_req: 3,
  photos_training:10,
  },

  {
  color: "#fad276",
  photos_training:10,
  state_id:1,
  created_date: "20/5/2021",
  name: "Invoice 1",
  image: require("../../assets/images/img4.jpg"),
  short_description: "",
  description: "This model to extract information from invoices",
  id: 1,
  number_of_using: 12,
  img_training: 40,
  public_state: 1,
  number_of_req: 2,
  number_of_retraining: 40,
  },
  {
  color: "orange",
  photos_training:10,
  state_id:4,
  created_date: "1/6/2021",
  name: "Invoice 2",
  image: require("../../assets/images/img4.jpg"),
  short_description: "",
  description: "This model to extract information from invoices",
  id: 1,
  number_of_using: 12,
  img_training: 40,
  public_state: 1,
  number_of_req: 0,
  number_of_retraining: 40,
  },
 
];

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

const ModelsComponent = ({ models }: { models: Array<Models> | undefined }) => {
  const history = useHistory();
  

  const colores=["#b7dfec" , "rgb(98 177 203)" , "rgb(255 236 192)" ,"c4f6ab", "f3c8ef" , "02b902" ,]
 

  return (
    <div className={styles.container_models}>
      {models &&
        models.map((i, index) => (
          <Zoom
            in={true}
            style={{
              transitionDuration: "900ms",
              transitionDelay: `${200 * index}ms`,
            }}
          >
           
            <div className={styles.flip_card}>
           
              <div className={styles.flip_card_inner}>
                <div className={styles.thefront}>
                  <div className={styles.clip}></div>
                  <div className={styles.clip1}></div>
                  <div className={styles.clip2}></div>
                  <div className={styles.clip3}></div>
                  <div className={styles.clip4}></div>
                  <div className={styles.clip5}></div>
                  <div className={styles.clip6}></div>

                  <div className={styles.frontContainer}>
                    <div className={styles.modelNameAndReq}>
                      <div className={styles.modelName}>
                      

                        <h1><IoEllipse color={`${colores[i.state_id]}`} size="25px"></IoEllipse>
                        &nbsp; &nbsp; {i.name}</h1>
                        {/* <svg viewBox="0 0 56 18">
                        <text x="0" y="15">{i.name}</text>
                      </svg> */}
                        {/* 
                      <svg
                        width="100%"
                        height="100%"
                        // viewBox="0 10 100% 100%"
                        // preserveAspectRatio="xMinYMin meet"
                        // style={{ backgroundColor: "green" }}
                      >
                        <foreignObject
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <div  style={{"backgroundColor":"lightgreen"}}>
                          <h1>heading</h1>
                          <p className={styles.pNameStyle}>{i.name}</p>
                          </div>
                        </foreignObject>
                      </svg> */}
                      </div>
                      {/* <div className={styles.circleContainer}>
                        
                        <div className={styles.card_number_req}>
                          {i.number_of_req}
                        </div>
                      </div> */}

                      <div className={styles.circleContainer}>
                        {i.number_of_req !==0 ?
                        <div className={styles.card_number_req}>
                          {i.number_of_req}
                        </div> : <div></div> }
                      </div>
                    </div>

                    <div className={styles.modelType}>Invoice</div>

                    <div className={styles.modelDescription}>
                      {/* <svg width="100%" height="100%" viewBox="0 0 500 75" preserveAspectRatio="xMinYMid meet" style={{"backgroundColor":"green"}}
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <text x="0" y="0" font-size="40" fill="black" word-break="break-all" word-wrap=" break-word" style={{"backgroundColor":"yellow"}}>
                            {i.description}hhhhhhhhhh
                          </text>
                      </svg> */}

                      <svg
                        width="100%"
                        height="100%"
                        viewBox="-10 10 600 240"
                        preserveAspectRatio="xMinYMin meet"
                      >
                        <foreignObject
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <div
                            style={{
                              // backgroundColor: "lightgreen",
                              width: "100%",
                            }}
                          >
                            {/* <h1>heading</h1> */}
                            <p className={styles.pDiscriptionStyle}>
                              {i.description}This model to extract information from invoices
                              {" "}
                            </p>
                          </div>
                        </foreignObject>
                      </svg>
                    </div>

                    <div className={styles.modelInformation}>
                      <div className={styles.stat}>
                        {/* <div className={styles.value}>{i.number_of_retraining}</div> */}
                        <div className={styles.type}>retraining times</div>
                      </div>

                      <div className={styles.stat}>
                        <div className={styles.value}>{i.number_of_using}</div>
                        <div className={styles.type}>using time</div>
                      </div>

                      <div className={styles.stat}>
                        {/* <div className={styles.value}>{i.photos_training}</div> */}
                        <div className={styles.type}>photos training</div>
                      </div>
                    </div>
                    <div className={styles.modelDate}>{(i.created_date).split("T")[0]}  </div>
                  </div>

                  {/* 
                  <div className={styles.card_text}>
                    <div className={styles.card_title}>
                      <div className={styles.card_text_name}>
                        <h2>{i.name}</h2>
                      </div>
                      <div className={styles.card_number_req}>
                        {i.number_of_req}
                      </div>
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

                  </div> */}
                </div>
                <div className={styles.theback}>
                  <div className={styles.backImage}>
                    <img
                      src={`https://res.cloudinary.com/hi5/image/upload/models/${i.id}/image`}
                      alt=""
                      style={{
                        width: "100%",
                        opacity: "0.7",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        alignContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <div >
                    {i.state_id === 5 || i.name ==='ahmad' ?
                    <div className={styles.backButtoContainer}>
                   <div
                      className={styles.backButton}
                      onClick={() =>
                        history.push("/dashboard/model/modelpage/" + i.id)
                      }
                    >
                      use
                    </div>
                    <div
                      className={styles.backButton}
                      onClick={() =>
                        history.push(
                          "/dashboard/model/modelpage/" + i.id + "/description"
                        )
                      }
                    >
                      description
                    </div>
                    <div
                      className={styles.backButton}
                      onClick={() =>
                        history.push(
                          "/dashboard/model/modelpage/" + i.id + "/controller"
                        )
                      }
                    >
                      <div>control</div>
                      
                    </div>
                    </div>
                    :
                    <div
                      className={styles.backButtoContainer}
                    >
                      <div></div>
                      <div className={styles.backButton}  onClick={() =>{
                        history.push(
                          "/dashboard/create/" + i.id 
                        )
                        if(i.state_id===0){
                        window.localStorage.setItem("step", "0")
                      }else if(i.state_id===1){
                          window.localStorage.setItem("step", "1")
                        }else if(i.state_id===2){
                        window.localStorage.setItem("step", "3")
                        
                        }else if(i.state_id===3){
                        window.localStorage.setItem("step", "4")
                        }
                      }
                      }> Continue Creating</div>
                      
                    </div>
                    }


                    {/* <div className={styles.backButton} onClick={() =>
                      history.push("/dashboard/model/modelpage/" + i.id)
                    }
                    >Use Model</div>
                    <div className={styles.backButton} onClick={() =>
                      history.push("/dashboard/model/modelpage/" + i.id + "/description")
                    }>See Description</div>
                    <div className={styles.backButton} onClick={() =>
                      history.push("/dashboard/model/modelpage/" + i.id + "/controller")
                    }>Control Model</div> */}
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
    </div>
  );
};

export default ModelsComponent;
