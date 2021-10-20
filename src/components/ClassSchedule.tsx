import React from "react";
import { Table } from "semantic-ui-react";
import { IndividualClass } from "./IndividualClass";

export const ClassSchedule = ({ classSchedule, setClassDetails }: any) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Object.keys(classSchedule).map((day: string, i: any) => (
            <Table.HeaderCell key={i}>{day.toUpperCase()}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {Object.entries(classSchedule).map((dailyClasses, i) => (
            <Table.Cell key={i}>
              <IndividualClass
                dailyClasses={dailyClasses[1]}
                setClassDetails={setClassDetails}
              />
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
