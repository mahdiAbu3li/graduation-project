import React, { useContext } from "react";
import styles from "./LoginCardStyle.module.css";
import { Formik, Form, Field } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
function LoginCard({ handleFlip }: { handleFlip: () => void }) {
  interface Data {
    id: number;
    token: string;
    name: string;
    email: string;
  }

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
              // setIsActive(false);
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            validateLogin(values.email, values.password).then((isValid) => {
              if (isValid) {
                value.onLogin();
                console.log(123);
              } else {
                setSubmitting(false);
                setErrors({ email: "email or password is not valid" });
              }
            });
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form className={styles.form}>
              {console.log(isSubmitting)}
              <Field
                // style={{ margin: "20px" }}
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
              <div className={styles.buttonContainer}>
                <Button
                  variant="outlined"
                  className={styles.button}
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <p className={styles.paragraph} onClick={() => handleFlip()}>
                sign up
              </p>
              {isSubmitting && <CircularProgress />}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginCard;
