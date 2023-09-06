import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {}

/**
 * Custom wrapper for input component
 * @param props
 * @constructor
 */
export function Input(props: Props) {
  return <input {...props} />;
}
