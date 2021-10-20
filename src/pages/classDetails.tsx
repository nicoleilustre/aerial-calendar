import React from "react";
import { BackButton } from "../components/BackButton";

export const ClassDetails = ({ classDetails }: any) => {
  return (
    <>
      <BackButton />
      <div>{classDetails.class_title}</div>
      <div>{classDetails.class_description}</div>
      <div>{classDetails.teacher}</div>
    </>
  );
};
