import React from 'react'
import { Table } from 'semantic-ui-react'

export const IndividualClass = (props: any) => {
  console.log(props)
  return (
    <>
    {props.dailyClasses.map((aClass: any, i: any) => <Table.Row><Table.Cell key={i}>{aClass.class_title}</Table.Cell></Table.Row>)}
    </>
  )
}