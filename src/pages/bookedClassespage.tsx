import React from "react";
import { BackButton } from "../components/BackButton";

// interface BookedClassInterface {
// [index: number]: ArrayInterface
// }

// interface ArrayInterface {
//   [index: number]: string
// }

export const BookedClassesPage = ({ bookedClasses, data }: any) => {
  const listOfClasses = [
    ...data.monday,
    ...data.tuesday,
    ...data.wednesday,
    ...data.thursday,
    ...data.friday,
    ...data.saturday,
    ...data.sunday,
  ];

  return (
    <>
      <BackButton />
      <h1>You are booked in to:</h1>
      {Object.entries(bookedClasses).map((bookedClass: any) => (
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
