import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import styles from "./CreateNewModelStyles.module.css";
import UploadImages from "./UploadImages/UploadImages";
import { Stepper, Step } from "react-form-stepper";
import Labelling from "../CreateNewModel/Labelling/Labelling";
function CreateNewModel() {
  const history = useHistory();
  const localStep = window.localStorage.getItem("step");
  const [step, setStep] = useState(localStep ? parseInt(localStep) : 0);
  let { path, url } = useRouteMatch();
  React.useEffect(() => {
    if (step === 0) {
      history.push("/dashboard/create/upload");
      window.localStorage.setItem("step", "0");
    } else if (step === 1) {
      history.push("/dashboard/create/verify");
      window.localStorage.setItem("step", "1");
    } else if (step === 2) {
      history.push("/dashboard/create/labels");
      window.localStorage.setItem("step", "2");
    }
  }, [step, history]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>{/* <h2>Create New Model</h2> */}</div>
      <div className={styles.steps}>
        <Stepper
          activeStep={step}
          className={styles.stepper}
          stepClassName={styles.step}
        >
          <Step label="upload images" onClick={() => setStep(0)} />
          <Step label="verify images" onClick={() => setStep(1)} />
          <Step label="Children Step 3" onClick={() => setStep(2)} />
          <Step label="Children Step 4" onClick={() => setStep(3)} />
        </Stepper>
      </div>
      <div></div>
      <Switch>
        <Route exact path={[path, `${path}/upload`]}>
          <UploadImages />
        </Route>
        <Route path={`${path}/verify`}>var</Route>
        <Route path={`${path}/labels`}>
          <Labelling />
        </Route>
      </Switch>
      <div className={styles.footer}>
        {step > 0 && (
          <button onClick={() => setStep((step - 1) % 4)}>back</button>
        )}
        <button onClick={() => setStep((step + 1) % 4)}>Next</button>
      </div>
    </div>
  );
}

export default CreateNewModel;
