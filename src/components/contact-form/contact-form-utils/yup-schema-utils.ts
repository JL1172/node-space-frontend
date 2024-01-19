import * as yup from "yup";

export const schema = yup.object().shape({
  category: yup.string().required({ errCat: "Category Is Required" }),
  fullName: yup
    .string()
    .required({ errFull: "Full Name Is Required" })
    .matches(/^[A-Za-z ]*$/, { errFull: "Input Must Only Be Letters" }),
  email: yup
    .string()
    .required({ errEmail: "Email Is Required" })
    .email({ errEmail: "Email Must Be A Valid Email" }),
  message: yup
    .string()
    .required({ errMessage: "Message Is Required" })
    .matches(/^[A-Za-z0-9 ]*$/, {
      errMessage: "Must Only Be An Alphanumeric Input",
    })
    .min(5, { errMessage: "Must Be Longer Than 5 Characters" }),
});
