import React, { useContext, useState } from "react";
import styles from "./CreateLabelsStyles.module.css";
import { Formik, Form, Field, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// import MenuItem from "@material-ui/core/MenuItem";
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
const color = ["blue", "green", "yellow"];
function CreateLabels({ changeStep }: Change) {
  const [isLoading, setIsLoading] = useState(true);
  const { modelId } = useParams<{ modelId: string }>();
  const values = useContext(AuthContext);
  const [data, setData] = useState<Array<Data>>([
    { label: "", color: "red", model_id: modelId },
  ]);
  React.useEffect(() => {
    const url =
      "https://graduationprojectt.herokuapp.com/api/label_of_model/" + modelId;
    // setIsLoading(false);
    fetch(url, {
      method: "get",
      // body: JSON.stringify(newData),
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((datar: string[]) => {
        console.log(datar.length, " this is data");
        if (datar.length !== 0) {
          setIsLoading(false);
          var newData = [] as Data[];
          datar.map((item, index) => {
            console.log(item, "item");
            newData.push({
              label: item,
              color: index === 0 ? "red" : color[index - 1],
              model_id: modelId,
            });
            return null;
          });
          console.log(newData, "newData");
          setData(newData);
        } else {
          setIsLoading(false);
        }
      });
  }, [modelId, values.data.token]);
  // const [Color, setColor] = useState("#4363d8");
  // const colors = [
  //   "#e6194b",
  //   "#3cb44b",
  //   "#ffe119",
  //   "#4363d8",
  //   "#f58231",
  //   "#911eb4",
  //   "#46f0f0",
  //   "#f032e6",
  //   "#bcf60c",
  //   "#fabebe",
  //   "#008080",
  //   "#e6beff",
  //   "#9a6324",
  //   "#fffac8",
  //   "#800000",
  //   "#aaffc3",
  //   "#808000",
  //   "#ffd8b1",
  //   "#000075",
  //   "#808080",
  //   "#ffffff",
  //   "#000000",
  // ];
  const initialValues = {
    data: [{ label: "", color: "" }],
  };
  // interface Values {
  //   label: string;
  //   color: string;
  // }

  const handleLabel = (index: number, value: string) => {
    data[index].label = value;
  };
  const addLabel = () => {
    setData([
      ...data,
      { label: "", color: color[data.length - 1], model_id: modelId },
    ]);
  };
  // const handleColor = (index: number, color: string) => {
  //   const newData = [...data];
  //   const item = { ...data[index] };
  //   item.color = color;
  //   newData[index] = item;
  //   setData(newData);
  // };

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
    // const response = await fetch(url, {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     Authorization: `Bearer ` + values.data.token,
    //     // "Content-Type": "application/json",
    //     // "Content-Type": "multipart/form-data",
    //     // Accept: "application/json",
    //     // 'Content-Type': 'application/json'
    //   },
    var requests = [] as any;
    // eslint-disable-next-line array-callback-return
    data.map((item, index) => {
      // console.log(color[index], "color");
      if (item.label !== "") {
        const newData = {
          label: item.label,
          model_id: item.model_id,
          color: color[index],
        };
        console.log(newData, "newww");
        requests.push(
          fetch(url, {
            method: "post",
            body: JSON.stringify(newData),
            headers: {
              Authorization: `Bearer ` + values.data.token,
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
              // Accept: "application/json",
              // 'Content-Type': 'application/json'
            },
          })
        );
      }
    });
    const response = await Promise.all(requests);
    console.log(response);
    // if (response.status === 201) {
    //   const res = await response.json();

    changeStep(2, parseInt(modelId));

    //   return true;
    // } else return false;
  };
  console.log(isLoading, "data");
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
            // changeStep(3, parseInt(modelId));
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
                {isLoading ? (
                  <div className={styles.loading}>
                    <CircularProgress />
                  </div>
                ) : (
                  data.map((label, index) => (
                    <div key={index} className={styles.row}>
                      <div className={styles.deleteAndSelect}>
                        <AiOutlineMinusCircle
                          className={styles.delete}
                          onClick={() => handleDelete(index)}
                        />

                        <Field
                          key={`${label.label}`}
                          className={styles.inputField}
                          // style={{ borderColor: `${label.color}` }}
                          style={{
                            root: {
                              "& label.Mui-focused": {
                                color: "green",
                              },
                            },
                          }}
                          defaultValue={`${label.label}`}
                          component={TextField}
                          type="text"
                          name={`label${index}`}
                          // name={`label12`}
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
                      {/* <Field
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
                    </Field> */}
                    </div>
                  ))
                )}
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
