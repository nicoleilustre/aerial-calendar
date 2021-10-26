import { Router } from "react-router";
import React from "react";

export interface ApiInterface {
  data: any;
  isLoading: boolean;
  error: any;
}

export interface UserDetailsInterface {
  username: string;
  password: string;
}

export interface UsernamePropInterface {
  username: string;
}

export interface PropsSetUsernameInterface {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export interface PropsSetBookedClassesInterface {
  setBookedClasses: React.Dispatch<React.SetStateAction<{}>>;
}

export interface BookedClassesInterface {
  [key: string]: string
}

export interface ClassIdInterface {
  class_id: string;
}

export interface InputInterface {
  name: string;
  id: string;
  label: string;
  type: string;
}

export interface ClassScheduleInterface {
  [key: string]: IndividualClassInterface;
}

export interface IndividualClassInterface {
  [key: string]: string;
}

export interface DailyClassesArrayInterface {
  [index: number]: IndividualClassInterface;
}

export interface DailyClassesInterface {
  dailyClasses: IndividualClassInterface;
}

export interface SelectFieldPropsInterface {
  dailyClasses: IndividualClassInterface;
  id: string;
  key: string;
  label: string;
  name: string;
}
