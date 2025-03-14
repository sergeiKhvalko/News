import { memo, ReactNode } from "react";
import cn from "classnames";
import * as styles from "./Card.module.scss";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = memo(({ className, children }: CardProps) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
});

Card.displayName = "Card";
export { Card };
