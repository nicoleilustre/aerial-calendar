import React from "react";
import { ErrorMessage, useField } from "formik";

export const SelectField = (props: any) => {
  const [field] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <select {...field}>
        <option defaultValue="">
          Please choose a class.
        </option>
       {props.dailyClasses.map((aClass:any , i: number) =>
       <option key={i} value={aClass.class_title}>{aClass.class_title}</option>)}
      </select>
    </div>
  );
};
