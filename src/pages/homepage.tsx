import React from "react";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";

export const Homepage = ({ setBookedClasses, setClassDetails }: any) => {
  const { data, isLoading }: { data: any; isLoading: any } = useClasses();

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && data && (
        <>
          <BookingForm class_schedule={data} setBookedClasses={setBookedClasses}/>
          <ClassSchedule class_schedule={data} setClassDetails={setClassDetails} />
        </>
      )}
    </>
  );
};
