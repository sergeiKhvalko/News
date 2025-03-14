import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  appearance?: "ghost" | "outline" | "primary";
  children?: ReactNode;
  square?: boolean;
  size?: "m" | "l" | "xl";
  color?: "success" | "normal" | "error";
  fullWidth?: boolean;
  disabled?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}
