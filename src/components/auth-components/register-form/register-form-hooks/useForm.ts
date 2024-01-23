import { useState } from "react";
import { ROLE, RegisterStateType } from "../../../../global-dto/g-dtos";
import { registerEndpoint } from "../../../../api/auth-endpoint";

export const initialState: RegisterStateType = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  username: "",
  fullNameErrorMessage: [{ first_name: {} }, { last_name: {} }],
  emailErrorMessage: [{ email: {} }],
  usernameErrorMessage: [{ username: {} }],
  passwordErrorMessage: [{ password: {} }],
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
      await registerEndpoint(payload);
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        if (err.response.data.message === "API Key Required") {
          alert(err.response.data.message);
        }
        if (
          !err.response.data.message.first_name &&
          !err.response.data.message.last_name
        ) {
          setFormData({
            ...formData,
            fullNameErrorMessage: [{ first_name: {} }, { last_name: {} }],
            pageNumber: 1,
          });
        } else {
          const { first_name = "", last_name = "" } = err.response.data.message;
          setFormData({
            ...formData,
            fullNameErrorMessage: [
              { first_name: first_name },
              { last_name: last_name },
            ],
          });
        }
      } else {
        alert(`${err.message} Reload Page`);
      }
    }
  };
  const verifyUsername = async () => {
    try {
      const payload: { username: string } = {
        username: formData.username,
      };
      await registerEndpoint(payload);
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        if (err.response.data.message === "API Key Required") {
          alert(err.response.data.message);
        }
        if (!err.response.data.message.username) {
          setFormData({
            ...formData,
            usernameErrorMessage: [{ username: {} }],
            pageNumber: 2,
          });
        } else {
          const { username = "" } = err.response.data.message;
          setFormData({
            ...formData,
            usernameErrorMessage: [{ username: username }],
          });
        }
      } else {
        alert(`${err.message} Reload Page`);
      }
    }
  };
  const verifyEmail = async () => {
    try {
      const payload: { email: string } = {
        email: formData.email,
      };
      await registerEndpoint(payload);
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        if (err.response.data.message === "API Key Required") {
          alert(err.response.data.message);
        }
        if (!err.response.data.message.email) {
          setFormData({
            ...formData,
            emailErrorMessage: [{ email: {} }],
            pageNumber: 3,
          });
        } else {
          const { email = "" } = err.response.data.message;
          setFormData({
            ...formData,
            emailErrorMessage: [{ email: email }],
          });
        }
      } else {
        alert(`${err.message} Reload Page`);
      }
    }
  };
  const verifyPassword = async () => {
    try {
      const finalPayload = {
        first_name: formData.fname,
        last_name: formData.lname,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        role: formData.role,
      };
      const res = await registerEndpoint(finalPayload);
      console.log(res);
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        if (err.response.data.message === "API Key Required") {
          alert(err.response.data.message);
        }
        if (!err.response.data.message.password) {
          if (
            err.response.data.message &&
            !err.response.data.message.first_name &&
            !err.response.data.message.last_name &&
            !err.response.data.message.email &&
            !err.response.data.message.username &&
            !err.response.data.message.role
          ) {
            const response = err.response.data.message;
            const emailReg = new RegExp("Email");
            const usernameReg = new RegExp("Username");
            const result: boolean[] = [];
            if (emailReg.test(response)) result.push(true);
            else result.push(false);
            if (usernameReg.test(response)) result.push(true);
            else result.push(false);
            if (result[0] && result[1]) {
              setFormData({
                ...formData,
                passwordErrorMessage: [{ password: {} }],
                pageNumber: 1,
                usernameErrorMessage: [{username: err.response.data.message}],
                emailErrorMessage: [{email: err.response.data.message}],
              });
            } else if (result[0] && !result[1]) {
              setFormData({
                ...formData,
                passwordErrorMessage: [{ password: {} }],
                pageNumber: 2,
                emailErrorMessage: [{email: err.response.data.message}],
              });
            } else if (!result[0] && result[1]) {
              setFormData({
                ...formData,
                passwordErrorMessage: [{ password: {} }],
                pageNumber: 1,
                usernameErrorMessage: [{username: err.response.data.message}],
              });
            }
          } else {
            setFormData({
              ...formData,
              passwordErrorMessage: [{ password: {} }],
              pageNumber: 3,
            });
            alert('successful');
          }
        } else {
          const { password = "" } = err.response.data.message;
          setFormData({
            ...formData,
            passwordErrorMessage: [{ password: password }],
          });
        }
      } else {
        alert(`${err.message} Reload Page`);
      }
    }
  };

  return [
    formData,
    changeHandler,
    renderPage,
    verifyFull,
    verifyUsername,
    verifyEmail,
    verifyPassword,
  ];
};
