import React from "react";
import { IndividualClass } from "./IndividualClass";
import { ClassScheduleInterface } from "../utils/types";

export const ClassSchedule = ({ classSchedule }: ClassScheduleInterface) => {
  return (
    <div id="calendar-container">
      {Object.keys(classSchedule).map((day: string) => (
        <div key={day}>
          <h2 className="calendar-header">
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </h2>
          <IndividualClass dailyClasses={classSchedule[day]} />
        </div>
      ))}
    </div>
  );
};
