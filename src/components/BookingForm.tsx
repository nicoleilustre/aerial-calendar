import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { SelectField } from "./SelectField";
import { BookedClassesInterface, ClassScheduleInterface } from "../utils/types";

export const BookingForm = ({
  classSchedule,
  setBookedClasses,
}: {
  classSchedule: ClassScheduleInterface;
  setBookedClasses: React.Dispatch<React.SetStateAction<{}>>
}) => {
  const history = useHistory();
  function onSubmit(values: BookedClassesInterface) {
    setBookedClasses(values);
    history.push("/home/bookedClasses");
  }

  return (
    <Formik
      initialValues={{
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
      }}
      onSubmit={onSubmit}
    >
      <Form id="booking-form">
        {Object.keys(classSchedule).map((day) => (
          <SelectField
            id={classSchedule[day].class_id}
            key={day}
            name={day}
            label={day}
            dailyClasses={classSchedule[day]}
          />
        ))}
        <button className="btn-center" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
