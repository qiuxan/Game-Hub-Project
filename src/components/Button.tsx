import React, { ReactNode } from "react";
import { MouseEvent } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "dark";
  onClick: (event: MouseEvent) => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
