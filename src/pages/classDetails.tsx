import React from "react";
import { useParams } from "react-router-dom";
import { useClasses } from "../components/api/useClasses";
import { listOfClasses } from "../utils/listOfClasses";
import { Loading } from "../components/Loading";
import { ClassIdInterface, ApiInterface } from "../utils/types";

export const ClassDetails = () => {
  const { data, isLoading, error }: ApiInterface = useClasses();
  const { class_id }: ClassIdInterface = useParams();
  const classes = listOfClasses(data);

  const classDetails = classes.find(
    (individualClass) => individualClass.class_id === class_id
  );
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && error && <div>Error</div>}
      {!isLoading && data && (
        <>
          <div>{classDetails.class_title}</div>
          <div>{classDetails.class_description}</div>
          <div>{classDetails.teacher}</div>
        </>
      )}
    </>
  );
};
