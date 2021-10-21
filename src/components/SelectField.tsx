import React from "react";
import { useField } from "formik";

export interface IndividualClassInterface {
  class_id: string;
  class_title: string;
  teacher: string;
  class_description: string;
}

export const SelectField = (props: any) => {
  const [field] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <select {...field}>
        <option defaultValue="">Please choose a class.</option>
        {props.dailyClasses.map(
          (individualClass: IndividualClassInterface) => (
            <option key={individualClass.class_id} value={individualClass.class_id}>
              {individualClass.class_title}
            </option>
          )
        )}
      </select>
    </div>
  );
};
