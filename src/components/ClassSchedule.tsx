import React from "react";
import { Table } from "semantic-ui-react";
import { IndividualClass } from "./IndividualClass";
import { ClassScheduleInterface } from "../utils/types";

export const ClassSchedule = ({ classSchedule } : any) => {
  return (
    <Table id="calendar">
      <Table.Header>
        <Table.Row>
          {Object.keys(classSchedule).map((day: string) => (
            <Table.HeaderCell key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {Object.keys(classSchedule).map((day: string) => (
            <Table.Cell key={day}>
              <IndividualClass dailyClasses={classSchedule[day]} />
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
