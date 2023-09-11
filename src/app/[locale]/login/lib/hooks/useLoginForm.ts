import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { email, text } from "@src/lib/utils/yupValidations";

export interface LoginFormValues {
  email: string;
  password: string;
}

const getDefaultValue = () => {
  return {
    email: "",
    password: "",
  };
};

const schema = yup
  .object({
    email: email().trim().required(),
    password: text().required(),
  })
  .required();

const useLoginForm = () => {
  return useForm<LoginFormValues>({
    mode: "onChange",
    defaultValues: getDefaultValue(),
    resolver: yupResolver(schema),
  });
};

export default useLoginForm;
