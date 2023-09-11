import * as yup from "yup";

export const email = (msg?: string) => yup.string().email(msg);

export const text = () => yup.string();
