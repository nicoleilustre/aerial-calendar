import React from "react";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";
import { Header } from "../components/Header";

export const Homepage = ({
  setBookedClasses,
  username,
  classSchedule,
}: any) => {
  return (
    <>
      <Header username={username} />
      <BookingForm
        classSchedule={classSchedule}
        setBookedClasses={setBookedClasses}
      />
      <ClassSchedule classSchedule={classSchedule} />
    </>
  );
};
