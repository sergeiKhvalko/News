import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "red";
  activeClassName?: string;
}
