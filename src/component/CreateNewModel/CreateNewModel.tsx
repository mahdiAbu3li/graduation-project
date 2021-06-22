import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import styles from "./CreateNewModelStyles.module.css";
import UploadImages from "./UploadImages/UploadImages";
import { Stepper, Step } from "react-form-stepper";
import Labelling from "../CreateNewModel/Labelling/Labelling";
import CreateModel from "./CreateModel/CreateModel";
import CreateLabels from "./CreateLabels/CreateLabels";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import Training from "./Training/Training";

function CreateNewModel() {
  const history = useHistory();
  const localStep = window.localStorage.getItem("step");
  const [step, setStep] = useState(localStep ? parseInt(localStep) : 0);
  const mod = window.localStorage.getItem("modelId");
  const [modelId, setModelId] = useState(mod ? mod : 0);
  let { path } = useRouteMatch();
  const values = React.useContext(AuthContext);

  React.useEffect(() => {
    // const data = { state_id: step };
    const data = new FormData();
    data.append("state_id", step.toString());
    const url = "https://graduationprojectt.herokuapp.com/api/model/" + modelId;
    const savedStep = window.localStorage.getItem("state");

    if (savedStep !== null ? parseInt(savedStep) : -1 < step) {
      fetch(url, {
        method: "post",
        body: data,
        headers: {
          Authorization: `Bearer ` + values.data.token,
          // "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "sttt");
        });
    }
    if (step === 0) {
      history.push("/dashboard/create/create");
      window.localStorage.setItem("step", "0");
    } else if (step === 2) {
      history.push("/dashboard/create/upload/" + modelId);
      window.localStorage.setItem("step", "2");
    } else if (step === 1) {
      history.push("/dashboard/create/labels/" + modelId);
      window.localStorage.setItem("step", "1");
    } else if (step === 3) {
      history.push("/dashboard/create/labelling/" + modelId);
      window.localStorage.setItem("step", "3");
    } else if (step === 4) {
      history.push("/dashboard/create/training/" + modelId);
      window.localStorage.setItem("step", "4");
    }
  }, [step, history, modelId, values.data.token]);

  const changeStep = (step: number, modelId: number) => {
    setModelId(modelId);
    setStep(step);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>{/* <h2>Create New Model</h2> */}</div>
      <div className={styles.steps}>
        <Stepper
          activeStep={step}
          className={styles.stepper}
          stepClassName={styles.step}
          styleConfig={{
            activeBgColor: "#239c92",
            activeTextColor: "#fff",
            completedBgColor: "#085a53",
            completedTextColor: "#fff",
            inactiveBgColor: "#bfece8",
            inactiveTextColor: "#fff",
          }}
        >
          <Step label="create Model" onClick={() => setStep(0)} />
          <Step label="create labels" onClick={() => setStep(1)} />
          <Step label="upload images" onClick={() => setStep(2)} />
          <Step label="labelling" onClick={() => setStep(3)} />
          <Step label="training" onClick={() => setStep(4)} />
        </Stepper>
      </div>
      <div></div>
      <Switch>
        <Route exact path={[path, `${path}/create`]}>
          <CreateModel changeStep={changeStep} />
        </Route>
        <Route path={`${path}/upload/:modelId`}>
          <UploadImages />
        </Route>
        <Route path={`${path}/labels/:modelId`}>
          <CreateLabels changeStep={changeStep} />
        </Route>
        <Route path={`${path}/labelling/:modelId`}>
          <Labelling />
        </Route>
        <Route path={`${path}/training/:modelId`}>
          <Training />
        </Route>
      </Switch>
      {step !== 100 && (
        <div className={styles.footer}>
          {step > 0 && (
            <button onClick={() => setStep((step - 1) % 5)}>back</button>
          )}
          <button onClick={() => setStep((step + 1) % 5)}>Next</button>
        </div>
      )}
    </div>
  );
}

export default CreateNewModel;
