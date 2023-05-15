/**
 * @Author: root
 * @Date:   2023-05-13T16:31:39+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-15T01:44:08+05:30
 */



import { FormControlProps, InputProps } from "@chakra-ui/react";
import { FormikErrors, FormikTouched } from "formik";

export interface IFormInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?:
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[]
  | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  inputProps?: InputProps;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
}

export type ISelectOption = {
  label: string;
  value: any;
} | null;

export interface IRequisitionDetailsValues {
  requestTitle: string;
  //owner: string;
  //hiringManager: string;
  noOfOpenings: number;
  urgency: string;
  //employmentType: string;
  gender: string;
  //status: string;
}

export interface IJobDetailsValues {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IInterviewSettingsValues {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}


export interface IInterViewSettings {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

export interface IJobDetails {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IRequisitionDetails {
  requisitionTitle: string;
  noOfOpenings: number;
  urgency: string;
  gender: string;
}
