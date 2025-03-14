import cn from "classnames";
import * as styles from "./NotFounPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={cn(styles.NotFoundPage, [className])}>Page not found</div>
  );
};
