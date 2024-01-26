import { ReactElement } from "react";

export interface AppProps {
  authState: GlobalAuthType;
  setLoadingState: Function;
  initiateLogout: Function;
  setSuccessMessage: Function;
}
export interface JwtProps {
  authState: GlobalAuthType;
  fetchAuthenticationData: () => void;
}
export interface RegisterProps {
  authState: GlobalAuthType;
  setLoadingState: Function;
}
export interface BlogFormProps {
  authState: GlobalAuthType;
  initiateLogout: Function;
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

export interface GlobalAuthType {
  jwt_error: string;
  authentication_state: boolean | string;
  loading_state: boolean;
  success_message: string;
  creator_info: Record<string | symbol, any>[];
}

export interface BlogFormType {
  blog_title: string;
  author_name: string;
  blog_category: string;
  keywords: string[];
  intro: string;
  body: string;
  outro: string;
  summary: string;
  featuredMedia: string;
  extraMedia: string[];
}