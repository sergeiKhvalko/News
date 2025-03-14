import cn from "classnames";
import * as styles from "./Skeleton.module.scss";
import { CSSProperties, memo } from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, width, height, border } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={cn(styles.Skeleton, [className])}
      style={style}
    ></div>
  );
});
