import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

// interface DailyClassesInterface {
//   dailyClasses: {
//     class_title: string;
//     teacher: string;
//     class_description: string;
//   };
// }

export const IndividualClass = ({ dailyClasses, setClassDetails }: any) => {
  function onClick (individualClass: any) {
    setClassDetails(individualClass)
  }
  return (
    <>
    {dailyClasses.map((individualClass: any, i: any) => <Table.Row key={i}><Table.Cell key={i}><Link to={'/classDetails'} onClick={() => onClick(individualClass)}>{individualClass.class_title}</Link></Table.Cell></Table.Row>)}
    </>
  )
}