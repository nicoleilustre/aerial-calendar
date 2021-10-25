import React from "react";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";
import { ApiInterface, PropsSetBookedClassesInterface } from '../utils/types'

export const Homepage = ( props : PropsSetBookedClassesInterface) => {
  const {
    data,
    isLoading,
    error,
  }:  ApiInterface = useClasses();

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {!isLoading && data && (
        <>
          <BookingForm
            classSchedule={data}
            setBookedClasses={props.setBookedClasses}
          />
          <ClassSchedule classSchedule={data} />
        </>
      )}
    </>
  );
};
