import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../components/TextField";

interface UserDetailsInterface {
  username: string;
  password: string;
}

export const Login = ({ setUsername }: any) => {
  const history = useHistory();
  function onSubmit(values: UserDetailsInterface) {
    setUsername(values.username);
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
      <Form>
        <TextField name="username" label="username" type="text" />
        <TextField name="password" label="password" type="text" />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
