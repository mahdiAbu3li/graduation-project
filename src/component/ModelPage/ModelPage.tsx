import React, { useState } from "react";
import styles from "./ModelPageStyles.module.css";
import { RiDeleteBin5Fill } from "react-icons/all";
import { HiOutlineDownload } from "react-icons/all";
import { AiOutlineCheckCircle } from "react-icons/all";
import { useHistory } from "react-router";
import UploadImages from "./UploadImages/UploadImages";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext"; //1
import { useParams } from "react-router-dom";
import {IoMdAddCircle} from "react-icons/all";
import { DeleteForeverSharp, SelectAll } from "@material-ui/icons";
import Swal from 'sweetalert2'
import { idText } from "typescript";

// import 'sweetalert2/src/sweetalert2.css'


const ModelPage = () => {
  const values = React.useContext(AuthContext); 
  const history = useHistory();
  const [isUpload, setIsUpload] = useState(false);
  const { modelId } = useParams<{ modelId: string }>();

  interface Data {
    accuracy: number;
    asset_id: string;
    bytes: number;
    created_at: "2021-05-08T18:50:04Z";
    derived: [];
    format: "jpg";
    height: number;
    id: number;
    labels: string;
    model_id: number;
    name: string;
    next_cursor: string;
    public_id: string;
    resource_type: string;
    secure_url: string;
    state_id: number;
    type: string;
    url: string;
    user_id: 1;
    verify_state: number;
    version: number;
    width: number;
  }

  const [files, setFiles] = useState<Array<Data>>([]);
  const [state, setState] = useState(0);

  React.useEffect(() => {
    const url = `https://graduationprojectt.herokuapp.com/api/images/predict/${modelId}?user_id=` + values.data.id;
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "nooooo");
        if (data.length > 0) {
          console.log(
            data,
            "len > 0"
          );
          setFiles(data);
        } else return false;
      });
  }, [values.data.id, values.data.token, modelId]);


  const copyArray =
    state === 1
      ? files?.filter((item) => item.verify_state === 1)
      : state === 2
      ? files?.filter((item) => item.verify_state === 0)
      : files;
      

  function downloadObjectAsJson( exportObj: any, exportName: any) {
    var payload = {
      image: exportObj,
      user_id: "1",
    };

    var data = new FormData();

    data.append("json", JSON.stringify(payload));

    const url =
      "https://graduationprojectt.herokuapp.com/api/predict/" + modelId; //req url
    fetch(url, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${values.data.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data in down"+data);

        var dataStr ="data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      });
  }


  const [selected, setSelected] = useState<Array<string>>([]);

  const addSelected = (name: string) => {
    // console.log("name ",name)
    console.log("selected in add ",selected)
    if (selected.includes(name)) {
      console.log("true " ,name )
      const arr = [...selected];
      arr.splice(arr.indexOf(name) , 1);
      setSelected(arr);
    } else {
      console.log("false " ,name )
      const arr = [...selected, name];
      setSelected(arr);
    }
  };

  function downloadeAll(){

    files.map((obj: Data) => {
      downloadObjectAsJson(
        obj.name,
        obj.name + ".json"
      );
    });
    
  }

  const downloadeselected = () => {
    
    // selected.length==0 ? downloadeAll() : console.log("no")
     
    var i;
    for (i = 0; i < selected.length; i++) {
      downloadObjectAsJson(
        selected[i],
        selected[i] + ".json"
      );
    }
  };

  function DeleteAll(){
    var data = new FormData();
    data.append("user_id", "1");
    files.map((obj: Data) => {
      data.append("publicIds[]", obj.name);
      return null;
    });

    const url =  "https://graduationprojectt.herokuapp.com/api/images/predictdel/" + modelId;
    fetch(url, {
      method: "post",
      body: data,
      headers: {
        Authorization: `Bearer ${values.data.token}`
      },
    });

  }

  function deleteFile(arr: Array<string>) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
       if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        {
          arr.length==0 ? DeleteAll() : console.log("no")
        }
        var data = new FormData();
        data.append("user_id", "1");
        arr.map((name: string) => {
          data.append("publicIds[]", name);
          return null;
        });
    
        console.log("hi", arr, "ok", data.entries());
        const url =  "https://graduationprojectt.herokuapp.com/api/images/predictdel/" + modelId;
        fetch(url, {
          method: "post",
          body: data,
          headers: {
            Authorization: `Bearer ${values.data.token}`
          },
        });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
    
  
  }

  function SelectAll(){

    var arr=Array<string> ();
    setSelected(arr);
    console.log(selected , "beforselected ")
    files.map((obj: Data) => {
      arr.push(obj.name);   
      console.log(obj.name , "name ")
    });
    setSelected(arr);
    console.log(files , "files ")
  }

  function CancleSelected(){
    var arr=Array<string> ();
    setSelected(arr);
  }

  console.log("out " , selected)
  return (
    <>
      <div className={styles.container_taps}>
        <div className={styles.left}>
          <div>
            <span className={styles.tap} onClick={() => setState(0)}>
              All Files
            </span>
          </div>

          <div>
            <span className={styles.tap} onClick={() => setState(1)}>
              Verify Files
            </span>
          </div>

          <div>
            <span className={styles.tap} onClick={() => setState(2)}>
              Not Verify Files
            </span>
          </div>

          <div>
            <span
              className={styles.tap}
              onClick={() =>
                history.push("/dashboard/model/modelpage/"+modelId+"/description")
              }
            >
              Model Description
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.tap} style={{width:"200px"}} onClick={() => downloadeselected()}>
            {
              selected.length>0 ? <div>Downlade Selected</div> : <div>Downlade All</div>
            }
           
          </span>
          <span className={styles.tap} style={{width:"150px"}}  onClick={() => deleteFile(selected)}>
          {
              selected.length>0 ? <div>Delete Selected</div> : <div>Delete All</div>
            }
           
          </span>
        </div>
      </div>


      <div className={styles.container}>
        {/* <div onClick={() => downloadObjectAsJson("../../assets/jsons/objk.json", 'myObj.json' ,  values.data.id , values.data.token)} > click </div> */}


        <div
          className={styles.uploadImagesContainer}
          style={isUpload ? { height: "600px" } : { height: "50px" }}
        >
          <div
            className={styles.uploadDiv}
            onClick={() => setIsUpload(!isUpload)}
          >
            <div className={styles.imgDiv} style={{ "paddingLeft":"25px"}}>
            <IoMdAddCircle size="40px" className={styles.icons} style={{"padding":"0px 0px"}}></IoMdAddCircle>


              {/* <img src={require("../../assets/images/img8.JPG").default} alt="" className={styles.img} /> */}
            </div>
            <div style={{padding :"5px 40px"}}>Upload Image</div>


          </div>
          <div className={styles.upload}>{isUpload && <UploadImages />}</div>
        </div>
        
        <div className={styles.selectsContainer}>
        <div className={styles.selects} onClick={() => {SelectAll() }}>Select All</div>
        {
        selected.length>0 ? <div className={styles.selects} onClick={() => {CancleSelected() }}>Cancle</div> : <div></div>
        }
        </div>

        

          

          <div className={styles.container_files}>
          <div className={styles.filesHeader}>
            <div></div>
            <div>File Name</div>
            <div>Verify State</div>
            <div>Created Date</div>


          </div>
            {copyArray?.map((file: any , index) => (
              <div className={styles.container_file}>
                <div className={styles.imageandcheck}>
                  <div className={styles.imgDiv}>
                    <input
                      key={index}
                      type="checkbox"
                      className={styles.checkBox}
                      onClick={() => addSelected(file.name)}
                      checked ={selected.includes(file.name)}
                      // style={selected.includes(file.name) ? {defaultChecked: true } : { defaultChecked: false }}
                    ></input>
                    <img src={file.url} alt="" className={styles.img} />
                  </div>
                </div>
                <div style={{ justifyContent: "center" }}  onClick={() =>
                      history.push("/dashboard/model/modelpage/"+modelId+"/verify")
                    }>{file.name}</div>
                <div>{file.verify_state}</div>
                <div>{file.created_at.split("T")[0]}</div>
      
                <div className={styles.buttones}>
                  <div
                    onClick={() => {
                      var arr = [];
                      arr.push(file.name);
                      deleteFile(arr);
                    }}
                  >
                    <RiDeleteBin5Fill size="22px" className={styles.icons} />
                  </div>
                  <div
                    className={styles.icons}
                    onClick={() =>
                      downloadObjectAsJson(
                        file.name,
                        file.name + ".json",
                       
                      )
                    }
                  >
                    <HiOutlineDownload size="22px" className={styles.icons} />
                  </div>
                  <div>
                    <AiOutlineCheckCircle
                      size="22px"
                      className={styles.icons}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default ModelPage;
