import React from "react";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";

export const Homepage = () => {
  const { data, isLoading }: { data: any, isLoading: any} = useClasses();

  return (
    <>
      <BookingForm />
      {isLoading && <Loading />}
      {!isLoading && data &&
      <ClassSchedule class_schedule={data}/>}
    </>
  );
};
