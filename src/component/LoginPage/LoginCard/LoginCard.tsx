import React, { useContext } from "react";
import styles from "./LoginCardStyle.module.css";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import GoogleLogin from "react-google-login";
import { Formik, Form, Field } from "formik";
// import { GrFacebook } from "react-icons/gr";
// import { GrGoogle } from "react-icons/gr";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
// import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
function LoginCard() {
  interface Data {
    id: number;
    token: string;
    name: string;
    email: string;
  }
  // const history = useHistory();
  const value = useContext(AuthContext);

  const validateLogin = async (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    };

    const response = await fetch(
      "https://graduationprojectt.herokuapp.com/api/login",
      {
        method: "post",
        body: JSON.stringify(data),

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 401) {
      // console.log(1231231321);
      return false;
    } else {
      const result = await response.json();
      // console.log(result);
      const data: Data = {
        id: result.user.id,
        name: result.user.name,
        token: result.token,
        email: result.user.email,
      };
      value.setData(data);
      return true;
    }
  };

  // const [isActive, setIsActive] = useState(false);
  // const responseFacebook = (response: any) => {
  //   console.log(response);
  // };
  // const responseGoogle = (response: any) => {
  //   console.log(response);
  // };
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
        {/* <h2 className={styles.header}>Login to HI5</h2/> */}
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
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            // setTimeout(() => {
            validateLogin(values.email, values.password).then((isValid) => {
              if (isValid) {
                value.onLogin();
                console.log(123);
              } else {
                setSubmitting(false);
                setErrors({ email: "email or password is not valid" });
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
            // <Form>
            //   <div style={{ position: "relative" }}>
            //     <div
            //       className={styles.user_box}
            //       onClick={() => setIsActive(true)}
            //     >
            //       <Field type="email" name="email" id="email" required />
            //       <label className={isActive ? styles.activeLabel : ""}>
            //         Email
            //       </label>
            //     </div>
            //   </div>

            //   <div style={{ position: "relative" }}>
            //     <div
            //       className={styles.user_box}
            //       onClick={() => setIsActive(true)}
            //     >
            //       <Field
            //         type="password"
            //         name="password"
            //         id="password"
            //         required
            //       />
            //       <label className={isActive ? styles.activeLabel : ""}>
            //         Password
            //       </label>
            //     </div>
            //   </div>
            //   <button type="submit">Login</button>
            // </Form>
            <Form>
              {console.log(isSubmitting)}
              <Field
                style={{ margin: "20px" }}
                component={TextField}
                type="text"
                name="email"
                label="User Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <Field
                component={TextField}
                type="password"
                name="password"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="outlined"
                className={styles.button}
                type="submit"
              >
                Login
              </Button>

              {isSubmitting && <CircularProgress />}
            </Form>
          )}
        </Formik>
        <p className={styles.paragraph}>or login with social platforms</p>
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
