import { FormStateType } from "../../../global-dto/g-dtos";
import { FORMSPREE_ENDPOINT } from "../../../utils/formspree-utils";
import { schema } from "../contact-form-utils/yup-schema-utils";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

export const initialState: FormStateType = {
  category: "",
  fullName: "",
  email: "",
  message: "",
  errors: [],
};

export const useForm = (
  key: string,
  state: FormStateType,
  setSpinnerOn: any,
  setSuccessMessage: any
): any[] => {
  const [data, setData] = useLocalStorage(key, state);

  const formValidation = async () => {
    try {
      schema.validateSync(data, {
        abortEarly: false,
        stripUnknown: true,
      }); //eslint-disable
      setData({ ...data, errors: [] });
      return true;
    } catch (err: any) {
      const errors: Record<string, string>[] = err.errors;
      setData({ ...data, errors: errors });
      return false;
    }
  };

  const changeHandler = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };
  const submitHandler = async (e: Event) => {
    e.preventDefault();
    const result: boolean | undefined = await formValidation();
    if (result === true) {
      const { category, fullName, email, message } = data;
      const payload: Record<string, string> = {
        category,
        fullName,
        email,
        message,
      };
      axios
        .post(FORMSPREE_ENDPOINT, payload)
        .then()
        .catch((err) => {
          alert(err.message);
        })
        .finally(() => {
          setTimeout(() => {
            window.localStorage.clear();
            setData(initialState);
            setSpinnerOn(false);
            setSuccessMessage(true);
          }, 500);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000);
        });
    } else {
      setSpinnerOn(false);
    }
  };
  return [data, changeHandler, submitHandler, formValidation];
};
