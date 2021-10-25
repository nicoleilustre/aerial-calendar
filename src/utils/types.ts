export interface UserDetailsInterface {
  username: string;
  password: string;
}

export interface UsernamePropInterface {
  username: string;
}

// export interface PropsSetUsernameInterface {
//   setUsername: SetUsernameInterface;
// }

export interface SetUsernameInterface {
  (value: UserDetailsInterface): UserDetailsInterface;
}

export interface BookedClassesInterface {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

// export interface PropsSetBookedClassesInterface {
//   setBookedClasses: SetBookedClassesInterface;
// }

export interface SetBookedClassesInterface {
  (values: BookedClassesInterface): BookedClassesInterface;
}

export interface IndividualClassInterface {
  class_id: string;
  class_title: string;
  teacher: string;
  class_description: string;
}

export interface DailyClassesInterface {
  dailyClasses: Array<IndividualClassInterface>;
}

export interface ApiInterface {
  data: any;
  isLoading: boolean;
  error: any;
}

export interface ClassIdInterface {
  class_id: string;
}

export interface ClassScheduleInterface {
  monday: Array<IndividualClassInterface>;
  tuesday: Array<IndividualClassInterface>;
  wednesday: Array<IndividualClassInterface>;
  thursday: Array<IndividualClassInterface>;
  friday: Array<IndividualClassInterface>;
  saturday: Array<IndividualClassInterface>;
  sunday: Array<IndividualClassInterface>;
}

export interface InputInterface {
  name: string;
  label: string;
  type: string;
}

export interface SelectFieldPropsInterface {
  dailyClasses: Array<IndividualClassInterface>;
  id: string;
  key: string;
  label: string;
  name: string;
}
