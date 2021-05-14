import React, { useContext } from "react";
import styles from "./SettingsStyles.module.css";
import { Formik, Form, Field } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
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
    return false;
  }
};
const initialValues2 = {
  oldPassword: "",
  password: "",
  passwordConfirmation: "",
};
interface Values2 {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}
interface Values {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
}
const Settings = () => {
  const values1 = useContext(AuthContext);
  const initialValues = {
    email: values1.data.email,
    password: "",
    passwordConfirmation: "",
    name: values1.data.name,
  };
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
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
            if (!values.name) {
              errors.name = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            SignUp(
              values.name,
              values.email,
              values.password,
              values.passwordConfirmation
            ).then((isValid) => {
              if (isValid) {
                //   history.push("/");
                setSubmitting(false);
              } else {
                // setErrors({ email: "email or password is not valid" });
              }
            });
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form>
              {console.log(isSubmitting)}
              <div className={styles.profile}>
                <h3 className={styles.header}>Profile</h3>
                <Field
                  component={TextField}
                  type="text"
                  name="name"
                  label="User Name"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  type="text"
                  name="email"
                  label="Email"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                />
                <Button
                  variant="outlined"
                  className={styles.button}
                  type="submit"
                >
                  Save
                </Button>
                {isSubmitting && <CircularProgress />}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.passwordContainer}>
        <Formik
          initialValues={initialValues2}
          validate={(values) => {
            const errors: Partial<Values2> = {};

            if (!values.password) {
              errors.password = "Required";
            }

            if (!values.oldPassword) {
              errors.oldPassword = "Required";
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
            // SignUp(
            //   values.name,
            //   values.email,
            //   values.password,
            //   values.passwordConfirmation
            // ).then((isValid) => {
            //   if (isValid) {
            //     //   history.push("/");
            //     setSubmitting(false);
            //   } else {
            //     // setErrors({ email: "email or password is not valid" });
            //   }
            // });
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Form>
              {console.log(isSubmitting)}
              <div className={styles.password}>
                <h3 className={styles.header}>Password</h3>
                <Field
                  component={TextField}
                  type="password"
                  name="oldPassword"
                  label="Old Password"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  type="password"
                  name="passwordConfirmation"
                  label="Confirm Password"
                  variant="outlined"
                />
                <Button
                  variant="outlined"
                  className={styles.button}
                  type="submit"
                >
                  Reset password
                </Button>
              </div>

              {isSubmitting && <CircularProgress />}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings;
