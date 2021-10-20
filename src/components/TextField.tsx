import React from "react";
import { ErrorMessage, useField } from "formik";

interface InputInterface {
  name: string;
  label: string;
  type: string;
}

export const TextField = (props: InputInterface) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} />
      <ErrorMessage render={(msg) => <div>{msg}</div>} name={field.name} />
    </div>
  );
};
