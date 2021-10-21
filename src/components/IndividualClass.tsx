import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { IndividualClassInterface } from "./SelectField";

export const IndividualClass = ({ dailyClasses }: any) => {
  return (
    <>
      {dailyClasses.map((individualClass: IndividualClassInterface) => (
        <Table.Row key={individualClass.class_id}>
          <Table.Cell>
            <Link to={"/classDetails/" + individualClass.class_id}>
              {individualClass.class_title}
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};
