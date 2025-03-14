import cn from "classnames";
import { memo } from "react";
import * as styles from "./AppLink.module.scss";
import { NavLink } from "react-router-dom";
import { AppLinkProps } from "./AppLink.props";

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = "primary",
    activeClassName = "",
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(styles.default, [className, styles[variant]], {
          [activeClassName]: isActive,
        })
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
