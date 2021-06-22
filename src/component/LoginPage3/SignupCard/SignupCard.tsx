// import React, { useState, useContext } from "react";
import styles from "./SignupCardStyles.module.css";
import { Formik, Form, Field } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
function LoginCard({ handleFlip }: { handleFlip: () => void }) {
  const history = useHistory();

  const SignUp = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) => {
    const data = {
      name: name,
      password_confirmation: passwordConfirmation,
      email: email,
      password: password,
    };
    const response = await fetch(
      "https://graduationprojectt.herokuapp.com/api/register",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    alert(1);

    console.log(response, "1111111111111");
    if (response.status === 201) {
      return true;
    } else {
      // const result = await response.json();
      // console.log(result);
      // const data: Data = {
      //   id: result.user.id,
      //   name: result.user.name,
      //   token: result.token,
      return false;
    }
    // value.setData(data);
  };

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
  };
  interface Values {
    email: string;
    password: string;
    passwordConfirmation: string;
    name: string;
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Sign up to HI5</h2>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (values.email === "") {
              errors.email = "Required";
              // setIsActive(false);
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.passwordConfirmation) {
              errors.passwordConfirmation = "Required";
            }
            if (values.password !== values.passwordConfirmation) {
              errors.passwordConfirmation = "deferent";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            // setTimeout(() => {
            SignUp(
              values.name,
              values.email,
              values.password,
              values.passwordConfirmation
            ).then((isValid) => {
              if (isValid) {
                // value.onLogin();
                // console.log(123);
                history.push("/");
                setSubmitting(false);
              } else {
                // setErrors({ email: "email or password is not valid" });
              }
            });
            // alert(123);
            //   validateLogin(values.userName, values.password).then((isValid) => {
            //     if (isValid) {
            //       onLogin();
            //     } else {
            //     }
            //   });
            // }, 2000);
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form className={styles.form}>
              {console.log(isSubmitting)}
              <Field
                // style={{ margin: "20px" }}
                component={TextField}
                type="text"
                name="name"
                label="User Name"
                // variant="outlined"
              />
              <Field
                // style={{ margin: "20px" }}
                component={TextField}
                type="text"
                name="email"
                label="Email"
                // variant="outlined"
              />

              <Field
                component={TextField}
                type="password"
                name="password"
                label="Password"
                // variant="outlined"
              />
              <Field
                // style={{ margin: "20px" }}
                component={TextField}
                type="password"
                name="passwordConfirmation"
                label="Confirm Password"
                // variant="outlined"
              />
              <div className={styles.buttonContainer}>
                <Button
                  // style={{ margin: "20px" }}
                  variant="outlined"
                  className={styles.button}
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>

              {isSubmitting && <CircularProgress />}
              <p className={styles.paragraph} onClick={() => handleFlip()}>
                or login
              </p>
            </Form>
          )}
        </Formik>

        {/* <FacebookLogin
          appId="" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps: any) => (
            <button onClick={renderProps.onClick} className={styles.facebook}>
              <GrFacebook className={styles.facebookIcon} /> login with facebook
            </button>
          )}
        />

        <GoogleLogin
          clientId="" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={(renderProps: any) => (
            <button onClick={renderProps.onClick} className={styles.google}>
              <GrGoogle className={styles.googleIcon} />
              login with google
            </button>
          )}
        /> */}
      </div>
    </>
  );
}

export default LoginCard;
