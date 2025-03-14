import cn from "classnames";
import * as styles from "./PageLoader.module.scss";
import { Loader } from "@/shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn(styles.pageLoader, [className])}>
      <Loader />
    </div>
  );
};
