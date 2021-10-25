import React from "react";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";
import { ApiInterface } from '../utils/types'

export const Homepage = ( props : any) => {
  const {
    data,
    isLoading,
    error,
  }:  ApiInterface = useClasses();
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && error && <div>Error</div>}
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
