import React from "react";
import { Table } from "semantic-ui-react";
import { IndividualClass } from "./IndividualClass";

export const ClassSchedule = (props: any) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Object.keys(props.class_schedule).map((day: string, i: any) => (
            <Table.HeaderCell key={i}>{day}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Row>
        {Object.entries(props.class_schedule).map((dailyClasses, i) => (
          <Table.Cell key={i}>
            <IndividualClass dailyClasses={dailyClasses[1]} />
          </Table.Cell>
        ))}
      </Table.Row>
    </Table>
  );
};
