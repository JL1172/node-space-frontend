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
  blogState: BlogFormState;
  initCategoryFetch: Function;
  set_blog_fetch_status: Function;
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
  read_only_sc: string;
  blog_author_name: string;
  blog_category: string;
  sub_categories: any[];
  blog_intro: string;
  blog_body: string;
  blog_outro: string;
  blog_summary: string;
  files: string[];
}

export interface BlogFormState {
  category_fetch_err: string;
  categories: Record<string, any>[];
  blog_fetch_status: boolean;
}

export interface FinalBlogPayloadType {
  blog_title: string;
  blog_intro: string;
  blog_body: string;
  blog_outro: string;
  blog_summary: string;
  blog_author_name: string;
  category_id: number;
  sub_categories: number[];
}
