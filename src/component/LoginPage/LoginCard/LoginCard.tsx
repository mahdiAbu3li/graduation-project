import React from "react";
import styles from "./LoginCardStyle.module.css";

import { Formik } from "formik";
function LoginCard() {
  const initialValues = {
    email: "",
    password: "",
  };
  interface Values {
    email: string;
    password: string;
  }
  return (
    <>
      <div className={styles.container}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (values.email === "") {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              //   validateLogin(values.userName, values.password).then((isValid) => {
              //     if (isValid) {
              //       onLogin();
              //     } else {
              //     }
              //   });
            }, 2000);
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <form>
              <div style={{ position: "relative" }}>
                <div className={styles.user_box}>
                  <input type="text" name="" id="userName" required />
                  <label>Username</label>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className={styles.user_box}>
                  <input type="password" name="" id="password" required />
                  <label>Password</label>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginCard;
