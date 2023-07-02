import React, { ReactNode } from "react";
import { MouseEvent } from "react";
import style from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "dark";
  onClick: (event: MouseEvent) => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  console.log(color);
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={[style["btn-" + color], style["btn"]].join(" ")}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
