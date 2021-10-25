import React from "react";
import { useField } from "formik";
import { SelectFieldPropsInterface } from "../utils/types";

export const SelectField = (props: SelectFieldPropsInterface) => {
  const [field] = useField(props);
  return (
    <div className="select-field">
      <label htmlFor={props.id}>{props.label}</label>
      <select {...field}>
        <option value="">Please choose a class.</option>
        {props.dailyClasses.map((individualClass) => (
          <option
            key={individualClass.class_id}
            value={individualClass.class_id}
          >
            {individualClass.class_title}
          </option>
        ))}
      </select>
    </div>
  );
};
