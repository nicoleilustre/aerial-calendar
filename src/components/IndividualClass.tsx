import React from "react";
import {
  DailyClassesInterface,
  IndividualClassInterface,
} from "../utils/types";

export const IndividualClass = (props: any) => {
  return (
    <>
      {props.dailyClasses.map((individualClass: IndividualClassInterface) => (
        <div className="classlist" key={individualClass.class_id}>
          <a href={"/home/classDetails/" + individualClass.class_id}>
            {individualClass.class_title}
          </a>
        </div>
      ))}
    </>
  );
};
