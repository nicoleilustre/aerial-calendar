import React from "react";
import { ErrorMessage, useField } from "formik";
import { InputInterface } from "../utils/types";

export const TextField = (props: InputInterface) => {
  const [field] = useField(props);

  return (
    <div className="text-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input {...field} {...props} />
      <ErrorMessage
        render={(msg) => <div className="error">{msg}</div>}
        name={field.name}
      />
    </div>
  );
};
