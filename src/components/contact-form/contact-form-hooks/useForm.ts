import { useState } from "react";
import { FormStateType } from "../../../global-dto/g-dtos";
import { schema } from "../contact-form-utils/yup-schema-utils";

export const initialState: FormStateType = {
  category: "",
  fullName: "",
  email: "",
  message: "",
  errors: [],
};

export const useForm = (key: string, state: FormStateType): any[] => {
  const [data, setData] = useState(state);

  const formValidation = async () => {
    try {
      schema.validateSync(data, {
        abortEarly: false,
        stripUnknown: true,
      }); //eslint-disable
      return true;
    } catch (err: any) {
      const errors: Record<string, string>[] = err.errors;
      setData({...data, errors: errors});
      }
    }

  const changeHandler = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e: Event) => {
    console.log(data);
    e.preventDefault();
    const result: boolean | undefined = await formValidation();
    if (result === true) {
      console.log(data);
    }
  };
  return [data, changeHandler, submitHandler, formValidation];
};
