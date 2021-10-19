import React from 'react'
import { Link } from 'react-router-dom'

export const BookedClassesPage = ({ bookedClasses }: any) => {
  console.log(bookedClasses)
  return (
    <>
    <button>
      <Link to={"/home"}>Back to calendar</Link>
    </button>
  </>
  )
}