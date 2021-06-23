import React, { useState, useContext } from "react";
import styles from "./CreateModelStyles.module.css";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import model from "../../../assets/images/model.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { CheckboxWithLabel } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Swal from "sweetalert2";
import Zoom from "@material-ui/core/Zoom";
// const MyInput = ({ field, form, ...props }: any) => {
//   return (
//     <input {...field} {...props} type="file" style={{ display: "none" }} />
//   );
// };

interface Change {
  changeStep: (a: number, b: number) => void;
}
const options = ["Invoices", "License ", "ID Cards" , "Birth Certificate" , "Certificate"];
function CreateModel({ changeStep }: Change) {
  const [checked, setChecked] = React.useState(false);
  const [image, setImage] = useState<File>();
  const [urlImage, setUrlImage] = useState("");
  // const [modelID] = useState(1);
  const [selected, setSelected] = useState("invoices");
  const values = useContext(AuthContext);
  const initialValues = {
    name: "",
    short_description: "",
    long_description: "",
    image: "",
    public: false,
    sel: "",
  };
  interface Values {
    name: string;
    short_description: string;
    long_description: string;
    image: string;
    public: boolean;
    sel: string;
  }
  const createRequest = async (
    name: string,
    short_description: string,
    description: string,
    isPublic: boolean
  ) => {
    // const data = {
    //   name: name,
    //   short_description: short_description,
    //   description: description,
    //   image: image,
    // };
    const data = new FormData();
    console.log("is Public", typeof isPublic);
    if (isPublic === true) {
      data.append("public_state", "1");
      console.log("صبحي اخوه لمعروف");
    } else data.append("public_state", "0");
    data.append("name", name);
    data.append("short_description", short_description);
    data.append("description", description);
    data.append("image", image ? image : "");
    data.append("owner_id", values.data.id.toString());
    data.append("type", selected);

    const url = "https://graduationprojectt.herokuapp.com/api/model";
    const response = await fetch(url, {
      method: "post",
      body: data,
      headers: {
        Authorization: "Bearer"  + values.data.token,
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    });
    console.log(response);
    if (response.status === 201) {
      const res = await response.json();
      console.log("معروووووف ابن الادعشري");

      changeStep(1, res.id);
      window.localStorage.setItem("modelId", res.id);
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.statusText,
        // footer: "<a href>Why do I have this issue?</a>",
      });
      return false;
    }
  };
  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
      const reader = new FileReader();

      reader.onload = (e) => {
        if (typeof e.target?.result === "string") setUrlImage(e.target?.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChosen = (value: string) => {
    setSelected(value);
  };
  console.log(checked, "mahdiimad");
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <h1>start by creating your model</h1>
      </div> */}
      <div className={styles.form_container}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (values.name === "") {
              errors.name = "Required";
            }
            if (!values.short_description) {
              errors.short_description = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            createRequest(
              values.name,
              values.short_description,
              values.long_description,
              values.public
            ).then((isCreated) => {
              if (!isCreated) {
                setChecked(!checked);
                setSubmitting(false);
              }
            });
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form
              style={{
                display: "flex",
                justifyContent: "space-around",
                // backgroundColor: "red",
                height: "100%",
                width: "100%",
              }}
            >
              <Field
                className={styles.inputField}
                component={TextField}
                type="text"
                name="name"
                label="Model Name"
                variant="outlined"
              />

              <Field
                className={styles.inputField}
                component={TextField}
                type="text"
                name="short_description"
                label="description"
                variant="outlined"
              />
              <Field
                className={styles.inputField}
                component={TextField}
                type="text"
                name="long_description"
                label="description"
                variant="outlined"
                multiline
                rows={4}
                rowsMax={4}
              />
              <Field
                variant="outlined"
                label="type"
                className={styles.inputField}
                component={TextField}
                id="s"
                name="sel"
                value={selected}
                select
                InputProps={{
                  onChange: (e: React.ChangeEvent<{ value: string }>) =>
                    handleChosen(e.target.value),
                }}
              >
                {options.map((item, index2) => (
                  <MenuItem key={index2} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Field>
              <div className={styles.publicContainer}>
                {/* <Field
                  className={styles.inputField} 
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="public"
                  Label={{ label: "public" }}
                  value="public"
                  variant="outlined"
                /> */}
                <label>
                  <Field
                    className={styles.checkbox}
                    type="checkbox"
                    name="public"
                  />
                  <p>public</p>
                </label>
                <p onClick={() => setChecked(!checked)}>
                  when your model is public any one can access and requests to
                  use it{" "}
                </p>
              </div>
              <input
                type="file"
                accept="images/*"
                style={{ display: "none" }}
                id="image"
                onChange={(e) => uploadImage(e)}
              />
              <label htmlFor="image" className={styles.uploadImage}>
                <pre>upload image to cover the model</pre>
              </label>

              <Button
                variant="outlined"
                className={styles.button}
                type="submit"
              >
                Create
              </Button>

              {isSubmitting && (
                <div className={styles.loading}>
                  {" "}
                  <CircularProgress />
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.card_container}>
        <Zoom
          in={true}
          style={{
            // transitionDelay: checked ? "5000ms" : "5000ms",
            transitionDuration: "900ms",
          }}
        >
          <div className={styles.card}>
            <img src={urlImage !== "" ? urlImage : model} alt="123" />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default CreateModel;