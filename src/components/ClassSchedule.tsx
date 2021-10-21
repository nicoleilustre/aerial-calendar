import React from "react";
import { Table } from "semantic-ui-react";
import { IndividualClass } from "./IndividualClass";

export const ClassSchedule = ({ classSchedule }: any) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Object.keys(classSchedule).map((day: string) => (
            <Table.HeaderCell key={day}>{day.toUpperCase()}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {Object.entries(classSchedule).map((dailyClasses: any) => {
            console.log(dailyClasses)
            return (
            <Table.Cell key={dailyClasses[0]}>
              <IndividualClass dailyClasses={dailyClasses[1]} />
            </Table.Cell>
          )})}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
