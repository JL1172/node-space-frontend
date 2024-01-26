import { useState } from "react";
import { ROLE, AuthStateType } from "../../../../global-dto/g-dtos";
import { loginEndpoint, registerEndpoint } from "../../../../api/auth-endpoint";
import { AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";

export const initialState: AuthStateType = {
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
  loginError: "",
  registerSuccessMessage: "",
  login_password: "",
  login_username: "",
  log_username_err: "",
  log_password_err: "",
};

export const useForm = (
  state: AuthStateType,
  nav: NavigateFunction,
  setLoadingState: Function
) => {
  const [formData, setFormData] = useState(state);
  const renderPage = (page: number) => {
    setFormData({ ...formData, pageNumber: page });
  };
  const changeHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const verifyFull = async (): Promise<void> => {
    try {
      const payload: { first_name: string; last_name: string } = {
        first_name: formData.fname,
        last_name: formData.lname,
      };
      await registerEndpoint(payload);
    } catch (err: any | unknown) {
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
  const verifyUsername = async (): Promise<void> => {
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
  const verifyEmail = async (): Promise<void> => {
    try {
      const payload: { email: string } = {
        email: formData.email,
      };
      await registerEndpoint(payload);
    } catch (err: any | unknown) {
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
  const verifyPassword = async (): Promise<void> => {
    try {
      setLoadingState(true);
      const finalPayload: {
        first_name: string;
        last_name: string;
        email: string;
        username: string;
        password: string;
        role: ROLE.USER;
      } = {
        first_name: formData.fname,
        last_name: formData.lname,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        role: formData.role,
      };
      const res: AxiosResponse = await registerEndpoint(finalPayload);
      setFormData({
        ...formData,
        login_password: formData.password,
        login_username: formData.username,
        username: "",
        password: "",
        fname: "",
        lname: "",
        email: "",
        fullNameErrorMessage: [{ first_name: {} }, { last_name: {} }],
        emailErrorMessage: [{ email: {} }],
        usernameErrorMessage: [{ username: {} }],
        passwordErrorMessage: [{ password: {} }],
        role: ROLE.USER,
        pageNumber: 0,
        loginError: "",
        registerSuccessMessage: res.data.message,
      });
      setLoadingState(false);
      nav("/creator/login");
    } catch (err: any | unknown) {
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
                usernameErrorMessage: [{ username: err.response.data.message }],
                emailErrorMessage: [{ email: err.response.data.message }],
              });
            } else if (result[0] && !result[1]) {
              setFormData({
                ...formData,
                passwordErrorMessage: [{ password: {} }],
                pageNumber: 2,
                emailErrorMessage: [{ email: err.response.data.message }],
              });
            } else if (!result[0] && result[1]) {
              setFormData({
                ...formData,
                passwordErrorMessage: [{ password: {} }],
                pageNumber: 1,
                usernameErrorMessage: [{ username: err.response.data.message }],
              });
            }
          } else {
            setFormData({
              ...formData,
              passwordErrorMessage: [{ password: {} }],
              pageNumber: 3,
            });
            alert("successful");
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
      setLoadingState(false);
    } finally {
      setTimeout(() => {
        setFormData({ ...formData, registerSuccessMessage: "" });
      }, 5000);
    }
  };
  const login = async (): Promise<void> => {
    try {
      setLoadingState(true);
      const res: any = await loginEndpoint({
        username: formData.login_username,
        password: formData.login_password,
      });
      const input: string = res.data.token;
      window.localStorage.clear();
      window.localStorage.setItem('token', JSON.stringify(input));
      setFormData(initialState);
      setLoadingState(false);
      nav("/creator/blog-form");
    } catch (err: any | unknown) {
      if (err.response.data.message === "API Key Required") {
        alert(err.response.data.message);
      }
      const usernameEmpty: Record<string, string> =
        err.response.data.message.username;
      const passwordEmpty: Record<string, string> =
        err.response.data.message.password;
      if (usernameEmpty && passwordEmpty) {
        setFormData({
          ...formData,
          log_username_err: usernameEmpty.isNotEmpty,
          log_password_err: passwordEmpty.isNotEmpty,
          loginError: "",
        });
      }
      if (passwordEmpty && !usernameEmpty) {
        setFormData({
          ...formData,
          log_password_err: passwordEmpty.isNotEmpty,
          log_username_err: "",
          loginError: "",
        });
      }
      if (!passwordEmpty && usernameEmpty) {
        setFormData({
          ...formData,
          log_username_err: usernameEmpty.isNotEmpty,
          log_password_err: "",
          loginError: "",
        });
      }
      if (!passwordEmpty && !usernameEmpty) {
        setFormData({
          ...formData,
          log_username_err: "",
          log_password_err: "",
          loginError:
            err.response.data.message.response || err.response.data.message,
        });
      }
      setLoadingState(false);
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
    login,
  ];
};
