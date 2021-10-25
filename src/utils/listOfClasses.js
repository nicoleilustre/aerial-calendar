export function listOfClasses(classSchedule) {
  return [
    ...classSchedule.monday,
    ...classSchedule.tuesday,
    ...classSchedule.wednesday,
    ...classSchedule.thursday,
    ...classSchedule.friday,
    ...classSchedule.saturday,
    ...classSchedule.sunday,
  ];
}
