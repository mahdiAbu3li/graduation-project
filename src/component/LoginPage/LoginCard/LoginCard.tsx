import React from "react";
import styles from "./LoginCardStyle.module.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { Formik } from "formik";
import { GrFacebook } from "react-icons/gr";
import { GrGoogle } from "react-icons/gr";
function LoginCard() {
  const responseFacebook = (response: any) => {
    console.log(response);
  };
  const responseGoogle = (response: any) => {
    console.log(response);
  };
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
        <h2 className={styles.header}>Login to HI5</h2>
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
              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
        <p className={styles.paragraph}>or login with social platforms</p>
        <FacebookLogin
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
        />
      </div>
    </>
  );
}

export default LoginCard;
