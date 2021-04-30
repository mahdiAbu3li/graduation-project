import React, { useState, useContext } from "react";
import styles from "./CreateModelStyles.module.css";
import { Formik, Form, Field, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import mahdi from "../../../assets/images/login.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GrWindows } from "react-icons/gr";

// const MyInput = ({ field, form, ...props }: any) => {
//   return (
//     <input {...field} {...props} type="file" style={{ display: "none" }} />
//   );
// };

interface Change {
  changeStep: (a: number, b: number) => void;
}
function CreateModel({ changeStep }: Change) {
  const [image, setImage] = useState<File>();
  const [urlImage, setUrlImage] = useState("");
  const [modelID, setModelID] = useState(1);
  const values = useContext(AuthContext);
  const initialValues = {
    name: "",
    short_description: "",
    long_description: "",
    image: "",
  };
  interface Values {
    name: string;
    short_description: string;
    long_description: string;
    image: string;
  }
  const createRequest = async (
    name: string,
    short_description: string,
    description: string
  ) => {
    // const data = {
    //   name: name,
    //   short_description: short_description,
    //   description: description,
    //   image: image,
    // };
    const data = new FormData();
    console.log(image);
    data.append("name", name);
    data.append("short_description", short_description);
    data.append("description", description);
    data.append("image", image ? image : "");
    data.append("owner_id", values.data.id.toString());

    const url = "https://graduationprojectt.herokuapp.com/api/model";
    const response = await fetch(url, {
      method: "post",
      body: data,
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    });
    console.log(response);
    if (response.status === 201) {
      const res = await response.json();

      changeStep(1, res.id);
      window.localStorage.setItem("modelId", res.id);
      return true;
    } else return false;
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
  console.log(modelID, "mahdiimad");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>start by creating your model</h1>
      </div>
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
              values.long_description
            );
            setSubmitting(false);
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

              {isSubmitting && <CircularProgress />}
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <img src={urlImage !== "" ? urlImage : mahdi} alt="123" />
        </div>
      </div>
    </div>
  );
}

export default CreateModel;
