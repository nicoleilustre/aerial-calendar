import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { SelectField } from "./SelectField";

interface BookedClassesInterface {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export const BookingForm = ({ classSchedule, setBookedClasses }: any) => {
  const history = useHistory();
  function onSubmit(values: BookedClassesInterface) {
    setBookedClasses(values);
    history.push("/bookedClasses");
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
      <Form>
        {Object.entries(classSchedule).map((dailyClasses, i) => (
          <SelectField
            key={i}
            name={dailyClasses[0]}
            label={dailyClasses[0]}
            dailyClasses={dailyClasses[1]}
          />
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
