import React, { useState, useContext } from "react";
import styles from "./ModelSettingStyles.module.css";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../../../Contexts/AuthContext/AuthContext";
import mahdi from "../../../../assets/images/login.png";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { CheckboxWithLabel } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import { useParams } from "react-router-dom";

const options = ["invoices", "paper", "government paper"];
function ModelSetting() {
  const [image, setImage] = useState<File>();
  const { modelId } = useParams<{ modelId: string }>();
  const [urlImage, setUrlImage] = useState(
    "https://res.cloudinary.com/hi5/image/upload/v1619392994/models/" +
      modelId +
      "/image"
  );

  const [selected, setSelected] = useState("invoices");
  const values = useContext(AuthContext);
  interface Values {
    name: string;
    short_description: string;
    long_description: string;
    // image: string;
    public: boolean;
    // sel: string;
  }
  const [initialValues, setInitialValues] = useState<Values>({
    name: "",
    short_description: "",
    long_description: "",
    // image: "",
    public: false,
    // sel: "",
  });
  React.useEffect(() => {
    const url = "https://graduationprojectt.herokuapp.com/api/model/" + modelId;
    fetch(url, {
      method: "get",
      //   body: data,
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          const newData = {
            name: data.name,
            short_description: data.short_description,
            long_description: data.description,

            public: data.public_state === 1 ? true : false,
          };
          console.log(newData);
          setInitialValues(newData);
        }
      });
    const url1 =
      "https://graduationprojectt.herokuapp.com/api/model/image/" + modelId;
    fetch(url1, {
      method: "get",
      //   body: data,
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        // setUrlImage(data.url);
      });
  }, [modelId, values.data.token]);
  //   const initialValues1 = {
  //     name: "",
  //     short_description: "",
  //     long_description: "",

  //     public: "",
  //   };

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
    // console.log(image);
    if (isPublic === true) data.append("public_state", "1");
    else data.append("public_state", "0");
    data.append("name", name);
    data.append("short_description", short_description);
    data.append("description", description);
    data.append("image", image ? image : "");
    data.append("owner_id", values.data.id.toString());
    data.append("type", selected);

    const url = "https://graduationprojectt.herokuapp.com/api/model" + modelId;
    const response = await fetch(url, {
      method: "put",
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
    if (response.status === 200) {
      const res = await response.json();

      console.log(res);

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
  const handleChosen = (value: string) => {
    setSelected(value);
  };
  console.log(initialValues, "init");
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <h1>start by creating your model</h1>
      </div> */}
      <div className={styles.form_container}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (values.name === "") {
              errors.name = "Required";
            }
            if (!values.short_description) {
              errors.short_description = "Required";
            }
            // if (!values.sel) {
            //   errors.sel = "Required";
            // }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            console.log(values.public);
            // createRequest(
            //   values.name,
            //   values.short_description,
            //   values.long_description,
            //   values.public
            // );
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
                // defaultValue={initialValues.name}
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
                <p>
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
                Save
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

export default ModelSetting;
