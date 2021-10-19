import React from 'react'
import { Formik } from 'formik'

export const BookingForm = () => {
  return (
    <Formik
    initialValues={{
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: ""
    }}
    onSubmit={(values : any) =>
    alert(values)}>
    </Formik>
  )
}