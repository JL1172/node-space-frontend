import { useState } from "react";
import { FormStateType } from "../../../global-dto/g-dtos";

export const initialState: FormStateType = {
  category: "",
  fullName: "",
  email: "",
  message: "",
  disabled: true,
  eCat: "",
  eFull:"",
  eEmail:"",
  eMessage:"",
};

export const useForm = (key: string, state: FormStateType): any[] => {
  const [data, setData] = useState(state);
  const changeHandler = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };
  const verifyFields = (): void => {
    if (
      data.category &&
      data.fullName.trim().length > 4 &&
      data.email.trim().length > 5 &&
      data.message.trim().length > 5
      ) {
        setData({ ...data, disabled: false });
      } else {
        setData({ ...data, disabled: true });
      }
    };
  const submitHandler = (e: Event) => {
    e.preventDefault();
  };
  return [data, changeHandler, submitHandler, verifyFields];
};
