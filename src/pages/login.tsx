import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../components/TextField";
import {
  UserDetailsInterface,
  PropsSetUsernameInterface,
} from "../utils/types";

export const Login = (props: PropsSetUsernameInterface) => {
  const history = useHistory();
  function onSubmit(values: UserDetailsInterface) {
    props.setUsername(values.username);
    history.push("/home");
  }
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Username required"),
        password: Yup.string().required("Password required"),
      })}
      onSubmit={onSubmit}
    >
      <Form id="login-form">
        <TextField id="username" name="username" label="username" type="text" />
        <TextField id="password" name="password" label="password" type="text" />
        <button className="btn-center" type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
