import { ReactElement } from "react";


export interface AppProps {
    fetch_endpoint: () => void;
}

export interface CategoryType {
    cat_type: string; 
    cat_icon: ReactElement<any, any>;
    cat_desc: string;

}