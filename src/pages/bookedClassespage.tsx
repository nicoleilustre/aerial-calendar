import React from "react";
import { listOfClasses } from "../utils/listOfClasses";
import { useClasses } from "../components/api/useClasses";
import { Loading } from "../components/Loading";
import { ApiInterface, BookedClassesInterface } from "../utils/types";

export const BookedClassesPage = ({ bookedClasses }: {bookedClasses: BookedClassesInterface }) => {
  const { data, isLoading, error }: ApiInterface = useClasses();
  const classes = listOfClasses(data);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && error && <div>Error</div>}
      {!isLoading && data && (
        <>
          <h1>You are booked in to:</h1>
          <>
            {Object.keys(bookedClasses).map((day) => (
              <React.Fragment key={day}>
                <div>{day.charAt(0).toUpperCase() + day.slice(1)}</div>
                {!bookedClasses[day] && <div>No class booked</div>}
                {bookedClasses[day] && (
                  <div>
                    {
                      classes.find(
                        (individualClass) =>
                          individualClass.class_id === bookedClasses[day]
                      ).class_title
                    }
                  </div>
                )}
              </React.Fragment>
            ))}
          </>
        </>
      )}
    </>
  );
};
