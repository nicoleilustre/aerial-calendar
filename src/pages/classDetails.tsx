import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";

interface ClassIdInterface {
  class_id: string;
}

export const ClassDetails = ({ classSchedule }: any) => {
  const { class_id }: ClassIdInterface = useParams();

  const listOfClasses = [
    ...classSchedule.monday,
    ...classSchedule.tuesday,
    ...classSchedule.wednesday,
    ...classSchedule.thursday,
    ...classSchedule.friday,
    ...classSchedule.saturday,
    ...classSchedule.sunday,
  ];
  const classDetails = listOfClasses.find(
    (individualClass) => individualClass.class_id === class_id
  );
  return (
    <>
      <BackButton />
      <div>{classDetails.class_title}</div>
      <div>{classDetails.class_description}</div>
      <div>{classDetails.teacher}</div>
    </>
  );
};
