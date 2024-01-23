import { useState } from "react";
import { ROLE, RegisterStateType } from "../../../../global-dto/g-dtos";
import { registerEndpoint } from "../../../../api/auth-endpoint";

export const initialState: RegisterStateType = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  username: "",
  fullNameErrorMessage: "",
  emailErrorMessage: "",
  usernameErrorMessage: "",
  passwordErrorMessage: "",
  role: ROLE.USER,
  pageNumber: 0,
};

export const useForm = (state: any) => {
  const [formData, setFormData] = useState(state);
  const renderPage = (page: number) => {
    setFormData({ ...formData, pageNumber: page });
  };
  const changeHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const verifyFull = async () => {
    try {
      const payload: { first_name: string; last_name: string } = {
        first_name: formData.fname,
        last_name: formData.lname,
      };
      const res = await registerEndpoint(payload);
      console.log(res);
    } catch (err: any) {
      // const { fname, lname } = err.response.data.message;
      console.error(err);
    }
  };

  return [formData, changeHandler, renderPage, verifyFull];
};
