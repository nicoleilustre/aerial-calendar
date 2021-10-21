import React from "react";
import { BackButton } from "../components/BackButton";

export const BookedClassesPage = ({ bookedClasses, classSchedule }: any) => {
  const listOfClasses = [
    ...classSchedule.monday,
    ...classSchedule.tuesday,
    ...classSchedule.wednesday,
    ...classSchedule.thursday,
    ...classSchedule.friday,
    ...classSchedule.saturday,
    ...classSchedule.sunday,
  ];

  return (
    <>
      <BackButton />
      <h1>You are booked in to:</h1>
      {Object.entries(bookedClasses).map((bookedClass) => (
        <React.Fragment key={bookedClass[0]}>
          <div>{bookedClass[0]}</div>
          {!bookedClass[1] && <div>No class booked</div>}
          {bookedClass[1] && (
            <div>
              {
                listOfClasses.find(
                  (individualClass) =>
                    individualClass.class_id === bookedClass[1]
                ).class_title
              }
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
