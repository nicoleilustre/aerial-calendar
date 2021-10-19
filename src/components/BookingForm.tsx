import React from 'react'
import { Formik, Form } from 'formik'
import { SelectField } from './SelectField'

export const BookingForm = ({ class_schedule, setBookedClasses }: any) => {
  function onSubmit (values: any) {
    setBookedClasses(values)
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
      sunday: ""
    }}
    onSubmit={onSubmit}>
      <Form>
        {Object.entries(class_schedule).map((dailyClasses, i) => (
           <SelectField key={i} name={dailyClasses[0]} label={dailyClasses[0]} dailyClasses={dailyClasses[1]}/>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}