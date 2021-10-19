import React from "react";
import { Link } from "react-router-dom";

export const ClassDetails = ({ classDetails }: any) => {
  return (
    <>
      <button>
        <Link to={"/home"}>Back to calendar</Link>
      </button>
      <div>{classDetails.class_title}</div>
      <div>{classDetails.class_description}</div>
      <div>{classDetails.teacher}</div>
    </>
  );
};
