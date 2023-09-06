import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {}

/**
 * Custom wrapper for button element
 * @param children
 * @param type
 * @param rest
 * @constructor
 */
export function Button({ children, type, ...rest }: Props) {
  return (
    <button type={(type as HTMLButtonElement["type"]) ?? "button"} {...rest}>
      {children}
    </button>
  );
}
