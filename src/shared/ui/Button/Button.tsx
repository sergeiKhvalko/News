import cn from "classnames";
import * as styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import { ForwardedRef, forwardRef } from "react";

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      appearance = "primary",
      square,
      size = "m",
      color = "normal",
      fullWidth,
      disabled,
      addonLeft,
      addonRight,
      ...otherProps
    } = props;

    const mods = {
      [styles.disabled]: disabled,
      [styles.square]: square,
      [styles.fullWidth]: fullWidth,
      [styles.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        type="button"
        className={cn(
          styles.button,
          [className, styles[appearance], styles[size], styles[color]],
          mods,
        )}
        {...otherProps}
        ref={ref}
      >
        <div className={styles.addonLeft}>{addonLeft}</div>
        {children}
        <div className={styles.addonRight}>{addonRight}</div>
      </button>
    );
  },
);
