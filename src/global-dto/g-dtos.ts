import { ReactElement } from "react";

export interface AppProps {
  fetch_endpoint: () => void;
}
export enum ROLE {
  USER = "USER",
}
export interface CategoryType {
  cat_type: string;
  cat_icon: ReactElement<any, any>;
  cat_desc: ReactElement<any, any>;
  cat_color: string;
}

export interface NodeSpaceDescriptionType {
  media: string;
  heading: string;
  description: ReactElement<any, any> | undefined;
  p1: undefined | ReactElement<any, any>;
  p2: undefined | ReactElement<any, any>;
  p3: undefined | ReactElement<any, any>;
}

export interface DivCategoryFooterType {
  head: string;
  cat_1: string | undefined | ReactElement<any>;
  cat_2: string | undefined | ReactElement<any>;
  cat_3: string | undefined | ReactElement<any>;
  cat_4: string | undefined | ReactElement<any>;
}
export interface FormStateType {
  category: string;
  fullName: string;
  email: string;
  message: string;
  errors: Record<string | symbol, string>[];
}


export interface AuthStateType {
  fname: string;
  lname: string;
  email: string;
  password: string;
  username: string;
  role: ROLE;
  fullNameErrorMessage: any[];
  emailErrorMessage: any[];
  usernameErrorMessage: any[];
  passwordErrorMessage: any[];
  pageNumber: number;
  loginError: string;
  registerSuccessMessage: string;
  login_username: string;
  login_password: string;
  log_username_err: string;
  log_password_err: string;
}

export interface RegisterContextType {
  formData: any;
  changeHandler: any;
  changePage: any;
}
