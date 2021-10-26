import React from "react";
import { Table } from "semantic-ui-react";
import { listOfClasses } from "../utils/listOfClasses";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { ApiInterface, BookedClassesInterface } from "../utils/types";

export const BookedClassesPage = ({
  bookedClasses,
}: {
  bookedClasses: BookedClassesInterface;
}) => {
  const { data, isLoading, error }: ApiInterface = useClasses();
  const classes = listOfClasses(data);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && error && <div>Error</div>}
      {!isLoading && data && (
        <div id="bookedclasses-container">
          {Object.keys(bookedClasses).map((day) => (
            <div key={day}>
              <h1 className="calendar-header">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </h1>
              <>
                {!bookedClasses[day] && (
                  <div className="class-booked">No class booked</div>
                )}
                {bookedClasses[day] && (
                  <div className="class-booked">
                    {
                      classes.find(
                        (individualClass) =>
                          individualClass.class_id === bookedClasses[day]
                      ).class_title
                    }
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
