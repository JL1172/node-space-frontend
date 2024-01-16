import { ReactElement } from "react";

export interface AppProps {
  fetch_endpoint: () => void;
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
  p1:undefined | ReactElement<any, any>;
  p2:undefined | ReactElement<any, any>;
  p3:undefined | ReactElement<any, any>;
}
