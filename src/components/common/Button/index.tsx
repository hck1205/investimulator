import { ReactNode } from "react";
import clsx from "clsx";

import { ButtonWrapper } from "./styles";

type Props = {
  children: ReactNode;
  className?: string | string[];
  type?: "primary" | "default" | "disabled";
};

function Button({ children, className = [], type = "primary" }: Props) {
  return (
    <ButtonWrapper
      className={clsx([
        "common-buttons",
        type,
        Array.isArray(className) ? [...className] : className,
      ])}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
