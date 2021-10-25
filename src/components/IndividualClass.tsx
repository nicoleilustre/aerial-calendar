import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { DailyClassesInterface, IndividualClassInterface } from "../utils/types";

export const IndividualClass = (props: any) => {
  return (
    <>
      {props.dailyClasses.map((individualClass: IndividualClassInterface) => (
        <Table.Row key={individualClass.class_id}>
          <Table.Cell>
            <Link to={"/home/classDetails/" + individualClass.class_id}>
              {individualClass.class_title}
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};
