import React, { useContext, useState } from "react";
import styles from "./CreateLabelsStyles.module.css";
import { Formik, Form, Field, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import { useParams } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";
import rightImage from "../../../assets/images/c2.svg";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";

interface Data {
  label: string;
  color: string;
  model_id: string;
}
interface Change {
  changeStep: (a: number, b: number) => void;
}
function CreateLabels({ changeStep }: Change) {
  const { modelId } = useParams<{ modelId: string }>();
  const [data, setData] = useState<Array<Data>>([
    { label: "", color: "#4363d8", model_id: modelId },
  ]);
  const values = useContext(AuthContext);
  // const [Color, setColor] = useState("#4363d8");
  const colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
    "#000000",
  ];
  const initialValues = {
    data: [{ label: "", color: "" }],
  };
  interface Values {
    label: string;
    color: string;
  }

  const handleLabel = (index: number, value: string) => {
    data[index].label = value;
  };
  const addLabel = () => {
    setData([...data, { label: "", color: "#4363d8", model_id: modelId }]);
  };
  const handleColor = (index: number, color: string) => {
    const newData = [...data];
    const item = { ...data[index] };
    item.color = color;
    newData[index] = item;
    setData(newData);
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    if (data.length !== 1) newData.splice(index, 1);
    setData(newData);
  };

  console.log(data);
  const formRef = React.useRef<
    FormikProps<{ data: { label: string; color: string }[] }>
  >(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };
  const createRequest = async () => {
    const url = "https://graduationprojectt.herokuapp.com/api/label";
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    });
    console.log(response);
    // if (response.status === 201) {
    //   const res = await response.json();

    //   changeStep(2, parseInt(modelId));

    //   return true;
    // } else return false;
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validate={(values) => {
            // const errors: Partial<Values> = {};
            // if (values.data === "") {
            //   errors.label = "Required";
            // }
            // if (!values.color) {
            //   errors.color = "Required";
            // }
            // return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            changeStep(3, parseInt(modelId));
            createRequest();
            setSubmitting(false);
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form>
              <div
                style={{
                  // display: "flex",
                  // justifyContent: "space-around",
                  // backgroundColor: "red",
                  // height: "100%",
                  width: "400px",
                  maxHeight: "400px",
                  overflow: "auto",
                  // backgroundColor: "red",
                }}
              >
                {data.map((label, index) => (
                  <div className={styles.row}>
                    <div className={styles.deleteAndSelect}>
                      <AiOutlineMinusCircle
                        className={styles.delete}
                        onClick={() => handleDelete(index)}
                      />
                      <Field
                        className={styles.inputField}
                        component={TextField}
                        type="text"
                        name={`label${index}`}
                        label={`label ${index + 1}`}
                        variant="outlined"
                        // onKeyUp={() => handleLabel(index)}
                        // ref={labelInput}
                        InputProps={{
                          onChange: (e: React.FormEvent<HTMLInputElement>) =>
                            handleLabel(index, e.currentTarget.value),
                        }}
                      />
                    </div>
                    <Field
                      component={TextField}
                      id="s"
                      name={`color${index}`}
                      value={data[index].color}
                      select
                      InputProps={{
                        onChange: (e: React.ChangeEvent<{ value: string }>) =>
                          handleColor(index, e.target.value),
                      }}
                    >
                      {colors.map((color, index2) => (
                        <MenuItem key={index2} value={color}>
                          <div
                            style={{
                              width: "50px",
                              height: "20px",
                              backgroundColor: color,
                            }}
                          ></div>
                        </MenuItem>
                      ))}
                    </Field>
                  </div>
                ))}
              </div>
              {isSubmitting && <CircularProgress />}
            </Form>
          )}
        </Formik>

        <Button
          variant="outlined"
          className={styles.button}
          onClick={() => addLabel()}
        >
          add another Label
        </Button>
      </div>
      <div className={styles.right}>
        <img src={rightImage} alt="a" />
      </div>
      <div className={styles.bottom}>
        <Button
          variant="outlined"
          className={styles.NextButton}
          onClick={() => handleSubmit()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default CreateLabels;
