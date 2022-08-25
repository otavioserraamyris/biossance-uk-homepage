import React from "react";

type ButtonTypes = "button" | "submit" | "reset"

export interface IButton { 
  id?: string,
  buttonType: string,
  text: string,
  type?: ButtonTypes;
  action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  className?: string;
}
