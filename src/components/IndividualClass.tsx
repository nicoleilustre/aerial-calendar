import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { IndividualClassInterface } from "./SelectField";

export const IndividualClass = ({ dailyClasses, setClassDetails }: any) => {
  function onClick(individualClass: IndividualClassInterface) {
    setClassDetails(individualClass);
  }
  return (
    <>
      {dailyClasses.map(
        (individualClass: IndividualClassInterface, i: number) => (
          <Table.Row key={i}>
            <Table.Cell key={i}>
              <Link
                to={"/classDetails"}
                onClick={() => onClick(individualClass)}
              >
                {individualClass.class_title}
              </Link>
            </Table.Cell>
          </Table.Row>
        )
      )}
    </>
  );
};
