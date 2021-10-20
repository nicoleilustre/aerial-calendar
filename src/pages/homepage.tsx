import React from "react";
import { BookingForm } from "../components/BookingForm";
import { ClassSchedule } from "../components/ClassSchedule";
import { Header } from "../components/Header";

export const Homepage = ({
  setBookedClasses,
  setClassDetails,
  username,
  data,
}: any) => {
  return (
    <>
      <Header username={username} />
      <BookingForm classSchedule={data} setBookedClasses={setBookedClasses} />
      <ClassSchedule classSchedule={data} setClassDetails={setClassDetails} />
    </>
  );
};
